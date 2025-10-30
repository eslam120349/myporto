import React from 'react';
import type { Route } from './_types/blog';

const blogPosts = [
  {
    id: 1,
    title: 'كيف تحب الماث؟',
    excerpt: 'نصائح وأساليب تجعل تعلم الماث ممتعاً وسهلاً لجميع الطلاب.',
    date: '2024-03-15',
    readTime: '5 دقائق',
    imageUrl: '/images/math-love.jpg',
    category: 'نصائح تعليمية'
  },
  {
    id: 2,
    title: 'أسرار النجاح في الجبر',
    excerpt: 'دليل شامل لفهم المعادلات الجبرية وحلها بسهولة.',
    date: '2024-03-10',
    readTime: '7 دقائق',
    imageUrl: '/images/algebra-success.jpg',
    category: 'الجبر'
  },
  {
    id: 3,
    title: 'الهندسة في حياتنا اليومية',
    excerpt: 'اكتشف كيف تؤثر الهندسة على حياتنا اليومية بطرق لا تتخيلها.',
    date: '2024-03-05',
    readTime: '6 دقائق',
    imageUrl: '/images/geometry-life.jpg',
    category: 'الهندسة'
  },
  {
    id: 4,
    title: 'مهارات حل المسائل الرياضية',
    excerpt: 'استراتيجيات فعالة لتحسين قدرتك على حل المسائل الرياضية.',
    date: '2024-03-01',
    readTime: '8 دقائق',
    imageUrl: '/images/problem-solving.jpg',
    category: 'مهارات الماث'
  },
  {
    id: 5,
    title: 'الإحصاء للمبتدئين',
    excerpt: 'مقدمة سهلة وبسيطة لفهم أساسيات الإحصاء وتطبيقاته.',
    date: '2024-02-25',
    readTime: '6 دقائق',
    imageUrl: '/images/statistics-basics.jpg',
    category: 'الإحصاء'
  },
  {
    id: 6,
    title: 'التفاضل والتكامل في الحياة العملية',
    excerpt: 'أمثلة عملية على استخدام التفاضل والتكامل في مختلف المجالات.',
    date: '2024-02-20',
    readTime: '9 دقائق',
    imageUrl: '/images/calculus-applications.jpg',
    category: 'التفاضل والتكامل'
  }
];

const categories = Array.from(new Set(blogPosts.map(post => post.category)));

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog | Eslam" },
    { name: "description", content: "Educational articles and insights about mathematics" },
  ];
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
          المقالات التعليمية
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          اكتشف مقالات تعليمية متنوعة في مجال الماث
        </p>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن مقال..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex flex-wrap gap-2">
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

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-48 bg-blue-100 dark:bg-blue-900">
                <div className="absolute inset-0 flex items-center justify-center text-blue-500 dark:text-blue-400">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>{post.date}</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                  <a
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    اقرأ المزيد
                    <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              لم يتم العثور على مقالات تطابق بحثك
            </p>
          </div>
        )}
      </div>
    </div>
  );
}