import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

// ------------------------------
// Question Type
// ------------------------------
interface Question {
  id: number;
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
  difficulty: string;
  grade_id: number;
}

// ------------------------------
// Component Start
// ------------------------------
export default function QuestionsPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedGrade, setSelectedGrade] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // ------------------------------
  // Load data from Supabase
  // ------------------------------
  useEffect(() => {
    const fetchQuestions = async () => {
      const { data, error } = await supabase
        .from("questions")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error loading questions:", error);
      } else if (data) {
        setQuestions(data as Question[]);
      }
      setLoading(false);
    };

    fetchQuestions();
  }, []);

  // ------------------------------
  // Extract filters
  // ------------------------------
  const gradeLevels = Array.from(new Set(questions.map((q) => q.grade_id))).sort();
  const difficulties = ["easy", "medium", "hard"];

  // ------------------------------
  // Filtering
  // ------------------------------
  const filteredQuestions = questions.filter((q) => {
    const matchGrade = selectedGrade === "all" || q.grade_id === Number(selectedGrade);
    const matchDiff = selectedDifficulty === "all" || q.difficulty === selectedDifficulty;
    const matchSearch =
      q.question_text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.option_a.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.option_b.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.option_c.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.option_d.toLowerCase().includes(searchQuery.toLowerCase());

    return matchGrade && matchDiff && matchSearch;
  });

  // ------------------------------
  // UI
  // ------------------------------
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Questions Bank
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Browse all questions stored inside your Supabase database
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-10 space-y-6">

          {/* Search */}
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500"
          />

          {/* Grade + Difficulty */}
          <div className="flex flex-wrap gap-4 justify-between">

            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700 text-gray-800 dark:text-white"
            >
              <option value="all">All Grades</option>
              {gradeLevels.map((g) => (
                <option key={g} value={g}>Grade {g}</option>
              ))}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700 text-gray-800 dark:text-white"
            >
              <option value="all">All Difficulty</option>
              {difficulties.map((d) => (
                <option key={d} value={d}>
                  {d.charAt(0).toUpperCase() + d.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Questions List */}
        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Loading...
          </p>
        ) : filteredQuestions.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg">
            No questions found.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {filteredQuestions.map((q) => (
              <div
                key={q.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  {q.question_text}
                </h3>

                {/* Options */}
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-3">
                  <li><strong>A:</strong> {q.option_a}</li>
                  <li><strong>B:</strong> {q.option_b}</li>
                  <li><strong>C:</strong> {q.option_c}</li>
                  <li><strong>D:</strong> {q.option_d}</li>
                </ul>

                {/* Tags */}
                <div className="flex justify-between mt-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                    Difficulty: {q.difficulty}
                  </span>

                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm">
                    Grade: {q.grade_id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-700">
  <p className="text-sm text-gray-700 dark:text-gray-300">
    تمت إضافة السؤال بواسطة:{" "}
    <a href="#" className="text-blue-600 dark:text-blue-400 underline">
      مستر اسلام سعيد
    </a>
    {" "}–{" "}
    <a href="#" className="text-blue-600 dark:text-blue-400 underline">
      مستر اسلام سيد
    </a>
  </p>
</div>
      </div>
    </section>
  );
}
