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

// Demo questions are retained for the original site preview.
// New verified questions are original PrepBangla drafts, checked against standard
// economics definitions and official reference material. They are not copied PYQs.
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
  },
  {
    id: "wbcs-econ-001", exam: "WBCS", subject: "Economy",
    question: { en: "In economics, opportunity cost is best defined as:", bn: "অর্থনীতিতে সুযোগ ব্যয় বলতে কী বোঝায়?" },
    options: [
      { en: "The money spent on all available alternatives", bn: "সমস্ত উপলব্ধ বিকল্পে ব্যয় করা অর্থ" },
      { en: "The value of the next best alternative forgone", bn: "ত্যাগ করা পরবর্তী সেরা বিকল্পটির মূল্য" },
      { en: "The accounting cost recorded in books", bn: "হিসাবের খাতায় নথিভুক্ত ব্যয়" },
      { en: "The market price of the chosen good", bn: "নির্বাচিত পণ্যের বাজারদর" }
    ],
    answer: 1,
    explanation: { en: "Choosing one option means giving up another. Opportunity cost is the value of the best alternative sacrificed, not necessarily a cash payment.", bn: "একটি বিকল্প বেছে নিলে অন্য একটি বিকল্প ত্যাগ করতে হয়। ত্যাগ করা সেরা বিকল্পটির মূল্যই সুযোগ ব্যয়; এটি সবসময় নগদ অর্থের ব্যয় নয়।" },
    source: "Original PrepBangla question; standard introductory microeconomics concept.",
    status: "verified"
  },
  {
    id: "wbcs-econ-002", exam: "WBCS", subject: "Economy",
    question: { en: "The basic economic problem of scarcity exists because:", bn: "সম্পদের স্বল্পতার মৌলিক অর্থনৈতিক সমস্যা সৃষ্টি হয় কেন?" },
    options: [
      { en: "Human wants are always limited", bn: "মানুষের চাহিদা সর্বদা সীমিত" },
      { en: "Resources are limited in relation to human wants", bn: "মানুষের চাহিদার তুলনায় সম্পদ সীমিত" },
      { en: "All resources are equally distributed", bn: "সব সম্পদ সমানভাবে বণ্টিত" },
      { en: "Markets always produce a surplus", bn: "বাজার সর্বদা উদ্বৃত্ত উৎপাদন করে" }
    ],
    answer: 1,
    explanation: { en: "Scarcity means resources are insufficient to satisfy all wants. It makes choice and allocation necessary.", bn: "স্বল্পতা অর্থ সব চাহিদা পূরণের জন্য সম্পদ যথেষ্ট নয়। তাই নির্বাচন ও সম্পদ বণ্টনের প্রয়োজন হয়।" },
    source: "Original PrepBangla question; standard introductory economics concept.",
    status: "verified"
  },
  {
    id: "wbcs-econ-003", exam: "WBCS", subject: "Economy",
    question: { en: "An outward shift of the production possibility frontier most directly indicates:", bn: "উৎপাদন সম্ভাবনা সীমারেখা বাইরের দিকে সরে যাওয়া প্রধানত কী নির্দেশ করে?" },
    options: [
      { en: "A fall in the economy's productive capacity", bn: "অর্থনীতির উৎপাদনক্ষমতা হ্রাস" },
      { en: "Economic growth or an increase in productive capacity", bn: "অর্থনৈতিক প্রবৃদ্ধি বা উৎপাদনক্ষমতা বৃদ্ধি" },
      { en: "A movement from one point to another on the same frontier", bn: "একই সীমারেখার এক বিন্দু থেকে অন্য বিন্দুতে চলন" },
      { en: "A fall in consumer preferences", bn: "ভোক্তার পছন্দ হ্রাস" }
    ],
    answer: 1,
    explanation: { en: "More resources, improved technology or higher productivity can expand the combinations of goods an economy is capable of producing.", bn: "সম্পদ বৃদ্ধি, উন্নত প্রযুক্তি বা উৎপাদনশীলতা বৃদ্ধির ফলে অর্থনীতি আরও বেশি পণ্য উৎপাদন করতে পারে; তাই সীমারেখা বাইরে সরে যায়।" },
    source: "Original PrepBangla question; standard production possibility frontier concept.",
    status: "verified"
  },
  {
    id: "wbcs-econ-004", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following is excluded from the calculation of GDP to avoid double counting?", bn: "দ্বৈত গণনা এড়াতে GDP গণনা থেকে কোনটি আলাদাভাবে বাদ দেওয়া হয়?" },
    options: [
      { en: "A newly produced final car", bn: "নতুন উৎপাদিত চূড়ান্ত গাড়ি" },
      { en: "A newly provided medical service", bn: "নতুন প্রদত্ত চিকিৎসা পরিষেবা" },
      { en: "Steel used as an input to manufacture a car", bn: "গাড়ি তৈরির উপকরণ হিসেবে ব্যবহৃত ইস্পাত" },
      { en: "A newly constructed house", bn: "নতুন নির্মিত বাড়ি" }
    ],
    answer: 2,
    explanation: { en: "The value of intermediate inputs such as steel is already reflected in the value of the final car. Counting both separately would double count production.", bn: "ইস্পাতের মতো মধ্যবর্তী উপকরণের মূল্য চূড়ান্ত গাড়ির মূল্যের মধ্যেই অন্তর্ভুক্ত থাকে। দুটিকে আলাদাভাবে যোগ করলে দ্বৈত গণনা হবে।" },
    source: "Original PrepBangla question; MoSPI national accounts methodology.",
    status: "verified"
  },
  {
    id: "wbcs-econ-005", exam: "WBCS", subject: "Economy",
    question: { en: "Which statement correctly distinguishes real GDP from nominal GDP?", bn: "প্রকৃত GDP ও নামমাত্র GDP-র মধ্যে সঠিক পার্থক্য কোনটি?" },
    options: [
      { en: "Real GDP uses current prices, while nominal GDP uses constant prices", bn: "প্রকৃত GDP চলতি দাম এবং নামমাত্র GDP স্থির দাম ব্যবহার করে" },
      { en: "Real GDP uses constant prices to remove the effect of price changes", bn: "মূল্যস্তরের পরিবর্তনের প্রভাব বাদ দিতে প্রকৃত GDP স্থির দাম ব্যবহার করে" },
      { en: "Real GDP includes only exports", bn: "প্রকৃত GDP-তে শুধু রপ্তানি অন্তর্ভুক্ত" },
      { en: "Nominal GDP excludes services", bn: "নামমাত্র GDP-তে পরিষেবা বাদ যায়" }
    ],
    answer: 1,
    explanation: { en: "Nominal GDP values output at current prices. Real GDP values output at constant prices so that changes better reflect changes in production volume.", bn: "নামমাত্র GDP চলতি দামে উৎপাদনের মূল্য নির্ধারণ করে। প্রকৃত GDP স্থির দামে মূল্যায়ন করে, ফলে উৎপাদনের পরিমাণগত পরিবর্তন ভালোভাবে বোঝা যায়।" },
    source: "Original PrepBangla question; MoSPI national accounts and GDP methodology.",
    status: "verified"
  },
  {
    id: "wbcs-econ-006", exam: "WBCS", subject: "Economy",
    question: { en: "Net Domestic Product (NDP) is obtained by subtracting which item from GDP?", bn: "GDP থেকে কোন উপাদান বাদ দিলে নিট দেশজ উৎপাদন (NDP) পাওয়া যায়?" },
    options: [
      { en: "Exports", bn: "রপ্তানি" },
      { en: "Imports", bn: "আমদানি" },
      { en: "Consumption of fixed capital (depreciation)", bn: "স্থায়ী মূলধনের ক্ষয় বা অবচয়" },
      { en: "Indirect taxes", bn: "পরোক্ষ কর" }
    ],
    answer: 2,
    explanation: { en: "NDP = GDP minus consumption of fixed capital, commonly called depreciation.", bn: "NDP = GDP − স্থায়ী মূলধনের ক্ষয়, যাকে সাধারণভাবে অবচয় বলা হয়।" },
    source: "Original PrepBangla question; MoSPI national accounts methodology.",
    status: "verified"
  },
  {
    id: "wbcs-econ-007", exam: "WBCS", subject: "Economy",
    question: { en: "Which index is primarily designed to measure changes in the retail prices of a basket of goods and services consumed by households in India?", bn: "ভারতে পরিবারগুলির ভোগ করা পণ্য ও পরিষেবার ঝুড়ির খুচরা দামের পরিবর্তন মাপার জন্য প্রধানত কোন সূচক ব্যবহৃত হয়?" },
    options: [
      { en: "Index of Industrial Production (IIP)", bn: "শিল্প উৎপাদন সূচক (IIP)" },
      { en: "Consumer Price Index (CPI)", bn: "ভোক্তা মূল্যসূচক (CPI)" },
      { en: "Wholesale Price Index (WPI)", bn: "পাইকারি মূল্যসূচক (WPI)" },
      { en: "Nifty 50", bn: "নিফটি ৫০" }
    ],
    answer: 1,
    explanation: { en: "CPI tracks retail price changes in a representative basket of goods and services consumed by households. It is widely used as a measure of consumer inflation.", bn: "CPI পরিবারগুলির ভোগ করা পণ্য ও পরিষেবার প্রতিনিধিত্বমূলক ঝুড়ির খুচরা দামের পরিবর্তন মাপে। ভোক্তা মুদ্রাস্ফীতি পরিমাপেও এটি বহুল ব্যবহৃত।" },
    source: "Original PrepBangla question; MoSPI CPI methodology and FAQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-008", exam: "WBCS", subject: "Economy",
    question: { en: "A sustained increase in the general price level of goods and services in an economy is known as:", bn: "অর্থনীতিতে পণ্য ও পরিষেবার সাধারণ মূল্যস্তরের ধারাবাহিক বৃদ্ধিকে কী বলা হয়?" },
    options: [
      { en: "Deflation", bn: "মুদ্রাসংকোচন" },
      { en: "Disinflation", bn: "মুদ্রাস্ফীতির হার হ্রাস" },
      { en: "Inflation", bn: "মুদ্রাস্ফীতি" },
      { en: "Recession", bn: "মন্দা" }
    ],
    answer: 2,
    explanation: { en: "Inflation is a sustained rise in the general price level. Disinflation means inflation is slowing, while deflation means the general price level is falling.", bn: "সাধারণ মূল্যস্তরের ধারাবাহিক বৃদ্ধিই মুদ্রাস্ফীতি। মুদ্রাস্ফীতির হার কমার অর্থ disinflation; আর সাধারণ মূল্যস্তর কমার অর্থ deflation।" },
    source: "Original PrepBangla question; standard macroeconomics terminology.",
    status: "verified"
  },
  {
    id: "wbcs-econ-009", exam: "WBCS", subject: "Economy",
    question: { en: "Which institution is India's central bank?", bn: "ভারতের কেন্দ্রীয় ব্যাংক কোনটি?" },
    options: [
      { en: "State Bank of India", bn: "স্টেট ব্যাঙ্ক অফ ইন্ডিয়া" },
      { en: "Reserve Bank of India", bn: "রিজার্ভ ব্যাঙ্ক অফ ইন্ডিয়া" },
      { en: "Securities and Exchange Board of India", bn: "ভারতীয় সিকিউরিটিজ ও বিনিময় পর্ষদ" },
      { en: "NABARD", bn: "ন্যাবার্ড" }
    ],
    answer: 1,
    explanation: { en: "The Reserve Bank of India is India's central bank. It performs central banking functions, including monetary policy and regulation/supervision of parts of the financial system.", bn: "রিজার্ভ ব্যাঙ্ক অফ ইন্ডিয়া ভারতের কেন্দ্রীয় ব্যাংক। এটি মুদ্রানীতি পরিচালনা এবং আর্থিক ব্যবস্থার বিভিন্ন অংশের নিয়ন্ত্রণ ও তদারকির মতো কেন্দ্রীয় ব্যাংকের কাজ করে।" },
    source: "Original PrepBangla question; Reserve Bank of India official material.",
    status: "verified"
  },
  {
    id: "wbcs-econ-010", exam: "WBCS", subject: "Economy",
    question: { en: "Under a repo transaction, the Reserve Bank of India provides short-term liquidity to eligible participants against:", bn: "রেপো লেনদেনে রিজার্ভ ব্যাঙ্ক অফ ইন্ডিয়া যোগ্য অংশগ্রহণকারীদের কোনটির বিপরীতে স্বল্পমেয়াদি তারল্য দেয়?" },
    options: [
      { en: "Unsecured personal guarantees", bn: "জামানতবিহীন ব্যক্তিগত গ্যারান্টি" },
      { en: "Eligible collateral, such as government securities", bn: "যোগ্য জামানত, যেমন সরকারি সিকিউরিটিজ" },
      { en: "Only foreign currency notes", bn: "শুধু বিদেশি মুদ্রার নোট" },
      { en: "Shares of any private company", bn: "যেকোনো বেসরকারি প্রতিষ্ঠানের শেয়ার" }
    ],
    answer: 1,
    explanation: { en: "A repo is a liquidity-providing transaction in which eligible securities are used as collateral. The exact eligible participants and securities are governed by RBI rules.", bn: "রেপো হলো তারল্য প্রদানের লেনদেন, যেখানে যোগ্য সিকিউরিটিজ জামানত হিসেবে ব্যবহৃত হয়। কারা অংশ নিতে পারবে এবং কোন সিকিউরিটিজ যোগ্য হবে, তা RBI-র নিয়মে নির্ধারিত।" },
    source: "Original PrepBangla question; RBI monetary policy instruments reference.",
    status: "verified"
  }
];
