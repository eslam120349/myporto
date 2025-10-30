import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

interface Skill {
  id: string;
  name: string;
  level?: number;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-blue-600 dark:text-blue-400 font-mono">
    {children}
  </h2>
);

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div
    className="bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-700 
               p-4 rounded-lg shadow-md 
               transform transition duration-300 ease-out 
               hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/40"
  >
    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
      {skill.name}
    </h3>
    {skill.level && (
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full transition-all"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    )}
  </div>
);

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      const { data, error } = await supabase.from("skills").select("*");
      if (error) {
        console.error("Error fetching skills:", error);
      } else {
        setSkills(data);
      }
      setLoading(false);
    };
    fetchSkills();
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="skills">
      <div className="container mx-auto px-4">
        <SectionTitle>Skills</SectionTitle>

        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <SkillItem key={skill.id} skill={skill} />
            ))}
          </div>
        )}

        <p className="text-center text-gray-500 dark:text-gray-400 mt-12 text-sm">
          ...and always improving!
        </p>
      </div>
    </section>
  );
};

export default Skills;
