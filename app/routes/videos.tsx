import type { MetaFunction } from "@remix-run/node";
import VideosSection from "~/components/VideosSection";

export const meta: MetaFunction = () => {
  return [
    { title: "الفيديوهات التعليمية - إسلام" },
    { name: "description", content: "مجموعة من الدروس المسجلة لمساعدتك في فهم المفاهيم الرياضية" },
  ];
};

export default function Videos() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">الفيديوهات التعليمية</span>
              <span className="block text-blue-600 dark:text-blue-400 text-3xl sm:text-4xl md:text-5xl mt-3">
                تعلم الرياضيات بطريقة سهلة وممتعة
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              اكتشف مجموعة متنوعة من الدروس المسجلة التي تغطي مختلف المواضيع الرياضية. من الجبر إلى التفاضل والتكامل، صممت هذه الدروس لمساعدتك في فهم المفاهيم الرياضية بشكل أفضل.
            </p>
          </div>
        </div>
        <VideosSection />
      </div>
    </main>
  );
}