import React from "react";

const achievements = [
  {
    title: "سنوات الخبرة",
    value: "2+",
    description: "سنوات من التدريس"
  },
  {
    title: "الطلاب",
    value: "50+",
    description: "طالب تم تدريسهم"
  },
  {
    title: "معدل النجاح",
    value: "85%",
    description: "نسبة نجاح الطلاب"
  },
  {
    title: "الشهادات",
    value: "2",
    description: "شهادة معتمدة"
  }
];

export default function AchievementsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="achievements">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-600 dark:text-blue-400">
          الإنجازات والخبرات
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement) => (
            <div 
              key={achievement.title}
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <span className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                {achievement.value}
              </span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}