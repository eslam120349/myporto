import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import SkillsSection from "~/components/SkillsSection";
import AchievementsSection from "~/components/AchievementsSection";
import TestimonialsSection from "~/components/TestimonialsSection";
import CoursesSection from "~/components/CoursesSection";
import BlogSection from "~/components/BlogSection";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "إسلام | مدرس رياضيات محترف" },
    { name: "description", content: "الموقع الشخصي لإسلام - مدرس رياضيات متخصص في تبسيط المفاهيم الرياضية وتقديم تجربة تعليمية فريدة" },
    { name: "keywords", content: "مدرس رياضيات, تعليم الرياضيات, دروس خصوصية, رياضيات اونلاين, شرح الرياضيات" },
  ];
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero />
      <AchievementsSection />
      <SkillsSection />
      <ActivitySection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}