import React, { useState } from "react";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  duration: string;
}

const videos: VideoItem[] = [
  {
    id: "vid1",
    title: "Why √40 = 2√10? | Simplifying Square Roots Made Easy",
    description: "Struggling to understand why √40 equals 2√10? 🤔 In this video, I’ll show you a simple and visual way to see it using a square model. No memorization — just understanding! 🔹 What you’ll learn:  How to simplify square roots step by step. Why √40 is the same as 2√10. A geometric visualization to make it clear.This method will help you truly understand square roots instead of just memorizing formulas. 👉 Perfect for middle school, high school, and anyone learning algebra.  Don’t forget to like 👍, share 🔄, and subscribe 🔔 for more math made simple!",
    url: "https://www.youtube.com/embed/E0u80UHXwtI?si=ju1UsJsZAH5W0M2k",
    category: "الجبر",
    duration: "0:50"
  },
  {
    id: "vid2",
    title: "The Visual Magic of (a+b)² = a² + b² + 2ab - Geometric Proof Explained",
    description: "Discover the beautiful geometric proof behind one of algebra's most fundamental identities! In this video, we use stunning mathematical animations to visually demonstrate why (a+b)² equals a² + b² + 2ab. Watch as abstract algebra comes to life through colorful visual representations",
    url: "https://www.youtube.com/embed/yJwHl0s9wrc?si=1NXH0r4PVczVQuTV",
    category: "الجبر",
    duration: "1:25"
  },
  {
    id: "vid3",
    title: "استكشاف عالم الأعداد الحقيقيّة: أنواع الأعداد ببساطة!",
    description: "في هذا الفيديو التعليمي، سنأخذكم في رحلة ممتعة لاستكشاف عالم الأعداد الحقيقيّة! سنتعرف على الأعداد الطبيعيّة، الأعداد الصحيحة، الأعداد النسبيّة، والأعداد غير النسبيّة بطريقة مبسطة وسهلة الفهم. إذا كنت تتساءل عن الفروق بين هذه الأنواع وكيفية تصنيف الأعداد، فهذا الفيديو هو المكان المناسب لتوضيح كل شيء. استعدوا لتعلّم كيفية التفريق بينها ومعرفة أين تقع الأعداد التي نستخدمها في حياتنا اليومية ضمن هذا التصنيف الرائع!",
    url: "https://www.youtube.com/embed/NpW837oCCFE?si=D2Vk8AiTt3-YNQJx",
    category: "الجبر",
    duration: "1:18"
  },{
        id: "vid4",
    title: "The Trick Behind This Simple Math Problem 🤯 | Learn Algebra the Smart Way",
    description: "In this video, we solve a fascinating algebra problem using a powerful identity trick!You’re given: x + 1/x = 3 and need to find: x³ + 1/x³ Watch step-by-step how simple algebra turns into something amazing 🤯 Everything is beautifully visualized with Manim animation for a clear and engaging explanation. 🎓 Perfect for students who love smart math shortcuts and creative problem solving. Don’t forget to subscribe and turn on notifications 🔔 for more cool math videos!",
    url: "https://www.youtube.com/embed/pd0GU8BmRAo?si=GiTq7_vwL2VVUmEp",
    category: "الجبر",
    duration: "1:33"
  }
];

const categories = Array.from(new Set(videos.map(video => video.category)));

export default function VideosSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="videos">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            الفيديوهات التعليمية
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            مجموعة من الدروس المسجلة لمساعدتك في فهم المفاهيم الرياضية
          </p>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن فيديو..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${selectedCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
              >
                الكل
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Videos Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map(({ id, url, title, description, category, duration }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="aspect-video w-full relative">
                <iframe
                  src={url}
                  title={title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                    {category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              لم يتم العثور على فيديوهات تطابق بحثك
            </p>
          </div>
        )}
      </div>
    </section>
  );
}