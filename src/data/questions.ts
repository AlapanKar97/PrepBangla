export type Question = {
  id: string;
  exam: string;
  subject: string;
  year?: number;
  questionNo?: number;
  question: { en: string; bn: string };
  options: { en: string; bn: string }[];
  answer: number;
  explanation: { en: string; bn: string };
  source?: string;
  status: "demo" | "verified";
};

// DEMO CONTENT ONLY. Replace with verified, permission-cleared PYQs before public launch.
// Never label demo questions as previous-year questions.
export const questions: Question[] = [
  {
    id: "demo-econ-001", exam: "WBCS", subject: "Economy",
    question: { en: "Which institution is responsible for monetary policy in India?", bn: "ভারতে মুদ্রানীতি পরিচালনার দায়িত্ব কোন প্রতিষ্ঠানের?" },
    options: [
      { en: "Ministry of Finance", bn: "অর্থ মন্ত্রক" },
      { en: "Reserve Bank of India", bn: "রিজার্ভ ব্যাঙ্ক অফ ইন্ডিয়া" },
      { en: "NITI Aayog", bn: "নীতি আয়োগ" },
      { en: "SEBI", bn: "সেবি" }
    ],
    answer: 1,
    explanation: { en: "The Reserve Bank of India (RBI) is India's central bank and is responsible for monetary policy.", bn: "রিজার্ভ ব্যাঙ্ক অফ ইন্ডিয়া (RBI) ভারতের কেন্দ্রীয় ব্যাঙ্ক এবং মুদ্রানীতির দায়িত্বে রয়েছে।" },
    status: "demo"
  },
  {
    id: "demo-econ-002", exam: "WBCS", subject: "Economy",
    question: { en: "GDP at market prices includes which of the following?", bn: "বাজারদরে GDP-তে নিচের কোনটি অন্তর্ভুক্ত থাকে?" },
    options: [
      { en: "Only wages", bn: "শুধু মজুরি" },
      { en: "Only exports", bn: "শুধু রপ্তানি" },
      { en: "Value of final goods and services produced within the country", bn: "দেশের অভ্যন্তরে উৎপাদিত চূড়ান্ত পণ্য ও পরিষেবার মূল্য" },
      { en: "Only government expenditure", bn: "শুধু সরকারি ব্যয়" }
    ],
    answer: 2,
    explanation: { en: "GDP measures the market value of all final goods and services produced within a country's domestic territory during a period.", bn: "GDP নির্দিষ্ট সময়ে দেশের ভৌগোলিক সীমানার মধ্যে উৎপাদিত সমস্ত চূড়ান্ত পণ্য ও পরিষেবার বাজারমূল্য পরিমাপ করে।" },
    status: "demo"
  },
  {
    id: "demo-econ-003", exam: "WBCS", subject: "Economy",
    question: { en: "A sustained rise in the general price level is called:", bn: "সাধারণ মূল্যস্তরের ধারাবাহিক বৃদ্ধিকে কী বলা হয়?" },
    options: [
      { en: "Deflation", bn: "মুদ্রাসংকোচন" },
      { en: "Inflation", bn: "মুদ্রাস্ফীতি" },
      { en: "Disinvestment", bn: "বিনিয়োগ প্রত্যাহার" },
      { en: "Depreciation", bn: "অবচয়" }
    ],
    answer: 1,
    explanation: { en: "Inflation is a sustained increase in the general price level, reducing the purchasing power of money.", bn: "মুদ্রাস্ফীতি হলো সাধারণ মূল্যস্তরের ধারাবাহিক বৃদ্ধি, যার ফলে টাকার ক্রয়ক্ষমতা কমে।" },
    status: "demo"
  },
  {
    id: "demo-polity-001", exam: "WBCS", subject: "Polity",
    question: { en: "The Constitution of India came into force on:", bn: "ভারতের সংবিধান কার্যকর হয় কবে?" },
    options: [
      { en: "15 August 1947", bn: "১৫ আগস্ট ১৯৪৭" },
      { en: "26 November 1949", bn: "২৬ নভেম্বর ১৯৪৯" },
      { en: "26 January 1950", bn: "২৬ জানুয়ারি ১৯৫০" },
      { en: "2 October 1950", bn: "২ অক্টোবর ১৯৫০" }
    ],
    answer: 2,
    explanation: { en: "The Constitution was adopted on 26 November 1949 and came into force on 26 January 1950.", bn: "সংবিধান ২৬ নভেম্বর ১৯৪৯ গৃহীত হয় এবং ২৬ জানুয়ারি ১৯৫০ কার্যকর হয়।" },
    status: "demo"
  },
  {
    id: "demo-history-001", exam: "WBCS", subject: "History",
    question: { en: "Who founded the Brahmo Sabha in 1828?", bn: "১৮২৮ সালে ব্রাহ্মসভা কে প্রতিষ্ঠা করেন?" },
    options: [
      { en: "Ishwar Chandra Vidyasagar", bn: "ঈশ্বরচন্দ্র বিদ্যাসাগর" },
      { en: "Raja Rammohan Roy", bn: "রাজা রামমোহন রায়" },
      { en: "Debendranath Tagore", bn: "দেবেন্দ্রনাথ ঠাকুর" },
      { en: "Keshab Chandra Sen", bn: "কেশবচন্দ্র সেন" }
    ],
    answer: 1,
    explanation: { en: "Raja Rammohan Roy founded the Brahmo Sabha in 1828; it later became associated with the Brahmo Samaj.", bn: "রাজা রামমোহন রায় ১৮২৮ সালে ব্রাহ্মসভা প্রতিষ্ঠা করেন; পরবর্তীকালে এটি ব্রাহ্মসমাজ নামে পরিচিত হয়।" },
    status: "demo"
  }
];
