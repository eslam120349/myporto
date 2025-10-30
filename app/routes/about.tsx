import React from 'react';
import type { Route } from "./_types/about";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "react-router-dom";

export const meta: MetaFunction = () => {
  return [
    { title: "عن الأستاذ إسلام | معلم الماث" },
    { name: "description", content: "تعرّف على الأستاذ إسلام - معلم ماث مخلص متخصص في تبسيط المفاهيم المعقدة وجعلها ممتعة للطلاب" },
    { name: "keywords", content: "معلم ماث، تعليم الماث، خبرة التدريس، نجاح الطلاب، دروس خصوصية في الماث" },
  ];
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* القسم التعريفي */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-6">عن الأستاذ إسلام</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            معلم ماث مخلص
          </p>
          <div className="flex justify-center space-x-4 rtl:space-x-reverse">
            <div className="text-center px-6">
              <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">2+</span>
              <span className="text-gray-600 dark:text-gray-300">سنوات خبرة</span>
            </div>
            <div className="text-center px-6">
              <span className="block text-3xl font-bold text-blue-600 dark:text-blue-400">100%</span>
              <span className="text-gray-600 dark:text-gray-300">رضا الطلاب</span>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الخبرات */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">الخبرات التعليمية</h2>
            
            <div className="space-y-8">
              <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">المؤهلات</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    بكالوريوس في تعليم الماث
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    شهادة متقدمة في التدريس
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    متخصص في طرق التدريس الحديثة
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">أسلوب التدريس</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>تبسيط المفاهيم الرياضية المعقدة وجعلها سهلة الفهم</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>استخدام استراتيجيات تعليمية مخصصة لكل طالب</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>دمج الأدوات والتقنيات الحديثة في التعليم</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg transform transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">مجالات التخصص</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-gray-600 rounded-lg">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">الماث الأساسية</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">الجبر، الهندسة، التفاضل والتكامل</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-600 rounded-lg">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">الموضوعات المتقدمة</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">الإحصاء، المثلثات، التحليل</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-600 rounded-lg">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">الاستعداد للاختبارات</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">SAT, ACT, AP</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-600 rounded-lg">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">برامج خاصة</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">أولمبياد الماث، التحضير للمسابقات</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* فلسفة التعليم */}
      <section className="py-16 bg-blue-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">فلسفة التدريس</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
              أؤمن أن كل طالب لديه القدرة على التفوق في الماث. هدفي هو تنمية هذه القدرة من خلال بيئة تعليمية محفزة تعزز الفهم والتفكير النقدي ومهارات حل المشكلات.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">تعلم تفاعلي</h3>
                <p className="text-gray-600 dark:text-gray-400">تحفيز الطلاب من خلال طرق تفاعلية وتطبيقات من الواقع</p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">نمو مستمر</h3>
                <p className="text-gray-600 dark:text-gray-400">مساعدة الطلاب على بناء أساس قوي للتقدم في الماث</p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">تعليم بجودة عالية</h3>
                <p className="text-gray-600 dark:text-gray-400">الحفاظ على معايير عالية مع ضمان وصول كل طالب إلى أقصى إمكانياته</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* دعوة للتواصل */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">خلينا نشتغل مع بعض</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            سواء كنت تواجه صعوبة في الماث أو ترغب في التفوق في الموضوعات المتقدمة، أنا هنا لأساعدك على تحقيق أهدافك الأكاديمية.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 hover:scale-105 transform"
          >
            تواصل معي
          </Link>
        </div>
      </section>
    </div>
  );
}
