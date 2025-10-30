import React from 'react';
import { useParams } from 'react-router';
import type { Route } from './_types/blog.$id';

const blogPosts = [
  {
    id: 1,
    title: 'كيف تحب الماث؟',
    content: `
      الماث هي لغة الكون وأساس العلوم كلها. في هذا المقال، سنستكشف معاً كيف يمكن أن نجعل تعلم الماث تجربة ممتعة ومثيرة للاهتمام.

      ## لماذا يجب أن نحب الماث؟

      1. **تنمي التفكير المنطقي**: الماث تساعدنا على تطوير مهارات التفكير المنطقي وحل المشكلات.
      2. **موجودة في كل مكان**: من التسوق اليومي إلى التكنولوجيا المتقدمة، الماث حولنا في كل مكان.
      3. **تفتح آفاق مهنية**: العديد من المهن المرموقة تتطلب فهماً جيداً للماث.

      ## نصائح لتحسين علاقتك بالماث

      ### 1. ابدأ من الأساسيات
      - تأكد من فهمك للمفاهيم الأساسية
      - لا تتردد في مراجعة المواضيع السابقة
      - ابنِ أساساً متيناً قبل الانتقال للمواضيع المتقدمة

      ### 2. اربط الماث بالحياة اليومية
      - ابحث عن تطبيقات عملية للمفاهيم الرياضية
      - استخدم الماث في حل مشكلات حقيقية
      - اكتشف الماث في الطبيعة والفن

      ### 3. مارس بانتظام
      - حل التمارين بشكل منتظم
      - ابدأ بالمسائل السهلة وتدرج نحو الأصعب
      - لا تخف من الخطأ، فهو جزء من عملية التعلم

      ## خاتمة

      تذكر دائماً أن الماث ليست مجرد أرقام ومعادلات، بل هي طريقة للتفكير وفهم العالم من حولنا. مع الممارسة والصبر والفهم الصحيح، يمكن لأي شخص أن يطور علاقة إيجابية مع الماث.
    `,
    date: '2024-03-15',
    readTime: '5 دقائق',
    author: 'إسلام',
    category: 'نصائح تعليمية'
  },
  // Add more blog posts here
];

export function meta({ params }: Route.MetaArgs) {
  const post = blogPosts.find(p => p.id === parseInt(params.id));
  return [
    { title: post ? `${post.title} | Eslam's Blog` : 'Blog Post Not Found' },
    { name: 'description', content: post ? post.content.substring(0, 160) : 'Blog post not found' },
  ];
}

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            المقال غير موجود
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            عذراً، لم نتمكن من العثور على المقال المطلوب
          </p>
          <a
            href="/blog"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            العودة إلى المدونة
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <article className="container mx-auto max-w-3xl">
        <header className="mb-8">
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span>{post.date}</span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              <span className="font-medium">بقلم: {post.author}</span>
            </div>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('##')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-4">
                  {paragraph.replace('##', '').trim()}
                </h2>
              );
            } else if (paragraph.startsWith('###')) {
              return (
                <h3 key={index} className="text-xl font-bold text-gray-800 dark:text-white mt-6 mb-3">
                  {paragraph.replace('###', '').trim()}
                </h3>
              );
            } else if (paragraph.startsWith('- ')) {
              return (
                <ul key={index} className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                  {paragraph.split('\n').map((item, i) => (
                    <li key={i} className="mb-2">{item.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            } else {
              return (
                <p key={index} className="text-gray-700 dark:text-gray-300 mb-4">
                  {paragraph}
                </p>
              );
            }
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <a
            href="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            <svg className="w-4 h-4 ml-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            العودة إلى المدونة
          </a>
        </div>
      </article>
    </div>
  );
}