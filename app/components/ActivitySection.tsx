import React, { useState, useMemo, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import { evaluate, parse } from "mathjs";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);
ChartJS.register(zoomPlugin);




export default function ActivitySection() {
  const [expression, setExpression] = useState<string>("x^2");
  const [activity, setActivity] = useState<"graph" | "cube">("graph");
  const chartRef = useRef<any>(null);

  // Compute data points and possible error without causing state updates inside render
  const { xs, ys, error, latex } = useMemo(() => {
    try {
      const node = parse(expression); // validate & parse
      const latexStr = node.toTex({ parenthesis: "auto" });

      const xs: number[] = [];
      const ys: number[] = [];
      for (let x = -10; x <= 10; x += 0.5) {
        xs.push(x);
        const y = evaluate(expression, { x });
        ys.push(typeof y === "number" && isFinite(y) ? y : NaN);
      }
      return { xs, ys, error: null as string | null, latex: latexStr };
    } catch {
      return { xs: [], ys: [], error: "صيغة غير صالحة", latex: "" };
    }
  }, [expression]);

  const data = {
    labels: xs,
    datasets: [
      {
        label: `y = ${expression}`,
        data: ys,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.3)",
        fill: false,
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Graph",
      },
      zoom: {
        zoom: {
          wheel: { enabled: true },
          pinch: { enabled: true },
          mode: "xy",
        },
        pan: {
          enabled: true,
          mode: "xy",
        },
        limits: {
          x: { min: -100, max: 100 },
          y: { min: -100, max: 100 },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "x",
        },
        grid: { color: "rgba(0,0,0,0.1)" },
      },
      y: {
        title: {
          display: true,
          text: "y",
        },
        grid: { color: "rgba(0,0,0,0.1)" },
      },
    },
  } as const;

  const handleReset = () => {
    if (chartRef.current) {
      chartRef.current.resetZoom();
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">قسم النشاطات</h2>
        {/* Activity selection buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActivity("graph")}
            className={`px-4 py-2 rounded-md text-white ${activity === "graph" ? "bg-blue-600" : "bg-gray-500"}`}
          >
            الرسم البياني
          </button>
          <button
            onClick={() => setActivity("cube")}
            className={`px-4 py-2 rounded-md text-white ${activity === "cube" ? "bg-blue-600" : "bg-gray-500"}`}
          >
            مكعب ثلاثي الأبعاد
          </button>
        </div>

        {/* Render selected activity */}
        {activity === "graph" ? (
          <>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              اكتب معادلة رياضية (مثال: <code className="bg-gray-200 px-1">x^2</code> أو {" "}
              <code className="bg-gray-200 px-1">sin(x)</code>) وسيتم رسمها فورًا.
            </p>
            <div className="max-w-md mx-auto mb-4">
              <input
                type="text"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
                placeholder="اكتب المعادلة هنا"
              />
              {error ? (
                <p className="text-red-500 mt-2 text-sm">{error}</p>
              ) : (
                <div className="mt-2 text-lg text-gray-800 dark:text-gray-100">
                  <BlockMath math={latex} />
                </div>
              )}
            </div>
            <div className="relative w-full max-w-2xl mx-auto">
              <Line ref={chartRef} data={data} options={options} />
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              إعادة تعيين الرسم
            </button>
          </>
        ) : (
          <CubeActivity3D />
        )}
      </div>
    </section>
  );
}

function SpinningBox(props: any) {
  const ref = useRef<any>();
  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.5;
      ref.current.rotation.y += delta * 0.7;
    }
  });
  return (
    <mesh ref={ref} {...props}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  );
}

function CubeActivity3D() {
  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <SpinningBox />
        <OrbitControls />
      </Canvas>
    </div>
  );
}