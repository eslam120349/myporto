import React from "react";
import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 text-white px-4 py-24">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg animate-fade-in">
        مستر إسلام
      </h1>
      <p className="text-2xl md:text-3xl font-medium mb-8 animate-slide-up">
        مدرس الماث
      </p>
      <p className="max-w-2xl text-lg md:text-xl leading-relaxed animate-fade-in delay-150 mb-12">
        اكتشف روعة الأرقام والمعادلات مع دروس شيقة وشروحات إبداعية. انغمس في عالم الماث مع صور تفاعلية وإرشادات شاملة.
      </p>
      <Link 
        to="/contact"
        className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in delay-300"
      >
        تواصل معي
      </Link>
    </section>
  );
}