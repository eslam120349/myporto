import React from 'react';
import { Link } from 'react-router';

const blogPosts = [
  {
    id: 1,
    title: 'كيف تحب الرياضيات؟',
    excerpt: 'نصائح وأساليب تجعل تعلم الرياضيات ممتعاً وسهلاً لجميع الطلاب.',
    date: '2024-03-15',
    readTime: '5 دقائق',
    imageUrl: '/images/math-love.jpg'
  },
  {
    id: 2,
    title: 'أسرار النجاح في الجبر',
    excerpt: 'دليل شامل لفهم المعادلات الجبرية وحلها بسهولة.',
    date: '2024-03-10',
    readTime: '7 دقائق',
    imageUrl: '/images/algebra-success.jpg'
  },
  {
    id: 3,
    title: 'الهندسة في حياتنا اليومية',
    excerpt: 'اكتشف كيف تؤثر الهندسة على حياتنا اليومية بطرق لا تتخيلها.',
    date: '2024-03-05',
    readTime: '6 دقائق',
    imageUrl: '/images/geometry-life.jpg'
  }
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          المقالات التعليمية
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
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
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  اقرأ المزيد
                  <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            جميع المقالات
          </Link>
        </div>
      </div>
    </section>
  );
}