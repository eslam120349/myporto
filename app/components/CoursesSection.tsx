import React from "react";

const courses = [
  {
    title: "الجبر المتقدم",
    description: "دورة شاملة في الجبر تغطي المعادلات، المصفوفات، والدوال",
    duration: "12 أسبوع",
    level: "متقدم",
    topics: ["المعادلات الخطية", "المصفوفات", "الدوال الأسية واللوغاريتمية"]
  },
  {
    title: "حساب المثلثات",
    description: "فهم عميق للعلاقات المثلثية والتطبيقات العملية",
    duration: "8 أسابيع",
    level: "متوسط",
    topics: ["الدوال المثلثية", "المعادلات المثلثية", "تطبيقات عملية"]
  },
  {
    title: "التفاضل والتكامل",
    description: "أساسيات ومفاهيم متقدمة في الحساب التفاضلي والتكاملي",
    duration: "16 أسبوع",
    level: "متقدم",
    topics: ["المشتقات", "التكاملات", "تطبيقات في الفيزياء"]
  }
];

export default function CoursesSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="courses">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-600 dark:text-blue-400">
          الدورات التعليمية
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    {course.duration}
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                    {course.level}
                  </span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">المواضيع الرئيسية:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {course.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}