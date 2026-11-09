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

export const questions: Question[] = [
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
  },
  {
    id: "wbcs-econ-011", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following is a direct tax in India?", bn: "ভারতে নিচের কোনটি প্রত্যক্ষ কর?" },
    options: [
      { en: "Goods and Services Tax", bn: "পণ্য ও পরিষেবা কর" },
      { en: "Customs duty", bn: "শুল্ক" },
      { en: "Personal income tax", bn: "ব্যক্তিগত আয়কর" },
      { en: "Excise duty", bn: "আবগারি শুল্ক" }
    ],
    answer: 2,
    explanation: { en: "A direct tax is imposed directly on the income or wealth of the person who bears its burden. Personal income tax is a direct tax.", bn: "প্রত্যক্ষ কর সেই ব্যক্তি বা প্রতিষ্ঠানের আয় বা সম্পদের উপর সরাসরি আরোপিত হয়, যিনি করের বোঝা বহন করেন। ব্যক্তিগত আয়কর প্রত্যক্ষ কর।" },
    source: "Original PrepBangla question; standard Indian economics and official institutional reference.",
    status: "verified"
  },
  {
    id: "wbcs-econ-012", exam: "WBCS", subject: "Economy",
    question: { en: "Goods and Services Tax (GST) in India is best described as:", bn: "ভারতে পণ্য ও পরিষেবা কর (GST)-কে কীভাবে বর্ণনা করা যায়?" },
    options: [
      { en: "A tax on income", bn: "আয়ের উপর কর" },
      { en: "A destination-based indirect tax on supply", bn: "সরবরাহের উপর গন্তব্যভিত্তিক পরোক্ষ কর" },
      { en: "A tax only on imports", bn: "শুধু আমদানির উপর কর" },
      { en: "A tax on agricultural land", bn: "কৃষিজমির উপর কর" }
    ],
    answer: 1,
    explanation: { en: "GST is a destination-based indirect tax levied on the supply of goods and services, subject to statutory provisions and exemptions.", bn: "GST হলো পণ্য ও পরিষেবার সরবরাহের উপর আরোপিত গন্তব্যভিত্তিক পরোক্ষ কর; আইন অনুযায়ী কিছু ছাড় ও বিশেষ বিধান রয়েছে।" },
    source: "Original PrepBangla question; standard Indian economics and official institutional reference.",
    status: "verified"
  },
  {
    id: "wbcs-econ-013", exam: "WBCS", subject: "Economy",
    question: { en: "Which body recommends the distribution of the net proceeds of certain taxes between the Union and the States?", bn: "কেন্দ্র ও রাজ্যের মধ্যে নির্দিষ্ট করের নিট আয় বণ্টনের সুপারিশ করে কোন সংস্থা?" },
    options: [
      { en: "Finance Commission", bn: "অর্থ কমিশন" },
      { en: "Election Commission", bn: "নির্বাচন কমিশন" },
      { en: "NITI Aayog", bn: "নীতি আয়োগ" },
      { en: "Goods and Services Tax Council", bn: "জিএসটি কাউন্সিল" }
    ],
    answer: 0,
    explanation: { en: "Article 280 provides for a Finance Commission, which recommends the distribution of tax proceeds between the Union and States and grants-in-aid principles.", bn: "সংবিধানের ২৮০ অনুচ্ছেদে অর্থ কমিশনের বিধান রয়েছে। এটি কেন্দ্র ও রাজ্যের মধ্যে করের আয় বণ্টন এবং অনুদান-সহায়তার নীতি সম্পর্কে সুপারিশ করে।" },
    source: "Original PrepBangla question; standard Indian economics and official institutional reference.",
    status: "verified"
  },
  {
    id: "wbcs-econ-014", exam: "WBCS", subject: "Economy",
    question: { en: "The annual financial statement of the Government of India is referred to in which Article of the Constitution?", bn: "ভারত সরকারের বার্ষিক আর্থিক বিবৃতি সংবিধানের কোন অনুচ্ছেদে উল্লেখিত?" },
    options: [
      { en: "Article 110", bn: "অনুচ্ছেদ ১১০" },
      { en: "Article 112", bn: "অনুচ্ছেদ ১১২" },
      { en: "Article 123", bn: "অনুচ্ছেদ ১২৩" },
      { en: "Article 280", bn: "অনুচ্ছেদ ২৮০" }
    ],
    answer: 1,
    explanation: { en: "Article 112 requires the President to cause an annual financial statement of the estimated receipts and expenditure of the Government of India to be laid before both Houses of Parliament.", bn: "১১২ অনুচ্ছেদ অনুযায়ী রাষ্ট্রপতি ভারত সরকারের সম্ভাব্য আয় ও ব্যয়ের বার্ষিক আর্থিক বিবৃতি সংসদের উভয় কক্ষে পেশ করার ব্যবস্থা করেন।" },
    source: "Original PrepBangla question; standard Indian economics and official institutional reference.",
    status: "verified"
  },
  {
    id: "wbcs-econ-015", exam: "WBCS", subject: "Economy",
    question: { en: "A fiscal deficit broadly represents:", bn: "সাধারণভাবে রাজস্ব ঘাটতি নয়, রাজকোষীয় ঘাটতি বলতে কী বোঝায়?" },
    options: [
      { en: "Revenue expenditure minus revenue receipts", bn: "রাজস্ব ব্যয় থেকে রাজস্ব প্রাপ্তি বাদ" },
      { en: "Total expenditure minus total receipts excluding borrowings", bn: "ঋণ বাদে মোট প্রাপ্তি থেকে মোট ব্যয় বাদ" },
      { en: "Imports minus exports", bn: "আমদানি থেকে রপ্তানি বাদ" },
      { en: "Interest payments minus tax revenue", bn: "সুদ প্রদান থেকে কর রাজস্ব বাদ" }
    ],
    answer: 1,
    explanation: { en: "Fiscal deficit is the excess of total expenditure over total receipts excluding borrowings. It indicates the government's borrowing requirement.", bn: "ঋণগ্রহণ বাদে মোট প্রাপ্তির তুলনায় মোট ব্যয় যত বেশি, সেই ব্যবধানই রাজকোষীয় ঘাটতি। এটি সরকারের ঋণগ্রহণের প্রয়োজন নির্দেশ করে।" },
    source: "Original PrepBangla question; standard Indian economics and official institutional reference.",
    status: "verified"
  },
  {
    id: "wbcs-econ-016", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following is generally classified as revenue expenditure in the Union Budget?", bn: "কেন্দ্রীয় বাজেটে নিচের কোনটি সাধারণত রাজস্ব ব্যয় হিসেবে গণ্য হয়?" },
    options: [
      { en: "Construction of a new national highway", bn: "নতুন জাতীয় সড়ক নির্মাণ" },
      { en: "Purchase of land for a railway project", bn: "রেল প্রকল্পের জন্য জমি ক্রয়" },
      { en: "Interest payment on government debt", bn: "সরকারি ঋণের সুদ প্রদান" },
      { en: "Construction of a government hospital building", bn: "সরকারি হাসপাতাল ভবন নির্মাণ" }
    ],
    answer: 2,
    explanation: { en: "Interest payments are revenue expenditure because they do not directly create a government asset. Infrastructure construction generally falls under capital expenditure.", bn: "সুদের অর্থপ্রদান রাজস্ব ব্যয়, কারণ এটি সরাসরি সরকারি সম্পদ সৃষ্টি করে না। অবকাঠামো নির্মাণ সাধারণত মূলধনী ব্যয়ের অন্তর্ভুক্ত।" },
    source: "Original PrepBangla question; standard Indian economics and official institutional reference.",
    status: "verified"
  },
  {
    id: "wbcs-econ-017", exam: "WBCS", subject: "Economy",
    question: { en: "Which measure is most directly used by a central bank to signal a change in its monetary policy stance in India?", bn: "ভারতে মুদ্রানীতির অবস্থানে পরিবর্তনের সংকেত দিতে কেন্দ্রীয় ব্যাংক কোন উপকরণটি সরাসরি ব্যবহার করে?" },
    options: [
      { en: "Repo rate", bn: "রেপো হার" },
      { en: "Corporate income tax rate", bn: "কর্পোরেট আয়করের হার" },
      { en: "Minimum support price", bn: "ন্যূনতম সহায়ক মূল্য" },
      { en: "Customs tariff", bn: "শুল্ক হার" }
    ],
    answer: 0,
    explanation: { en: "The policy repo rate is a key policy rate announced by the RBI's Monetary Policy Committee and is central to the monetary policy framework.", bn: "নীতিগত রেপো হার RBI-র মুদ্রানীতি কমিটি ঘোষিত একটি গুরুত্বপূর্ণ হার এবং ভারতের মুদ্রানীতি কাঠামোর কেন্দ্রীয় উপকরণ।" },
    source: "Original PrepBangla question; standard Indian economics and official institutional reference.",
    status: "verified"
  },
  {
    id: "wbcs-econ-018", exam: "WBCS", subject: "Economy",
    question: { en: "If the RBI increases the Cash Reserve Ratio (CRR), banks generally have to:", bn: "RBI নগদ রিজার্ভ অনুপাত (CRR) বাড়ালে সাধারণত ব্যাঙ্কগুলিকে কী করতে হয়?" },
    options: [
      { en: "Keep a larger share of their Net Demand and Time Liabilities as cash balance with RBI", bn: "নিট চাহিদা ও মেয়াদি দায়ের বেশি অংশ RBI-র কাছে নগদ রাখতে" },
      { en: "Lend all deposits to the government", bn: "সমস্ত আমানত সরকারকে ঋণ দিতে" },
      { en: "Increase their equity capital by the same percentage", bn: "একই হারে ইকুইটি মূলধন বাড়াতে" },
      { en: "Reduce their statutory audit frequency", bn: "বাধ্যতামূলক অডিটের সংখ্যা কমাতে" }
    ],
    answer: 0,
    explanation: { en: "CRR is the prescribed share of a bank's Net Demand and Time Liabilities that it must maintain as cash balance with the RBI. A higher CRR can reduce lendable resources.", bn: "CRR হলো ব্যাঙ্কের নিট চাহিদা ও মেয়াদি দায়ের নির্দিষ্ট অংশ, যা RBI-র কাছে নগদ হিসেবে রাখতে হয়। CRR বাড়লে ঋণ দেওয়ার মতো তহবিল কমতে পারে।" },
    source: "Original PrepBangla question; standard Indian economics and official institutional reference.",
    status: "verified"
  },
  {
    id: "wbcs-econ-019", exam: "WBCS", subject: "Economy",
    question: { en: "Which institution is primarily responsible for regulating the securities market in India?", bn: "ভারতে সিকিউরিটিজ বাজার নিয়ন্ত্রণের প্রধান দায়িত্ব কোন প্রতিষ্ঠানের?" },
    options: [
      { en: "Reserve Bank of India", bn: "রিজার্ভ ব্যাঙ্ক অফ ইন্ডিয়া" },
      { en: "Securities and Exchange Board of India", bn: "ভারতীয় সিকিউরিটিজ ও বিনিময় পর্ষদ" },
      { en: "Insurance Regulatory and Development Authority of India", bn: "ভারতীয় বিমা নিয়ন্ত্রণ ও উন্নয়ন কর্তৃপক্ষ" },
      { en: "NABARD", bn: "ন্যাবার্ড" }
    ],
    answer: 1,
    explanation: { en: "SEBI is the statutory regulator of India's securities market. RBI regulates banks and specified financial activities, not the securities market as a whole.", bn: "SEBI ভারতের সিকিউরিটিজ বাজারের বিধিবদ্ধ নিয়ন্ত্রক। RBI ব্যাঙ্ক ও নির্দিষ্ট আর্থিক কার্যক্রম নিয়ন্ত্রণ করে, সমগ্র সিকিউরিটিজ বাজার নয়।" },
    source: "Original PrepBangla question; standard Indian economics and official institutional reference.",
    status: "verified"
  },
  {
    id: "wbcs-econ-020", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following is a primary function of the National Bank for Agriculture and Rural Development (NABARD)?", bn: "জাতীয় কৃষি ও গ্রামীণ উন্নয়ন ব্যাঙ্ক (NABARD)-এর প্রধান কাজ কোনটি?" },
    options: [
      { en: "Regulating the stock exchanges", bn: "শেয়ার বাজার নিয়ন্ত্রণ" },
      { en: "Providing and supporting credit for agriculture and rural development", bn: "কৃষি ও গ্রামীণ উন্নয়নের জন্য ঋণ সহায়তা প্রদান" },
      { en: "Issuing currency notes", bn: "মুদ্রা নোট জারি" },
      { en: "Managing India's foreign exchange reserves", bn: "ভারতের বৈদেশিক মুদ্রার ভান্ডার পরিচালনা" }
    ],
    answer: 1,
    explanation: { en: "NABARD is an apex development financial institution focused on credit and development support for agriculture and rural development.", bn: "NABARD কৃষি ও গ্রামীণ উন্নয়নের জন্য ঋণ এবং উন্নয়নমূলক সহায়তা প্রদানকারী শীর্ষ উন্নয়ন আর্থিক প্রতিষ্ঠান।" },
    source: "Original PrepBangla question; standard Indian economics and official institutional reference.",
    status: "verified"
  },
  {
    id: "wbcs-econ-021", exam: "WBCS", subject: "Economy",
    question: { en: "Which component is included in the expenditure method of calculating GDP?", bn: "GDP গণনার ব্যয় পদ্ধতিতে কোন উপাদানটি অন্তর্ভুক্ত হয়?" },
    options: [{ en: "Private final consumption expenditure", bn: "ব্যক্তিগত চূড়ান্ত ভোগ ব্যয়" }, { en: "Intermediate goods purchased by firms", bn: "সংস্থার কেনা মধ্যবর্তী পণ্য" }, { en: "Purchase of existing shares", bn: "পুরনো শেয়ার ক্রয়" }, { en: "Transfer payments", bn: "হস্তান্তরমূলক অর্থপ্রদান" }],
    answer: 0,
    explanation: { en: "The expenditure method adds final consumption, investment, government expenditure and net exports. Intermediate goods are excluded to avoid double counting.", bn: "ব্যয় পদ্ধতিতে চূড়ান্ত ভোগ, বিনিয়োগ, সরকারি ব্যয় এবং নিট রপ্তানি যোগ করা হয়। দ্বৈত গণনা এড়াতে মধ্যবর্তী পণ্য বাদ থাকে।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-022", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following is a transfer payment?", bn: "নিচের কোনটি হস্তান্তরমূলক অর্থপ্রদান?" },
    options: [{ en: "Pension paid by the government", bn: "সরকারের দেওয়া পেনশন" }, { en: "Salary paid to a government teacher", bn: "সরকারি শিক্ষকের বেতন" }, { en: "Payment for construction of a road", bn: "রাস্তা নির্মাণের মূল্য" }, { en: "Price paid for wheat procurement", bn: "গম সংগ্রহের জন্য দেওয়া দাম" }],
    answer: 0,
    explanation: { en: "A pension transfers purchasing power without a current good or service being produced in return; it is excluded from GDP as government production expenditure.", bn: "পেনশন প্রদানের বিনিময়ে চলতি সময়ে কোনো পণ্য বা পরিষেবা উৎপাদিত হয় না; তাই এটি সরকারি উৎপাদন ব্যয় হিসেবে GDP-তে ধরা হয় না।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-023", exam: "WBCS", subject: "Economy",
    question: { en: "Gross National Income (GNI) is broadly equal to GDP plus:", bn: "মোট জাতীয় আয় (GNI) সাধারণভাবে GDP-র সঙ্গে কী যোগ করলে পাওয়া যায়?" },
    options: [{ en: "Net primary income from the rest of the world", bn: "বিশ্বের বাকি অংশ থেকে নিট প্রাথমিক আয়" }, { en: "Depreciation", bn: "অবচয়" }, { en: "Indirect taxes", bn: "পরোক্ষ কর" }, { en: "Fiscal deficit", bn: "রাজকোষীয় ঘাটতি" }],
    answer: 0,
    explanation: { en: "GNI measures income accruing to residents: GDP plus net primary income from abroad.", bn: "GNI দেশের অধিবাসীদের অর্জিত আয় মাপে: GDP-র সঙ্গে বিদেশ থেকে নিট প্রাথমিক আয় যোগ করা হয়।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-024", exam: "WBCS", subject: "Economy",
    question: { en: "If nominal GDP rises by 10% while the GDP deflator rises by 6%, real GDP growth is approximately:", bn: "নামমাত্র GDP ১০% বাড়ে এবং GDP ডিফ্লেটর ৬% বাড়ে, তবে প্রকৃত GDP-র বৃদ্ধি আনুমানিক কত?" },
    options: [{ en: "4%", bn: "৪%" }, { en: "6%", bn: "৬%" }, { en: "10%", bn: "১০%" }, { en: "16%", bn: "১৬%" }],
    answer: 0,
    explanation: { en: "Approximately, real growth is nominal growth minus inflation measured by the deflator: 10% − 6% = 4%.", bn: "আনুমানিক প্রকৃত বৃদ্ধি = নামমাত্র বৃদ্ধি − ডিফ্লেটরের মূল্যবৃদ্ধি = ১০% − ৬% = ৪%।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-025", exam: "WBCS", subject: "Economy",
    question: { en: "Which situation is an example of demand-pull inflation?", bn: "নিচের কোন পরিস্থিতিটি চাহিদা-প্রণোদিত মুদ্রাস্ফীতির উদাহরণ?" },
    options: [{ en: "Aggregate demand rises faster than productive capacity", bn: "সামগ্রিক চাহিদা উৎপাদনক্ষমতার তুলনায় দ্রুত বাড়ে" }, { en: "Production costs fall sharply", bn: "উৎপাদন ব্যয় দ্রুত কমে" }, { en: "A bumper harvest reduces food prices", bn: "বাম্পার ফলনে খাদ্যের দাম কমে" }, { en: "A fall in household spending", bn: "পরিবারের ব্যয় কমে" }],
    answer: 0,
    explanation: { en: "Demand-pull inflation occurs when aggregate demand grows faster than the economy's ability to supply goods and services.", bn: "অর্থনীতির পণ্য ও পরিষেবা সরবরাহের ক্ষমতার তুলনায় সামগ্রিক চাহিদা দ্রুত বাড়লে demand-pull inflation হয়।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-026", exam: "WBCS", subject: "Economy",
    question: { en: "A fall in the inflation rate from 8% to 5% is called:", bn: "মুদ্রাস্ফীতির হার ৮% থেকে ৫%-এ নেমে আসাকে কী বলা হয়?" },
    options: [{ en: "Deflation", bn: "মুদ্রাসংকোচন" }, { en: "Disinflation", bn: "মুদ্রাস্ফীতির হার হ্রাস" }, { en: "Hyperinflation", bn: "অতিমুদ্রাস্ফীতি" }, { en: "Stagflation", bn: "মন্দাস্ফীতি" }],
    answer: 1,
    explanation: { en: "Prices are still rising, but more slowly. That is disinflation; deflation means a fall in the general price level.", bn: "দাম এখনও বাড়ছে, তবে ধীরগতিতে। এটি disinflation; deflation মানে সাধারণ মূল্যস্তরের পতন।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-027", exam: "WBCS", subject: "Economy",
    question: { en: "Which index is commonly used to measure changes in prices received by producers at the wholesale level in India?", bn: "ভারতে পাইকারি স্তরে উৎপাদকদের প্রাপ্ত দামের পরিবর্তন মাপতে সাধারণত কোন সূচক ব্যবহৃত হয়?" },
    options: [{ en: "CPI", bn: "CPI" }, { en: "WPI", bn: "WPI" }, { en: "IIP", bn: "IIP" }, { en: "HDI", bn: "HDI" }],
    answer: 1,
    explanation: { en: "The Wholesale Price Index tracks price changes of a basket of goods at the wholesale level.", bn: "Wholesale Price Index পাইকারি স্তরে পণ্যের একটি ঝুড়ির দামের পরিবর্তন অনুসরণ করে।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-028", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following is a function of money?", bn: "নিচের কোনটি মুদ্রার একটি কাজ?" },
    options: [{ en: "Medium of exchange", bn: "বিনিময়ের মাধ্যম" }, { en: "Only a measure of population", bn: "শুধু জনসংখ্যার পরিমাপক" }, { en: "A guarantee of profit", bn: "লাভের নিশ্চয়তা" }, { en: "A substitute for all capital", bn: "সমস্ত মূলধনের বিকল্প" }],
    answer: 0,
    explanation: { en: "Money serves as a medium of exchange, unit of account, store of value and standard of deferred payment.", bn: "মুদ্রা বিনিময়ের মাধ্যম, হিসাবের একক, মূল্য সঞ্চয়ের মাধ্যম এবং বিলম্বিত পরিশোধের মানদণ্ড হিসেবে কাজ করে।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-029", exam: "WBCS", subject: "Economy",
    question: { en: "Which monetary aggregate in India includes currency with the public and demand deposits with the banking system, among other components?", bn: "ভারতে কোন মুদ্রা সমষ্টিতে জনসাধারণের হাতে থাকা নগদ এবং ব্যাঙ্কিং ব্যবস্থার চাহিদা আমানতসহ অন্যান্য উপাদান থাকে?" },
    options: [{ en: "M1", bn: "M1" }, { en: "Only reserve money", bn: "শুধু রিজার্ভ মানি" }, { en: "Only time deposits", bn: "শুধু মেয়াদি আমানত" }, { en: "Fiscal deficit", bn: "রাজকোষীয় ঘাটতি" }],
    answer: 0,
    explanation: { en: "M1 is a narrow measure of money and includes currency with the public, demand deposits with the banking system and other deposits with RBI.", bn: "M1 হলো সংকীর্ণ মুদ্রা পরিমাপ; এতে জনসাধারণের হাতে নগদ, ব্যাঙ্কে চাহিদা আমানত এবং RBI-তে অন্যান্য আমানত অন্তর্ভুক্ত।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-030", exam: "WBCS", subject: "Economy",
    question: { en: "An increase in the repo rate, other things equal, is generally intended to:", bn: "অন্যান্য বিষয় অপরিবর্তিত থাকলে রেপো হার বৃদ্ধি সাধারণত কী উদ্দেশ্যে করা হয়?" },
    options: [{ en: "Make borrowing cheaper", bn: "ঋণ সস্তা করা" }, { en: "Tighten monetary conditions and moderate demand", bn: "মুদ্রার শর্ত কঠোর করে চাহিদা নিয়ন্ত্রণ" }, { en: "Increase government tax revenue directly", bn: "সরাসরি সরকারি কর রাজস্ব বাড়ানো" }, { en: "Raise agricultural output immediately", bn: "তাৎক্ষণিকভাবে কৃষি উৎপাদন বাড়ানো" }],
    answer: 1,
    explanation: { en: "A higher policy repo rate tends to raise borrowing costs and restrain demand, helping contain inflationary pressure.", bn: "নীতিগত রেপো হার বাড়লে ঋণের খরচ বাড়তে পারে এবং চাহিদা কমতে পারে, যা মুদ্রাস্ফীতির চাপ নিয়ন্ত্রণে সহায়তা করে।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-031", exam: "WBCS", subject: "Economy",
    question: { en: "The Cash Reserve Ratio is maintained by banks in the form of:", bn: "ব্যাঙ্কগুলি নগদ রিজার্ভ অনুপাত (CRR) কোন রূপে বজায় রাখে?" },
    options: [{ en: "Cash balance with RBI", bn: "RBI-র কাছে নগদ জমা" }, { en: "Gold held by customers", bn: "গ্রাহকদের কাছে থাকা সোনা" }, { en: "Loans to companies", bn: "কোম্পানিকে দেওয়া ঋণ" }, { en: "Government tax receipts", bn: "সরকারি কর আদায়" }],
    answer: 0,
    explanation: { en: "CRR is the share of a bank's net demand and time liabilities maintained as cash balance with the RBI.", bn: "CRR হলো ব্যাঙ্কের নিট চাহিদা ও মেয়াদি দায়ের সেই অংশ যা RBI-র কাছে নগদ হিসেবে রাখতে হয়।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-032", exam: "WBCS", subject: "Economy",
    question: { en: "Open market operations by RBI primarily involve:", bn: "RBI-র উন্মুক্ত বাজার কার্যক্রম (OMO) প্রধানত কী নিয়ে গঠিত?" },
    options: [{ en: "Buying and selling government securities", bn: "সরকারি সিকিউরিটিজ কেনা ও বিক্রি" }, { en: "Fixing income tax slabs", bn: "আয়করের স্ল্যাব নির্ধারণ" }, { en: "Setting minimum support prices", bn: "ন্যূনতম সহায়ক মূল্য নির্ধারণ" }, { en: "Issuing company shares", bn: "কোম্পানির শেয়ার জারি" }],
    answer: 0,
    explanation: { en: "RBI uses purchases and sales of government securities to manage durable liquidity in the banking system.", bn: "ব্যাঙ্কিং ব্যবস্থায় দীর্ঘস্থায়ী তারল্য পরিচালনার জন্য RBI সরকারি সিকিউরিটিজ কেনাবেচা করে।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-033", exam: "WBCS", subject: "Economy",
    question: { en: "Which institution decides India's policy repo rate under the monetary policy framework?", bn: "মুদ্রানীতি কাঠামোর অধীনে ভারতের নীতিগত রেপো হার নির্ধারণ করে কোন সংস্থা?" },
    options: [{ en: "Monetary Policy Committee", bn: "মুদ্রানীতি কমিটি" }, { en: "Finance Commission", bn: "অর্থ কমিশন" }, { en: "SEBI Board", bn: "SEBI বোর্ড" }, { en: "GST Council", bn: "GST কাউন্সিল" }],
    answer: 0,
    explanation: { en: "The RBI's Monetary Policy Committee determines the policy rate required to achieve the inflation target, subject to the statutory framework.", bn: "আইনি কাঠামোর অধীনে মুদ্রাস্ফীতির লক্ষ্যমাত্রা অর্জনের জন্য প্রয়োজনীয় নীতিগত হার RBI-র মুদ্রানীতি কমিটি নির্ধারণ করে।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-034", exam: "WBCS", subject: "Economy",
    question: { en: "Which institution is known as the lender of last resort for banks in India?", bn: "ভারতে ব্যাঙ্কগুলির শেষ আশ্রয়ের ঋণদাতা (lender of last resort) হিসেবে কোন প্রতিষ্ঠান পরিচিত?" },
    options: [{ en: "RBI", bn: "RBI" }, { en: "SEBI", bn: "SEBI" }, { en: "NABARD", bn: "NABARD" }, { en: "IRDAI", bn: "IRDAI" }],
    answer: 0,
    explanation: { en: "As the central bank, RBI can provide liquidity support to eligible banks under prescribed conditions when other funding sources are unavailable.", bn: "কেন্দ্রীয় ব্যাঙ্ক হিসেবে অন্য তহবিলের উৎস না থাকলে RBI নির্ধারিত শর্তে যোগ্য ব্যাঙ্ককে তারল্য সহায়তা দিতে পারে।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-035", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following is a capital receipt of the government?", bn: "নিচের কোনটি সরকারের মূলধনী প্রাপ্তি?" },
    options: [{ en: "Recovery of loans", bn: "ঋণ পুনরুদ্ধার" }, { en: "Income tax", bn: "আয়কর" }, { en: "GST", bn: "GST" }, { en: "Fees for government services", bn: "সরকারি পরিষেবার ফি" }],
    answer: 0,
    explanation: { en: "Recovery of loans reduces financial assets and is classified as a capital receipt; taxes and fees are revenue receipts.", bn: "ঋণ পুনরুদ্ধারে আর্থিক সম্পদ কমে এবং এটি মূলধনী প্রাপ্তি। কর ও ফি রাজস্ব প্রাপ্তি।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-036", exam: "WBCS", subject: "Economy",
    question: { en: "Revenue deficit is equal to:", bn: "রাজস্ব ঘাটতি কিসের সমান?" },
    options: [{ en: "Revenue expenditure minus revenue receipts", bn: "রাজস্ব ব্যয় থেকে রাজস্ব প্রাপ্তি বিয়োগ" }, { en: "Total expenditure minus total receipts", bn: "মোট ব্যয় থেকে মোট প্রাপ্তি বিয়োগ" }, { en: "Fiscal deficit minus borrowings", bn: "রাজকোষীয় ঘাটতি থেকে ঋণ বিয়োগ" }, { en: "Exports minus imports", bn: "রপ্তানি থেকে আমদানি বিয়োগ" }],
    answer: 0,
    explanation: { en: "Revenue deficit occurs when revenue expenditure exceeds revenue receipts.", bn: "রাজস্ব ব্যয় রাজস্ব প্রাপ্তির চেয়ে বেশি হলে রাজস্ব ঘাটতি হয়।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-037", exam: "WBCS", subject: "Economy",
    question: { en: "Primary deficit is calculated as fiscal deficit minus:", bn: "প্রাথমিক ঘাটতি নির্ণয় করতে রাজকোষীয় ঘাটতি থেকে কী বিয়োগ করা হয়?" },
    options: [{ en: "Interest payments", bn: "সুদের অর্থপ্রদান" }, { en: "Capital expenditure", bn: "মূলধনী ব্যয়" }, { en: "Tax revenue", bn: "কর রাজস্ব" }, { en: "External debt", bn: "বৈদেশিক ঋণ" }],
    answer: 0,
    explanation: { en: "Primary deficit excludes interest payments and indicates the current fiscal imbalance apart from past debt interest.", bn: "প্রাথমিক ঘাটতিতে সুদের অর্থপ্রদান বাদ থাকে; অতীতের ঋণের সুদ বাদ দিয়ে বর্তমান রাজকোষীয় ভারসাম্যহীনতা বোঝায়।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-038", exam: "WBCS", subject: "Economy",
    question: { en: "A government budget is called balanced when:", bn: "সরকারি বাজেটকে ভারসাম্যপূর্ণ বলা হয় কখন?" },
    options: [{ en: "Total receipts equal total expenditure", bn: "মোট প্রাপ্তি মোট ব্যয়ের সমান" }, { en: "Tax revenue is zero", bn: "কর রাজস্ব শূন্য" }, { en: "Capital expenditure equals exports", bn: "মূলধনী ব্যয় রপ্তানির সমান" }, { en: "Borrowings exceed expenditure", bn: "ঋণ ব্যয়ের চেয়ে বেশি" }],
    answer: 0,
    explanation: { en: "A balanced budget has total receipts equal to total expenditure under the stated accounting definition.", bn: "উল্লিখিত হিসাবের সংজ্ঞা অনুযায়ী মোট প্রাপ্তি ও মোট ব্যয় সমান হলে বাজেট ভারসাম্যপূর্ণ।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-039", exam: "WBCS", subject: "Economy",
    question: { en: "Which tax is generally considered progressive?", bn: "কোন করকে সাধারণত প্রগতিশীল কর বলা হয়?" },
    options: [{ en: "Personal income tax with rising marginal rates", bn: "বর্ধিত প্রান্তিক হারযুক্ত ব্যক্তিগত আয়কর" }, { en: "A uniform per-unit tax on salt", bn: "লবণের উপর একক প্রতি-ইউনিট কর" }, { en: "A fixed fee irrespective of income", bn: "আয় নির্বিশেষে নির্দিষ্ট ফি" }, { en: "A flat toll per vehicle", bn: "প্রতি গাড়িতে সমান টোল" }],
    answer: 0,
    explanation: { en: "A progressive tax takes a higher proportion of income as income rises, as with a graduated income-tax structure.", bn: "আয় বাড়ার সঙ্গে আয়ের অধিক অনুপাত কর হিসেবে নেওয়া হলে করটি প্রগতিশীল; ধাপভিত্তিক আয়কর এর উদাহরণ।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-040", exam: "WBCS", subject: "Economy",
    question: { en: "The main purpose of a subsidy is generally to:", bn: "ভর্তুকির প্রধান উদ্দেশ্য সাধারণত কী?" },
    options: [{ en: "Lower the effective cost of specified goods or services", bn: "নির্দিষ্ট পণ্য বা পরিষেবার কার্যকর ব্যয় কমানো" }, { en: "Increase customs duties", bn: "শুল্ক বৃদ্ধি" }, { en: "Eliminate all public expenditure", bn: "সমস্ত সরকারি ব্যয় বিলোপ" }, { en: "Raise the market price for consumers", bn: "ভোক্তার জন্য বাজারদর বাড়ানো" }],
    answer: 0,
    explanation: { en: "A subsidy reduces the cost borne by producers or consumers for specified activities or goods, according to policy design.", bn: "নীতির নকশা অনুযায়ী ভর্তুকি নির্দিষ্ট পণ্য বা কার্যক্রমে উৎপাদক বা ভোক্তার বহন করা ব্যয় কমায়।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-041", exam: "WBCS", subject: "Economy",
    question: { en: "Which body replaced the Planning Commission in India?", bn: "ভারতে পরিকল্পনা কমিশনের পরিবর্তে কোন সংস্থা গঠিত হয়?" },
    options: [{ en: "NITI Aayog", bn: "নীতি আয়োগ" }, { en: "Finance Commission", bn: "অর্থ কমিশন" }, { en: "National Development Council", bn: "জাতীয় উন্নয়ন পরিষদ" }, { en: "GST Council", bn: "GST কাউন্সিল" }],
    answer: 0,
    explanation: { en: "NITI Aayog was established in 2015 to replace the Planning Commission and promote cooperative federalism and policy strategy.", bn: "পরিকল্পনা কমিশনের পরিবর্তে ২০১৫ সালে নীতি আয়োগ গঠিত হয়; এর লক্ষ্য সহযোগিতামূলক যুক্তরাষ্ট্রীয়তা ও নীতিগত কৌশলকে উৎসাহিত করা।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-042", exam: "WBCS", subject: "Economy",
    question: { en: "Which approach is most closely associated with inclusive growth?", bn: "অন্তর্ভুক্তিমূলক প্রবৃদ্ধির সঙ্গে কোন ধারণাটি সবচেয়ে বেশি সম্পর্কিত?" },
    options: [{ en: "Broad participation in and sharing of growth benefits", bn: "প্রবৃদ্ধিতে ব্যাপক অংশগ্রহণ ও তার সুফলের ভাগ" }, { en: "Growth limited to a few sectors", bn: "কয়েকটি ক্ষেত্রে সীমাবদ্ধ প্রবৃদ্ধি" }, { en: "Rising output with widening exclusion", bn: "বৈষম্য বাড়িয়ে উৎপাদন বৃদ্ধি" }, { en: "Focusing only on stock-market returns", bn: "শুধু শেয়ার বাজারের আয়ে গুরুত্ব" }],
    answer: 0,
    explanation: { en: "Inclusive growth seeks both economic expansion and wider access to opportunities and benefits across groups and regions.", bn: "অন্তর্ভুক্তিমূলক প্রবৃদ্ধি অর্থনৈতিক সম্প্রসারণের পাশাপাশি বিভিন্ন গোষ্ঠী ও অঞ্চলের মানুষের জন্য সুযোগ ও সুফলের বিস্তার চায়।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-043", exam: "WBCS", subject: "Economy",
    question: { en: "The Human Development Index (HDI) includes indicators of:", bn: "মানব উন্নয়ন সূচক (HDI)-এ কোন বিষয়গুলির সূচক অন্তর্ভুক্ত থাকে?" },
    options: [{ en: "Health, education and income", bn: "স্বাস্থ্য, শিক্ষা ও আয়" }, { en: "Exports, imports and reserves", bn: "রপ্তানি, আমদানি ও বৈদেশিক মুদ্রার ভান্ডার" }, { en: "Inflation, interest and exchange rates", bn: "মুদ্রাস্ফীতি, সুদ ও বিনিময় হার" }, { en: "Tax, subsidy and fiscal deficit", bn: "কর, ভর্তুকি ও রাজকোষীয় ঘাটতি" }],
    answer: 0,
    explanation: { en: "HDI combines life expectancy, education and per-capita income dimensions to summarize human development.", bn: "HDI আয়ু, শিক্ষা এবং মাথাপিছু আয়ের মাত্রা একত্র করে মানব উন্নয়নের সারসংক্ষেপ দেয়।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-044", exam: "WBCS", subject: "Economy",
    question: { en: "Disguised unemployment is most commonly associated with:", bn: "ছদ্মবেকারত্ব সবচেয়ে বেশি কোন ক্ষেত্রের সঙ্গে যুক্ত?" },
    options: [{ en: "Agriculture where some workers can be withdrawn without reducing output", bn: "কৃষিতে যেখানে কিছু শ্রমিক সরালেও উৎপাদন কমে না" }, { en: "A factory operating at full capacity", bn: "পূর্ণ ক্ষমতায় চলা কারখানা" }, { en: "A worker changing jobs", bn: "একজন শ্রমিকের চাকরি পরিবর্তন" }, { en: "A temporary rise in vacancies", bn: "শূন্যপদ সাময়িক বৃদ্ধি" }],
    answer: 0,
    explanation: { en: "In disguised unemployment, more workers are engaged than necessary; the marginal productivity of some workers may be close to zero.", bn: "ছদ্মবেকারত্বে প্রয়োজনের তুলনায় বেশি শ্রমিক নিযুক্ত থাকে; কিছু শ্রমিকের প্রান্তিক উৎপাদনশীলতা প্রায় শূন্য হতে পারে।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-045", exam: "WBCS", subject: "Economy",
    question: { en: "Which measure is commonly used to estimate poverty in India through household consumption expenditure surveys?", bn: "ভারতে পরিবারের ভোগ ব্যয়ের সমীক্ষার মাধ্যমে দারিদ্র্য নিরূপণে সাধারণত কোন বিষয়টি ব্যবহৃত হয়?" },
    options: [{ en: "Consumption expenditure against a poverty threshold", bn: "দারিদ্র্যসীমার তুলনায় ভোগ ব্যয়" }, { en: "Stock-market capitalization", bn: "শেয়ার বাজারের বাজারমূল্য" }, { en: "Foreign exchange reserves", bn: "বৈদেশিক মুদ্রার ভান্ডার" }, { en: "Corporate profit margin", bn: "কোম্পানির মুনাফার হার" }],
    answer: 0,
    explanation: { en: "Consumption expenditure has been a key basis for official poverty estimation in India, using specified methodology and price adjustments.", bn: "নির্দিষ্ট পদ্ধতি ও মূল্য সমন্বয় ব্যবহার করে ভারতে সরকারি দারিদ্র্য নিরূপণে ভোগ ব্যয় গুরুত্বপূর্ণ ভিত্তি হিসেবে ব্যবহৃত হয়েছে।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-046", exam: "WBCS", subject: "Economy",
    question: { en: "Which sector includes activities such as banking, transport and communication?", bn: "ব্যাঙ্কিং, পরিবহণ ও যোগাযোগের মতো কার্যক্রম কোন ক্ষেত্রে পড়ে?" },
    options: [{ en: "Primary", bn: "প্রাথমিক" }, { en: "Secondary", bn: "দ্বিতীয়" }, { en: "Tertiary", bn: "তৃতীয়" }, { en: "Household sector only", bn: "শুধু পরিবার ক্ষেত্র" }],
    answer: 2,
    explanation: { en: "These are service activities and belong to the tertiary sector.", bn: "এগুলি পরিষেবা কার্যক্রম এবং তৃতীয় ক্ষেত্রের অন্তর্ভুক্ত।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-047", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following is a feature of the primary sector?", bn: "নিচের কোনটি প্রাথমিক ক্ষেত্রের বৈশিষ্ট্য?" },
    options: [{ en: "Direct use of natural resources", bn: "প্রাকৃতিক সম্পদের প্রত্যক্ষ ব্যবহার" }, { en: "Manufacturing finished machinery", bn: "সম্পূর্ণ যন্ত্রপাতি উৎপাদন" }, { en: "Providing insurance services", bn: "বিমা পরিষেবা প্রদান" }, { en: "Retail banking", bn: "খুচরো ব্যাঙ্কিং" }],
    answer: 0,
    explanation: { en: "Agriculture, fishing, forestry and mining are primary activities because they depend directly on natural resources.", bn: "কৃষি, মৎস্য, বনজ ও খনন প্রাথমিক কার্যক্রম, কারণ এগুলি সরাসরি প্রাকৃতিক সম্পদের উপর নির্ভরশীল।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-048", exam: "WBCS", subject: "Economy",
    question: { en: "The Green Revolution in India was initially most associated with increased production of:", bn: "ভারতে সবুজ বিপ্লবের প্রাথমিক পর্যায়ে কোন ফসলের উৎপাদন বৃদ্ধির সঙ্গে সবচেয়ে বেশি সম্পর্ক ছিল?" },
    options: [{ en: "Wheat and rice", bn: "গম ও ধান" }, { en: "Tea and coffee", bn: "চা ও কফি" }, { en: "Cotton and jute only", bn: "শুধু তুলা ও পাট" }, { en: "Pulses alone", bn: "শুধু ডাল" }],
    answer: 0,
    explanation: { en: "The early Green Revolution relied on high-yielding varieties, irrigation, fertilizers and support systems, with especially strong initial gains in wheat and rice.", bn: "প্রাথমিক সবুজ বিপ্লবে উচ্চফলনশীল বীজ, সেচ, সার ও সহায়ক ব্যবস্থা ব্যবহৃত হয়; বিশেষত গম ও ধানে উল্লেখযোগ্য প্রাথমিক সাফল্য আসে।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-049", exam: "WBCS", subject: "Economy",
    question: { en: "Minimum Support Price (MSP) is announced primarily to:", bn: "ন্যূনতম সহায়ক মূল্য (MSP) প্রধানত কী উদ্দেশ্যে ঘোষণা করা হয়?" },
    options: [{ en: "Provide a price assurance to farmers for notified crops", bn: "নির্দিষ্ট ফসলের জন্য কৃষকদের মূল্য নিশ্চয়তা দেওয়া" }, { en: "Fix retail prices of all consumer goods", bn: "সব ভোগ্যপণ্যের খুচরো দাম নির্ধারণ" }, { en: "Determine wages in rural areas", bn: "গ্রামীণ মজুরি নির্ধারণ" }, { en: "Set export tariffs for all products", bn: "সব পণ্যের রপ্তানি শুল্ক নির্ধারণ" }],
    answer: 0,
    explanation: { en: "MSP is intended to signal a floor price and protect farmers against sharp price falls, though actual procurement varies by crop and region.", bn: "MSP একটি ন্যূনতম মূল্য সংকেত দেয় এবং তীব্র মূল্যপতন থেকে কৃষকদের সুরক্ষার উদ্দেশ্যে ব্যবহৃত হয়; তবে প্রকৃত সংগ্রহ ফসল ও অঞ্চলভেদে আলাদা।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-050", exam: "WBCS", subject: "Economy",
    question: { en: "Which institution recommends the Minimum Support Prices to the government?", bn: "সরকারকে ন্যূনতম সহায়ক মূল্য সম্পর্কে সুপারিশ করে কোন সংস্থা?" },
    options: [{ en: "Commission for Agricultural Costs and Prices", bn: "কৃষি ব্যয় ও মূল্য কমিশন" }, { en: "NITI Aayog Governing Council", bn: "নীতি আয়োগের পরিচালন পরিষদ" }, { en: "SEBI", bn: "SEBI" }, { en: "RBI Monetary Policy Committee", bn: "RBI মুদ্রানীতি কমিটি" }],
    answer: 0,
    explanation: { en: "The Commission for Agricultural Costs and Prices (CACP) recommends MSPs; the government takes the final decision.", bn: "কৃষি ব্যয় ও মূল্য কমিশন (CACP) MSP-র সুপারিশ করে; চূড়ান্ত সিদ্ধান্ত সরকার নেয়।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-051", exam: "WBCS", subject: "Economy",
    question: { en: "Which is an example of capital formation?", bn: "মূলধন গঠনের উদাহরণ কোনটি?" },
    options: [{ en: "Construction of a new factory", bn: "নতুন কারখানা নির্মাণ" }, { en: "Purchase of an existing second-hand bond", bn: "পুরনো বন্ড কেনা" }, { en: "Payment of an old-age pension", bn: "বার্ধক্য পেনশন প্রদান" }, { en: "Buying groceries for immediate consumption", bn: "তাৎক্ষণিক ভোগের জন্য মুদিখানা কেনা" }],
    answer: 0,
    explanation: { en: "Capital formation adds to productive assets such as machinery, buildings and infrastructure.", bn: "যন্ত্রপাতি, ভবন ও অবকাঠামোর মতো উৎপাদনশীল সম্পদ বৃদ্ধি পাওয়াই মূলধন গঠন।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-052", exam: "WBCS", subject: "Economy",
    question: { en: "A demographic dividend is most likely when:", bn: "জনমিতিক লভ্যাংশ পাওয়ার সম্ভাবনা বেশি কখন?" },
    options: [{ en: "The working-age share of the population rises, with suitable jobs and skills", bn: "উপযুক্ত কাজ ও দক্ষতাসহ কর্মক্ষম বয়সের জনসংখ্যার অনুপাত বাড়ে" }, { en: "The entire population is above retirement age", bn: "সমগ্র জনসংখ্যা অবসর বয়সের ঊর্ধ্বে" }, { en: "The birth rate alone rises sharply", bn: "শুধু জন্মহার দ্রুত বাড়ে" }, { en: "Labour-force participation falls continuously", bn: "শ্রমশক্তিতে অংশগ্রহণ ধারাবাহিকভাবে কমে" }],
    answer: 0,
    explanation: { en: "A larger working-age population can support faster growth if people are healthy, skilled and productively employed.", bn: "কর্মক্ষম বয়সের মানুষের সংখ্যা বেশি হলে তারা সুস্থ, দক্ষ ও উৎপাদনশীল কাজে নিযুক্ত থাকলে দ্রুত প্রবৃদ্ধি সম্ভব।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-053", exam: "WBCS", subject: "Economy",
    question: { en: "Which account of the Balance of Payments records exports and imports of goods?", bn: "বৈদেশিক লেনদেনের ভারসাম্যের কোন হিসাবে পণ্যের রপ্তানি ও আমদানি নথিভুক্ত হয়?" },
    options: [{ en: "Current account", bn: "চলতি হিসাব" }, { en: "Capital account only", bn: "শুধু মূলধনী হিসাব" }, { en: "Official reserve account only", bn: "শুধু সরকারি রিজার্ভ হিসাব" }, { en: "Government budget account", bn: "সরকারি বাজেট হিসাব" }],
    answer: 0,
    explanation: { en: "Trade in goods is recorded in the current account of the Balance of Payments.", bn: "পণ্যের বাণিজ্য বৈদেশিক লেনদেনের ভারসাম্যের চলতি হিসাবে নথিভুক্ত হয়।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-054", exam: "WBCS", subject: "Economy",
    question: { en: "A depreciation of the domestic currency, other things equal, tends to make:", bn: "অন্যান্য বিষয় অপরিবর্তিত থাকলে দেশীয় মুদ্রার অবমূল্যায়নে সাধারণত কী ঘটে?" },
    options: [{ en: "Imports costlier in domestic currency", bn: "দেশীয় মুদ্রায় আমদানি ব্যয়বহুল হয়" }, { en: "Imports cheaper in domestic currency", bn: "দেশীয় মুদ্রায় আমদানি সস্তা হয়" }, { en: "All exports stop", bn: "সমস্ত রপ্তানি বন্ধ হয়" }, { en: "The fiscal deficit automatically disappear", bn: "রাজকোষীয় ঘাটতি স্বয়ংক্রিয়ভাবে বিলুপ্ত হয়" }],
    answer: 0,
    explanation: { en: "A weaker domestic currency means more domestic currency is needed to buy a unit of foreign currency, raising import costs, all else equal.", bn: "দেশীয় মুদ্রার মান কমলে এক একক বিদেশি মুদ্রা কিনতে বেশি দেশীয় মুদ্রা লাগে; অন্য সব অপরিবর্তিত থাকলে আমদানি ব্যয় বাড়ে।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-055", exam: "WBCS", subject: "Economy",
    question: { en: "Foreign Direct Investment (FDI) generally involves:", bn: "প্রত্যক্ষ বিদেশি বিনিয়োগ (FDI) সাধারণত কী বোঝায়?" },
    options: [{ en: "A lasting interest and significant influence in an enterprise abroad", bn: "বিদেশি প্রতিষ্ঠানে স্থায়ী স্বার্থ ও উল্লেখযোগ্য প্রভাব" }, { en: "Only short-term purchase of government bills", bn: "শুধু স্বল্পমেয়াদি সরকারি বিল কেনা" }, { en: "A remittance from a family member", bn: "পরিবারের সদস্যের পাঠানো অর্থ" }, { en: "A tourist's foreign-currency spending", bn: "পর্যটকের বিদেশি মুদ্রায় ব্যয়" }],
    answer: 0,
    explanation: { en: "FDI is cross-border investment that establishes a lasting interest and influence; it differs from passive portfolio investment.", bn: "FDI হলো সীমান্ত-পার বিনিয়োগ, যা স্থায়ী স্বার্থ ও প্রভাব সৃষ্টি করে; এটি নিষ্ক্রিয় পোর্টফোলিও বিনিয়োগ থেকে আলাদা।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-056", exam: "WBCS", subject: "Economy",
    question: { en: "Which organisation publishes the World Economic Outlook?", bn: "World Economic Outlook প্রকাশ করে কোন সংস্থা?" },
    options: [{ en: "International Monetary Fund", bn: "আন্তর্জাতিক মুদ্রা তহবিল" }, { en: "World Trade Organization", bn: "বিশ্ব বাণিজ্য সংস্থা" }, { en: "World Bank's IFC", bn: "বিশ্বব্যাঙ্কের IFC" }, { en: "UNICEF", bn: "ইউনিসেফ" }],
    answer: 0,
    explanation: { en: "The IMF publishes the World Economic Outlook, a major report on global economic prospects and policy issues.", bn: "IMF বিশ্ব অর্থনীতির সম্ভাবনা ও নীতিগত বিষয় নিয়ে গুরুত্বপূর্ণ প্রতিবেদন World Economic Outlook প্রকাশ করে।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-057", exam: "WBCS", subject: "Economy",
    question: { en: "The World Bank's primary development focus is broadly associated with:", bn: "বিশ্বব্যাঙ্কের প্রধান উন্নয়নমূলক কাজ সাধারণভাবে কোনটির সঙ্গে যুক্ত?" },
    options: [{ en: "Poverty reduction and development finance", bn: "দারিদ্র্য হ্রাস ও উন্নয়ন অর্থায়ন" }, { en: "Regulating India's stock exchanges", bn: "ভারতের শেয়ার বাজার নিয়ন্ত্রণ" }, { en: "Issuing Indian currency", bn: "ভারতীয় মুদ্রা জারি" }, { en: "Setting India's repo rate", bn: "ভারতের রেপো হার নির্ধারণ" }],
    answer: 0,
    explanation: { en: "The World Bank Group provides financing and knowledge to support development and poverty reduction.", bn: "বিশ্বব্যাঙ্ক গোষ্ঠী উন্নয়ন ও দারিদ্র্য হ্রাসে অর্থায়ন এবং জ্ঞানভিত্তিক সহায়তা দেয়।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-058", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following best describes the GST Council?", bn: "GST কাউন্সিলকে কোন বর্ণনাটি সবচেয়ে ভালোভাবে ব্যাখ্যা করে?" },
    options: [{ en: "A constitutional body that makes recommendations on GST matters", bn: "GST বিষয়ে সুপারিশকারী সাংবিধানিক সংস্থা" }, { en: "A private association of tax consultants", bn: "কর পরামর্শদাতাদের বেসরকারি সংগঠন" }, { en: "The regulator of stock exchanges", bn: "শেয়ার বাজারের নিয়ন্ত্রক" }, { en: "The central bank's monetary policy committee", bn: "কেন্দ্রীয় ব্যাঙ্কের মুদ্রানীতি কমিটি" }],
    answer: 0,
    explanation: { en: "Article 279A provides for the GST Council, which recommends on key aspects of GST to the Union and States.", bn: "২৭৯A অনুচ্ছেদে GST কাউন্সিলের বিধান রয়েছে; এটি কেন্দ্র ও রাজ্যকে GST-র গুরুত্বপূর্ণ বিষয়ে সুপারিশ করে।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-059", exam: "WBCS", subject: "Economy",
    question: { en: "Which constitutional amendment introduced the Goods and Services Tax framework in India?", bn: "ভারতে পণ্য ও পরিষেবা করের কাঠামো কোন সংবিধান সংশোধনের মাধ্যমে আনা হয়?" },
    options: [{ en: "101st Constitutional Amendment Act, 2016", bn: "১০১তম সংবিধান সংশোধনী আইন, ২০১৬" }, { en: "42nd Constitutional Amendment Act, 1976", bn: "৪২তম সংবিধান সংশোধনী আইন, ১৯৭৬" }, { en: "73rd Constitutional Amendment Act, 1992", bn: "৭৩তম সংবিধান সংশোধনী আইন, ১৯৯২" }, { en: "86th Constitutional Amendment Act, 2002", bn: "৮৬তম সংবিধান সংশোধনী আইন, ২০০২" }],
    answer: 0,
    explanation: { en: "The 101st Constitutional Amendment Act, 2016 enabled the introduction of GST in India and provided the constitutional framework.", bn: "১০১তম সংবিধান সংশোধনী আইন, ২০১৬ ভারতে GST চালুর সাংবিধানিক কাঠামো তৈরি করে।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-060", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following is a public good in the standard economic sense?", bn: "প্রচলিত অর্থনৈতিক সংজ্ঞায় নিচের কোনটি গণপণ্য?" },
    options: [{ en: "National defence", bn: "জাতীয় প্রতিরক্ষা" }, { en: "A private restaurant meal", bn: "বেসরকারি রেস্তোরাঁর খাবার" }, { en: "A ticketed cinema seat", bn: "টিকিট কাটা সিনেমার আসন" }, { en: "A personal mobile phone", bn: "ব্যক্তিগত মোবাইল ফোন" }],
    answer: 0,
    explanation: { en: "Public goods are generally non-rival and non-excludable; national defence is a standard example.", bn: "গণপণ্য সাধারণত অবিভাজ্য ভোগ ও অ-বর্জনযোগ্য বৈশিষ্ট্যযুক্ত; জাতীয় প্রতিরক্ষা এর প্রচলিত উদাহরণ।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-061", exam: "WBCS", subject: "Economy",
    question: { en: "An externality occurs when:", bn: "বহিঃপ্রভাব (externality) সৃষ্টি হয় কখন?" },
    options: [{ en: "An economic activity affects third parties outside the transaction", bn: "কোনো অর্থনৈতিক কার্যক্রম লেনদেনের বাইরের তৃতীয় পক্ষকে প্রভাবিত করে" }, { en: "A buyer and seller agree on a price", bn: "ক্রেতা ও বিক্রেতা দামে সম্মত হয়" }, { en: "A firm pays its workers", bn: "প্রতিষ্ঠান কর্মীদের বেতন দেয়" }, { en: "A tax is collected by the government", bn: "সরকার কর আদায় করে" }],
    answer: 0,
    explanation: { en: "An externality is a cost or benefit imposed on third parties not fully reflected in the market price.", bn: "বাজারদামে পুরোপুরি প্রতিফলিত না হওয়া তৃতীয় পক্ষের উপর আরোপিত ব্যয় বা সুফলই বহিঃপ্রভাব।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-062", exam: "WBCS", subject: "Economy",
    question: { en: "Which policy is a typical example of fiscal policy?", bn: "রাজস্বনীতির (fiscal policy) প্রচলিত উদাহরণ কোনটি?" },
    options: [{ en: "Changing government spending and taxation", bn: "সরকারি ব্যয় ও করের পরিবর্তন" }, { en: "Changing the repo rate", bn: "রেপো হার পরিবর্তন" }, { en: "Buying securities through OMO", bn: "OMO-র মাধ্যমে সিকিউরিটিজ কেনা" }, { en: "Changing banks' CRR", bn: "ব্যাঙ্কের CRR পরিবর্তন" }],
    answer: 0,
    explanation: { en: "Fiscal policy uses government spending and taxation to influence aggregate demand and economic activity.", bn: "সামগ্রিক চাহিদা ও অর্থনৈতিক কার্যক্রম প্রভাবিত করতে রাজস্বনীতি সরকারি ব্যয় ও কর ব্যবহার করে।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-063", exam: "WBCS", subject: "Economy",
    question: { en: "Which policy is a typical example of monetary policy?", bn: "মুদ্রানীতির (monetary policy) প্রচলিত উদাহরণ কোনটি?" },
    options: [{ en: "Changing the policy repo rate", bn: "নীতিগত রেপো হার পরিবর্তন" }, { en: "Changing income-tax slabs in the Union Budget", bn: "কেন্দ্রীয় বাজেটে আয়করের স্ল্যাব পরিবর্তন" }, { en: "Increasing a ministry's capital outlay", bn: "মন্ত্রকের মূলধনী বরাদ্দ বৃদ্ধি" }, { en: "Changing the MSP of wheat", bn: "গমের MSP পরিবর্তন" }],
    answer: 0,
    explanation: { en: "Monetary policy is conducted by the central bank using policy rates and liquidity tools; fiscal policy concerns taxes and spending.", bn: "কেন্দ্রীয় ব্যাঙ্ক নীতিগত হার ও তারল্য উপকরণ দিয়ে মুদ্রানীতি পরিচালনা করে; কর ও ব্যয় রাজস্বনীতির বিষয়।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-064", exam: "WBCS", subject: "Economy",
    question: { en: "The Lorenz curve is used to illustrate:", bn: "লরেঞ্জ বক্ররেখা কী বোঝাতে ব্যবহৃত হয়?" },
    options: [{ en: "Income or wealth inequality", bn: "আয় বা সম্পদের বৈষম্য" }, { en: "Inflation over time", bn: "সময়ের সঙ্গে মুদ্রাস্ফীতি" }, { en: "Changes in exchange rates", bn: "বিনিময় হারের পরিবর্তন" }, { en: "Industrial production growth", bn: "শিল্প উৎপাদনের বৃদ্ধি" }],
    answer: 0,
    explanation: { en: "The Lorenz curve plots the cumulative share of income against the cumulative share of population to show inequality.", bn: "লরেঞ্জ বক্ররেখা জনসংখ্যার ক্রমবর্ধমান অংশের বিপরীতে আয়ের ক্রমবর্ধমান অংশ দেখিয়ে বৈষম্য বোঝায়।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  },
  {
    id: "wbcs-econ-065", exam: "WBCS", subject: "Economy",
    question: { en: "The Gini coefficient is commonly used as a measure of:", bn: "জিনি সহগ সাধারণত কী পরিমাপ করে?" },
    options: [{ en: "Inequality", bn: "বৈষম্য" }, { en: "Economic growth rate", bn: "অর্থনৈতিক প্রবৃদ্ধির হার" }, { en: "Unemployment duration", bn: "বেকারত্বের সময়কাল" }, { en: "Fiscal deficit", bn: "রাজকোষীয় ঘাটতি" }],
    answer: 0,
    explanation: { en: "The Gini coefficient summarizes inequality; higher values generally indicate greater inequality.", bn: "জিনি সহগ বৈষম্যের সারসংক্ষেপ দেয়; সাধারণত মান বেশি হলে বৈষম্যও বেশি বোঝায়।" },
    source: "Original PrepBangla question; standard economics and Indian institutional concepts.",
    status: "verified"
  }
,
  {
    id: "wbcs-econ-066", exam: "WBCS", subject: "Economy",
    question: { en: "Which institution conducts the Periodic Labour Force Survey (PLFS) in India?", bn: "ভারতে Periodic Labour Force Survey (PLFS) পরিচালনা করে কোন সংস্থা?" },
    options: [{ en: "National Statistical Office", bn: "জাতীয় পরিসংখ্যান দপ্তর" }, { en: "Reserve Bank of India", bn: "ভারতীয় রিজার্ভ ব্যাঙ্ক" }, { en: "NITI Aayog", bn: "নীতি আয়োগ" }, { en: "Labour Bureau", bn: "শ্রম ব্যুরো" }],
    answer: 0,
    explanation: { en: "The National Statistical Office under the Ministry of Statistics and Programme Implementation conducts the PLFS.", bn: "পরিসংখ্যান ও কর্মসূচি বাস্তবায়ন মন্ত্রকের অধীন জাতীয় পরিসংখ্যান দপ্তর PLFS পরিচালনা করে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-067", exam: "WBCS", subject: "Economy",
    question: { en: "The worker-population ratio measures:", bn: "কর্মী-জনসংখ্যা অনুপাত কী পরিমাপ করে?" },
    options: [{ en: "Employed persons as a proportion of the population", bn: "জনসংখ্যার মধ্যে কর্মরত ব্যক্তির অনুপাত" }, { en: "Unemployed persons as a proportion of the labour force", bn: "শ্রমশক্তির মধ্যে বেকার ব্যক্তির অনুপাত" }, { en: "Vacancies per firm", bn: "প্রতি প্রতিষ্ঠানে শূন্যপদ" }, { en: "Wages divided by output", bn: "উৎপাদন দিয়ে মজুরি ভাগ" }],
    answer: 0,
    explanation: { en: "The worker-population ratio is the proportion of employed persons in the population, for the specified age group and reference period.", bn: "নির্দিষ্ট বয়সগোষ্ঠী ও সময়কালে মোট জনসংখ্যার মধ্যে কর্মরত ব্যক্তিদের অনুপাতই কর্মী-জনসংখ্যা অনুপাত।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-068", exam: "WBCS", subject: "Economy",
    question: { en: "Which is an example of structural unemployment?", bn: "কাঠামোগত বেকারত্বের উদাহরণ কোনটি?" },
    options: [{ en: "Workers' skills do not match available jobs after technological change", bn: "প্রযুক্তিগত পরিবর্তনের পর শ্রমিকের দক্ষতার সঙ্গে উপলব্ধ কাজের মিল না থাকা" }, { en: "A worker is briefly between two jobs", bn: "দুটি চাকরির মাঝখানে সাময়িক বিরতি" }, { en: "A shop closes for a weekly holiday", bn: "সাপ্তাহিক ছুটিতে দোকান বন্ধ" }, { en: "Demand for labour rises during harvest", bn: "ফসল কাটার সময় শ্রমের চাহিদা বৃদ্ধি" }],
    answer: 0,
    explanation: { en: "Structural unemployment arises from a mismatch between workers' skills or location and the jobs available, often after changes in technology or industry.", bn: "প্রযুক্তি বা শিল্পের পরিবর্তনের ফলে শ্রমিকের দক্ষতা বা অবস্থানের সঙ্গে উপলব্ধ কাজের অমিল হলে কাঠামোগত বেকারত্ব হয়।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-069", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following is a feature of the informal sector?", bn: "অনানুষ্ঠানিক ক্ষেত্রের বৈশিষ্ট্য কোনটি?" },
    options: [{ en: "Limited formal employment protection and social security coverage", bn: "আনুষ্ঠানিক কর্মসংস্থান সুরক্ষা ও সামাজিক সুরক্ষার সীমিত আওতা" }, { en: "Universal written contracts and full statutory benefits", bn: "সবার লিখিত চুক্তি ও পূর্ণ আইনগত সুবিধা" }, { en: "All workers are government employees", bn: "সব শ্রমিক সরকারি কর্মচারী" }, { en: "Production only for export", bn: "শুধু রপ্তানির জন্য উৎপাদন" }],
    answer: 0,
    explanation: { en: "Informal work often lacks some formal protections and social security, though definitions and coverage vary by statistical and legal context.", bn: "অনানুষ্ঠানিক কাজে অনেক সময় আনুষ্ঠানিক সুরক্ষা ও সামাজিক নিরাপত্তার কিছু সুবিধা থাকে না; তবে পরিসংখ্যান ও আইনি সংজ্ঞা ভিন্ন হতে পারে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-070", exam: "WBCS", subject: "Economy",
    question: { en: "The main purpose of the Mahatma Gandhi National Rural Employment Guarantee Act is to:", bn: "মহাত্মা গান্ধী জাতীয় গ্রামীণ কর্মসংস্থান নিশ্চয়তা আইনের প্রধান উদ্দেশ্য কী?" },
    options: [{ en: "Provide a statutory wage-employment guarantee to rural households subject to the Act", bn: "আইন অনুযায়ী গ্রামীণ পরিবারকে মজুরিভিত্তিক কাজের বিধিবদ্ধ নিশ্চয়তা দেওয়া" }, { en: "Provide a guaranteed urban corporate job", bn: "শহরে কর্পোরেট চাকরির নিশ্চয়তা" }, { en: "Replace all state welfare schemes", bn: "সব রাজ্য কল্যাণ প্রকল্পের বিকল্প হওয়া" }, { en: "Offer unconditional cash to every citizen", bn: "প্রত্যেক নাগরিককে নিঃশর্ত নগদ প্রদান" }],
    answer: 0,
    explanation: { en: "MGNREGA provides a legal guarantee of up to 100 days of unskilled manual wage employment in a financial year to eligible rural households that demand work.", bn: "MGNREGA-তে কাজের আবেদনকারী যোগ্য গ্রামীণ পরিবারকে অর্থবছরে সর্বোচ্চ ১০০ দিনের অদক্ষ কায়িক মজুরি-ভিত্তিক কাজের আইনি নিশ্চয়তা দেওয়া হয়েছে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-071", exam: "WBCS", subject: "Economy",
    question: { en: "Which institution is the apex development bank for agriculture and rural development in India?", bn: "ভারতে কৃষি ও গ্রামীণ উন্নয়নের শীর্ষ উন্নয়ন ব্যাঙ্ক কোনটি?" },
    options: [{ en: "NABARD", bn: "NABARD" }, { en: "SIDBI", bn: "SIDBI" }, { en: "EXIM Bank", bn: "EXIM Bank" }, { en: "NHb", bn: "NHB" }],
    answer: 0,
    explanation: { en: "NABARD is the apex development financial institution for agriculture and rural development.", bn: "NABARD কৃষি ও গ্রামীণ উন্নয়নের শীর্ষ উন্নয়ন আর্থিক প্রতিষ্ঠান।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-072", exam: "WBCS", subject: "Economy",
    question: { en: "The primary objective of the Public Distribution System is to:", bn: "গণবণ্টন ব্যবস্থার (PDS) প্রধান উদ্দেশ্য কী?" },
    options: [{ en: "Make essential commodities accessible, especially to eligible households", bn: "বিশেষত যোগ্য পরিবারকে অত্যাবশ্যক পণ্য সহজলভ্য করা" }, { en: "Set prices of all manufactured goods", bn: "সব উৎপাদিত পণ্যের দাম নির্ধারণ" }, { en: "Provide export subsidies to firms", bn: "প্রতিষ্ঠানকে রপ্তানি ভর্তুকি দেওয়া" }, { en: "Replace agricultural markets", bn: "কৃষি বাজারের বিকল্প হওয়া" }],
    answer: 0,
    explanation: { en: "The PDS distributes specified essential commodities, especially foodgrains, to eligible households through a network of fair-price shops.", bn: "PDS ন্যায্য মূল্যের দোকানের মাধ্যমে যোগ্য পরিবারকে বিশেষত খাদ্যশস্যসহ নির্দিষ্ট অত্যাবশ্যক পণ্য সরবরাহ করে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-073", exam: "WBCS", subject: "Economy",
    question: { en: "Which term describes the situation where a country's exports are greater than its imports?", bn: "কোনো দেশের রপ্তানি আমদানির চেয়ে বেশি হলে তাকে কী বলা হয়?" },
    options: [{ en: "Trade surplus", bn: "বাণিজ্য উদ্বৃত্ত" }, { en: "Trade deficit", bn: "বাণিজ্য ঘাটতি" }, { en: "Current-account deficit", bn: "চলতি হিসাবের ঘাটতি" }, { en: "Fiscal deficit", bn: "রাজকোষীয় ঘাটতি" }],
    answer: 0,
    explanation: { en: "A trade surplus in goods occurs when the value of merchandise exports exceeds merchandise imports over the period.", bn: "নির্দিষ্ট সময়ে পণ্য রপ্তানির মূল্য পণ্য আমদানির মূল্যের চেয়ে বেশি হলে পণ্য বাণিজ্যে উদ্বৃত্ত হয়।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-074", exam: "WBCS", subject: "Economy",
    question: { en: "The exchange rate is the:", bn: "বিনিময় হার কী?" },
    options: [{ en: "Price of one currency expressed in another currency", bn: "অন্য মুদ্রায় প্রকাশিত একটি মুদ্রার মূল্য" }, { en: "Rate of growth of domestic output", bn: "দেশীয় উৎপাদনের বৃদ্ধির হার" }, { en: "Interest paid on government debt", bn: "সরকারি ঋণের সুদের হার" }, { en: "Ratio of tax to GDP", bn: "GDP-র তুলনায় করের অনুপাত" }],
    answer: 0,
    explanation: { en: "An exchange rate expresses the price of one currency in terms of another currency.", bn: "একটি মুদ্রার মূল্য অন্য মুদ্রার এককে প্রকাশ করাই বিনিময় হার।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-075", exam: "WBCS", subject: "Economy",
    question: { en: "A current-account deficit in the balance of payments means, broadly, that:", bn: "বৈদেশিক লেনদেনের ভারসাম্যে চলতি হিসাবের ঘাটতি সাধারণভাবে কী বোঝায়?" },
    options: [{ en: "Current-account payments exceed current-account receipts", bn: "চলতি হিসাবের অর্থপ্রদান প্রাপ্তির চেয়ে বেশি" }, { en: "Government expenditure exceeds tax revenue", bn: "সরকারি ব্যয় কর রাজস্বের চেয়ে বেশি" }, { en: "Imports of goods alone are zero", bn: "পণ্যের আমদানি শূন্য" }, { en: "Foreign exchange reserves must be zero", bn: "বৈদেশিক মুদ্রার রিজার্ভ অবশ্যই শূন্য" }],
    answer: 0,
    explanation: { en: "A current-account deficit occurs when current-account debits exceed credits; it includes goods, services, primary income and secondary income.", bn: "চলতি হিসাবের ডেবিট বা অর্থপ্রদান ক্রেডিট বা প্রাপ্তির চেয়ে বেশি হলে ঘাটতি হয়; এতে পণ্য, পরিষেবা, প্রাথমিক ও দ্বিতীয়ক আয় থাকে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-076", exam: "WBCS", subject: "Economy",
    question: { en: "Which organisation is responsible for administering the World Trade Organization agreements?", bn: "বিশ্ব বাণিজ্য সংস্থার চুক্তিগুলি পরিচালনার দায়িত্ব কোন সংস্থার?" },
    options: [{ en: "World Trade Organization", bn: "বিশ্ব বাণিজ্য সংস্থা" }, { en: "International Monetary Fund", bn: "আন্তর্জাতিক মুদ্রা তহবিল" }, { en: "World Bank", bn: "বিশ্বব্যাঙ্ক" }, { en: "UNDP", bn: "UNDP" }],
    answer: 0,
    explanation: { en: "The WTO provides the institutional framework for administering multilateral trade agreements and related functions.", bn: "WTO বহুপাক্ষিক বাণিজ্য চুক্তি পরিচালনা ও সংশ্লিষ্ট কাজের প্রাতিষ্ঠানিক কাঠামো দেয়।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-077", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following is a non-tariff barrier to trade?", bn: "নিচের কোনটি বাণিজ্যের অশুল্ক বাধা?" },
    options: [{ en: "Import quota", bn: "আমদানি কোটা" }, { en: "Customs duty", bn: "শুল্ক" }, { en: "Export tariff", bn: "রপ্তানি শুল্ক" }, { en: "Specific import tax", bn: "নির্দিষ্ট আমদানি কর" }],
    answer: 0,
    explanation: { en: "An import quota limits the quantity of a good that may be imported and is a non-tariff trade restriction.", bn: "আমদানি কোটা কোনো পণ্যের আমদানিযোগ্য পরিমাণ সীমিত করে; এটি অশুল্ক বাণিজ্য বাধা।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-078", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following best describes an ad valorem tax?", bn: "অ্যাড ভ্যালোরেম করের সঠিক বর্ণনা কোনটি?" },
    options: [{ en: "A tax charged as a percentage of value", bn: "মূল্যের শতকরা হারে আরোপিত কর" }, { en: "A fixed amount per physical unit", bn: "প্রতি ভৌত এককে নির্দিষ্ট কর" }, { en: "A tax only on personal income", bn: "শুধু ব্যক্তিগত আয়ের উপর কর" }, { en: "A tax collected only at the border", bn: "শুধু সীমান্তে আদায় করা কর" }],
    answer: 0,
    explanation: { en: "An ad valorem tax is calculated as a percentage of the value of the taxable item or transaction.", bn: "অ্যাড ভ্যালোরেম কর করযোগ্য পণ্য বা লেনদেনের মূল্যের শতকরা হিসাবে নির্ধারিত হয়।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-079", exam: "WBCS", subject: "Economy",
    question: { en: "Which institution regulates the securities market in India?", bn: "ভারতে সিকিউরিটিজ বাজার নিয়ন্ত্রণ করে কোন সংস্থা?" },
    options: [{ en: "SEBI", bn: "SEBI" }, { en: "RBI", bn: "RBI" }, { en: "IRDAI", bn: "IRDAI" }, { en: "PFRDA", bn: "PFRDA" }],
    answer: 0,
    explanation: { en: "The Securities and Exchange Board of India regulates the securities market and aims to protect investors and promote market development.", bn: "SEBI সিকিউরিটিজ বাজার নিয়ন্ত্রণ করে; বিনিয়োগকারীদের সুরক্ষা ও বাজারের উন্নয়ন এর উদ্দেশ্য।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-080", exam: "WBCS", subject: "Economy",
    question: { en: "Which institution regulates insurance in India?", bn: "ভারতে বিমা ক্ষেত্র নিয়ন্ত্রণ করে কোন সংস্থা?" },
    options: [{ en: "Insurance Regulatory and Development Authority of India", bn: "ভারতীয় বিমা নিয়ন্ত্রণ ও উন্নয়ন কর্তৃপক্ষ" }, { en: "Securities and Exchange Board of India", bn: "SEBI" }, { en: "Competition Commission of India", bn: "ভারতের প্রতিযোগিতা কমিশন" }, { en: "NABARD", bn: "NABARD" }],
    answer: 0,
    explanation: { en: "IRDAI regulates and promotes the insurance sector and protects policyholders' interests under the governing law.", bn: "প্রযোজ্য আইনের অধীনে IRDAI বিমা ক্ষেত্র নিয়ন্ত্রণ ও উন্নয়ন করে এবং পলিসিধারীদের স্বার্থ রক্ষা করে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-081", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following is generally classified as infrastructure?", bn: "নিচের কোনটি সাধারণত অবকাঠামো হিসেবে শ্রেণিবদ্ধ?" },
    options: [{ en: "Electricity transmission network", bn: "বিদ্যুৎ সঞ্চালন নেটওয়ার্ক" }, { en: "A household's monthly grocery purchase", bn: "পরিবারের মাসিক বাজার" }, { en: "A personal savings account", bn: "ব্যক্তিগত সঞ্চয়ী হিসাব" }, { en: "A one-time festival expense", bn: "এককালীন উৎসব ব্যয়" }],
    answer: 0,
    explanation: { en: "Infrastructure includes foundational facilities and networks such as power, transport, communication and water systems that support economic activity.", bn: "অবকাঠামোর মধ্যে বিদ্যুৎ, পরিবহণ, যোগাযোগ ও জলব্যবস্থার মতো মৌলিক পরিষেবা ও নেটওয়ার্ক রয়েছে, যা অর্থনৈতিক কার্যক্রমকে সহায়তা করে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-082", exam: "WBCS", subject: "Economy",
    question: { en: "A public-private partnership (PPP) generally involves:", bn: "সরকারি-বেসরকারি অংশীদারিত্ব (PPP) সাধারণত কী বোঝায়?" },
    options: [{ en: "A contractual arrangement where public and private sectors share roles and risks in providing an asset or service", bn: "সম্পদ বা পরিষেবা প্রদানে সরকারি ও বেসরকারি ক্ষেত্রের মধ্যে চুক্তিভিত্তিক ভূমিকা ও ঝুঁকি ভাগ" }, { en: "Complete transfer of all government functions to charities", bn: "সরকারি সব কাজ দাতব্য সংস্থায় হস্তান্তর" }, { en: "Only a government grant to households", bn: "পরিবারকে শুধু সরকারি অনুদান" }, { en: "A merger of two private banks", bn: "দুটি বেসরকারি ব্যাঙ্কের সংযুক্তি" }],
    answer: 0,
    explanation: { en: "PPP arrangements allocate responsibilities, risks and returns between public authorities and private partners under a contract; structures differ by project.", bn: "PPP চুক্তিতে সরকারি কর্তৃপক্ষ ও বেসরকারি অংশীদারের মধ্যে দায়িত্ব, ঝুঁকি ও আয় বণ্টিত হয়; প্রকল্পভেদে কাঠামো আলাদা।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-083", exam: "WBCS", subject: "Economy",
    question: { en: "Disinvestment refers to:", bn: "বিনিয়োগ প্রত্যাহার (Disinvestment) বলতে কী বোঝায়?" },
    options: [{ en: "Sale of the government's stake in a public sector enterprise", bn: "রাষ্ট্রায়ত্ত প্রতিষ্ঠানে সরকারের অংশীদারিত্ব বিক্রি" }, { en: "Purchase of new machinery by a private firm", bn: "বেসরকারি প্রতিষ্ঠানের নতুন যন্ত্র কেনা" }, { en: "An increase in household savings", bn: "পরিবারের সঞ্চয় বৃদ্ধি" }, { en: "Repayment of a bank loan by a farmer", bn: "কৃষকের ব্যাঙ্কঋণ পরিশোধ" }],
    answer: 0,
    explanation: { en: "Disinvestment is the sale or dilution of government equity in public sector enterprises; the extent and form vary by policy.", bn: "রাষ্ট্রায়ত্ত প্রতিষ্ঠানে সরকারের ইক্যুইটি বিক্রি বা অংশীদারিত্ব কমানোকে disinvestment বলে; নীতি অনুযায়ী এর ধরন ও মাত্রা ভিন্ন হয়।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-084", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following is a likely effect of an increase in the repo rate, other things equal?", bn: "অন্যান্য বিষয় অপরিবর্তিত থাকলে রেপো হার বৃদ্ধির সম্ভাব্য প্রভাব কোনটি?" },
    options: [{ en: "Higher borrowing costs and softer credit demand", bn: "ঋণের খরচ বৃদ্ধি ও ঋণ চাহিদা দুর্বল হওয়া" }, { en: "Lower lending rates immediately in every bank", bn: "সব ব্যাঙ্কে অবিলম্বে ঋণের সুদ কমা" }, { en: "Automatic increase in exports", bn: "রপ্তানি স্বয়ংক্রিয়ভাবে বৃদ্ধি" }, { en: "Automatic reduction in public debt", bn: "সরকারি ঋণ স্বয়ংক্রিয়ভাবে কমা" }],
    answer: 0,
    explanation: { en: "A higher repo rate can transmit to market rates, raising borrowing costs and moderating credit and aggregate demand, though transmission varies.", bn: "রেপো হার বৃদ্ধি বাজারের সুদের হারে প্রভাব ফেলতে পারে, ঋণের খরচ বাড়িয়ে ঋণ ও সামগ্রিক চাহিদা নিয়ন্ত্রণ করতে পারে; তবে প্রভাবের মাত্রা ভিন্ন হয়।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-085", exam: "WBCS", subject: "Economy",
    question: { en: "Which measure is a quantitative monetary policy instrument?", bn: "নিচের কোনটি পরিমাণগত মুদ্রানীতির উপকরণ?" },
    options: [{ en: "Cash Reserve Ratio", bn: "নগদ রিজার্ভ অনুপাত" }, { en: "Moral suasion", bn: "নৈতিক প্ররোচনা" }, { en: "Selective credit advice", bn: "নির্বাচিত ঋণ সংক্রান্ত পরামর্শ" }, { en: "Consumer awareness campaign", bn: "ভোক্তা সচেতনতা অভিযান" }],
    answer: 0,
    explanation: { en: "CRR changes the proportion of banks' specified liabilities held as cash reserves and affects system liquidity; moral suasion is qualitative.", bn: "CRR ব্যাঙ্কের নির্দিষ্ট দায়ের যে অংশ নগদ রিজার্ভে রাখতে হয় তা বদলে তারল্যকে প্রভাবিত করে; moral suasion গুণগত উপকরণ।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-086", exam: "WBCS", subject: "Economy",
    question: { en: "Which statement about the Finance Commission is correct?", bn: "অর্থ কমিশন সম্পর্কে কোন বক্তব্যটি সঠিক?" },
    options: [{ en: "It is constituted by the President under Article 280", bn: "২৮০ অনুচ্ছেদ অনুযায়ী রাষ্ট্রপতি এটি গঠন করেন" }, { en: "It is a permanent department of RBI", bn: "এটি RBI-র স্থায়ী বিভাগ" }, { en: "It sets the policy repo rate", bn: "এটি নীতিগত রেপো হার নির্ধারণ করে" }, { en: "It directly prepares the Union Budget", bn: "এটি সরাসরি কেন্দ্রীয় বাজেট তৈরি করে" }],
    answer: 0,
    explanation: { en: "Article 280 provides for the President to constitute a Finance Commission at the prescribed interval, generally every five years or earlier.", bn: "২৮০ অনুচ্ছেদে নির্ধারিত সময় অন্তর, সাধারণত প্রতি পাঁচ বছর বা তার আগে, রাষ্ট্রপতিকে অর্থ কমিশন গঠনের বিধান দেওয়া হয়েছে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-087", exam: "WBCS", subject: "Economy",
    question: { en: "The GST compensation cess was designed primarily to:", bn: "GST ক্ষতিপূরণ সেস প্রধানত কী উদ্দেশ্যে চালু করা হয়েছিল?" },
    options: [{ en: "Compensate states for specified revenue losses during the transition to GST", bn: "GST-তে রূপান্তরের সময় নির্দিষ্ট রাজস্ব ক্ষতির জন্য রাজ্যকে ক্ষতিপূরণ দেওয়া" }, { en: "Fund RBI's monetary operations", bn: "RBI-র মুদ্রানীতি কার্যক্রমে অর্থায়ন" }, { en: "Replace personal income tax", bn: "ব্যক্তিগত আয়করের বিকল্প হওয়া" }, { en: "Finance municipal elections", bn: "পুরসভার নির্বাচনে অর্থায়ন" }],
    answer: 0,
    explanation: { en: "The GST (Compensation to States) Act, 2017 provided for compensation to states for specified revenue loss for a transition period; the statutory compensation period has since run its course.", bn: "GST (Compensation to States) Act, 2017 রূপান্তরকালে নির্দিষ্ট রাজস্ব ক্ষতির জন্য রাজ্যকে ক্ষতিপূরণের বিধান করেছিল; আইনে নির্ধারিত ক্ষতিপূরণকাল ইতিমধ্যে শেষ হয়েছে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-088", exam: "WBCS", subject: "Economy",
    question: { en: "Which is the correct relationship between fiscal deficit and government borrowing?", bn: "রাজকোষীয় ঘাটতি ও সরকারি ঋণগ্রহণের মধ্যে সঠিক সম্পর্ক কোনটি?" },
    options: [{ en: "Fiscal deficit indicates the government's borrowing requirement, subject to financing adjustments", bn: "অর্থায়ন সমন্বয় সাপেক্ষে রাজকোষীয় ঘাটতি সরকারের ঋণগ্রহণের প্রয়োজন নির্দেশ করে" }, { en: "Fiscal deficit is always equal to revenue deficit", bn: "রাজকোষীয় ঘাটতি সর্বদা রাজস্ব ঘাটতির সমান" }, { en: "Borrowing is a tax receipt", bn: "ঋণগ্রহণ কর প্রাপ্তি" }, { en: "Fiscal deficit excludes all capital expenditure", bn: "রাজকোষীয় ঘাটতিতে সব মূলধনী ব্যয় বাদ" }],
    answer: 0,
    explanation: { en: "Fiscal deficit measures the gap between total expenditure and receipts excluding borrowings; it broadly indicates the borrowing requirement.", bn: "ঋণ বাদে মোট ব্যয় ও মোট প্রাপ্তির ব্যবধানই রাজকোষীয় ঘাটতি; এটি সাধারণভাবে ঋণগ্রহণের প্রয়োজন নির্দেশ করে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-089", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following is a revenue expenditure?", bn: "নিচের কোনটি রাজস্ব ব্যয়?" },
    options: [{ en: "Payment of salaries to government employees", bn: "সরকারি কর্মচারীদের বেতন প্রদান" }, { en: "Construction of a new national highway", bn: "নতুন জাতীয় সড়ক নির্মাণ" }, { en: "Purchase of land for a railway project", bn: "রেল প্রকল্পের জন্য জমি কেনা" }, { en: "Acquisition of a new defence aircraft", bn: "নতুন প্রতিরক্ষা বিমান অধিগ্রহণ" }],
    answer: 0,
    explanation: { en: "Salaries are generally revenue expenditure because they do not directly create a government asset; the other options generally create or acquire assets.", bn: "বেতন সাধারণত রাজস্ব ব্যয়, কারণ তা সরাসরি সরকারি সম্পদ সৃষ্টি করে না; অন্য বিকল্পগুলি সাধারণত সম্পদ সৃষ্টি বা অধিগ্রহণ করে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-090", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following is a capital expenditure?", bn: "নিচের কোনটি মূলধনী ব্যয়?" },
    options: [{ en: "Construction of a public hospital building", bn: "সরকারি হাসপাতাল ভবন নির্মাণ" }, { en: "Payment of routine office electricity bills", bn: "দপ্তরের নিয়মিত বিদ্যুৎ বিল" }, { en: "Interest on outstanding government debt", bn: "সরকারি ঋণের বকেয়া সুদ" }, { en: "Monthly salaries of staff", bn: "কর্মীদের মাসিক বেতন" }],
    answer: 0,
    explanation: { en: "Capital expenditure creates assets or reduces liabilities. Construction of a public hospital creates a durable public asset.", bn: "মূলধনী ব্যয় সম্পদ সৃষ্টি করে বা দায় কমায়। সরকারি হাসপাতাল নির্মাণ একটি স্থায়ী সরকারি সম্পদ সৃষ্টি করে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-091", exam: "WBCS", subject: "Economy",
    question: { en: "Which concept refers to the value of goods and services produced within a country's domestic territory?", bn: "কোনো দেশের অভ্যন্তরীণ ভূখণ্ডে উৎপাদিত পণ্য ও পরিষেবার মূল্যকে কোন ধারণা বোঝায়?" },
    options: [{ en: "Gross Domestic Product", bn: "মোট দেশজ উৎপাদন" }, { en: "Gross National Income", bn: "মোট জাতীয় আয়" }, { en: "Net National Product", bn: "নিট জাতীয় উৎপাদন" }, { en: "Personal disposable income", bn: "ব্যক্তিগত ব্যবহারযোগ্য আয়" }],
    answer: 0,
    explanation: { en: "GDP measures the value of final goods and services produced within the domestic territory during a period, under the relevant accounting rules.", bn: "প্রযোজ্য হিসাববিধি অনুযায়ী নির্দিষ্ট সময়ে দেশের অভ্যন্তরীণ ভূখণ্ডে উৎপাদিত চূড়ান্ত পণ্য ও পরিষেবার মূল্য GDP মাপে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-092", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following is not normally counted as current production in GDP?", bn: "নিচের কোনটি সাধারণত GDP-তে চলতি উৎপাদন হিসেবে গণ্য হয় না?" },
    options: [{ en: "Sale of a used car between two households", bn: "দুটি পরিবারের মধ্যে ব্যবহৃত গাড়ি বিক্রি" }, { en: "Newly produced furniture", bn: "নতুন উৎপাদিত আসবাব" }, { en: "Current hotel accommodation service", bn: "চলতি হোটেল আবাসন পরিষেবা" }, { en: "Newly constructed residential building", bn: "নতুন নির্মিত আবাসিক ভবন" }],
    answer: 0,
    explanation: { en: "A used good was counted when first produced. Its resale is not new production, although any current brokerage service is counted.", bn: "ব্যবহৃত পণ্যটি প্রথম উৎপাদনের সময় গণনা করা হয়েছিল। পুনর্বিক্রয় নতুন উৎপাদন নয়, যদিও বর্তমান দালালি পরিষেবার মূল্য গণ্য হয়।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-093", exam: "WBCS", subject: "Economy",
    question: { en: "The base year of a price index is used to:", bn: "মূল্যসূচকের ভিত্তিবর্ষ কী কাজে ব্যবহৃত হয়?" },
    options: [{ en: "Provide the reference period for comparing price changes", bn: "দামের পরিবর্তন তুলনার জন্য রেফারেন্স সময় নির্ধারণ" }, { en: "Fix the current year's inflation rate by law", bn: "আইন করে চলতি বছরের মুদ্রাস্ফীতির হার স্থির করা" }, { en: "Determine the fiscal deficit", bn: "রাজকোষীয় ঘাটতি নির্ধারণ" }, { en: "Set the exchange rate", bn: "বিনিময় হার নির্ধারণ" }],
    answer: 0,
    explanation: { en: "A base year provides a reference for index-number comparisons; the selected year and methodology are periodically reviewed by statistical authorities.", bn: "ভিত্তিবর্ষ সূচক তুলনার রেফারেন্স দেয়; পরিসংখ্যান কর্তৃপক্ষ সময়ে সময়ে বছর ও পদ্ধতি পর্যালোচনা করে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-094", exam: "WBCS", subject: "Economy",
    question: { en: "Which is the best example of cost-push inflation?", bn: "ব্যয়-প্রণোদিত মুদ্রাস্ফীতির সবচেয়ে ভালো উদাহরণ কোনটি?" },
    options: [{ en: "A sharp rise in energy input costs raises firms' prices", bn: "জ্বালানি উপকরণের ব্যয় দ্রুত বেড়ে প্রতিষ্ঠানের দাম বৃদ্ধি" }, { en: "Household demand surges after a tax cut", bn: "কর কমার পর পরিবারের চাহিদা বেড়ে যাওয়া" }, { en: "Consumer confidence increases", bn: "ভোক্তার আস্থা বৃদ্ধি" }, { en: "A rise in productivity lowers unit costs", bn: "উৎপাদনশীলতা বৃদ্ধিতে একক ব্যয় কমা" }],
    answer: 0,
    explanation: { en: "Cost-push inflation can arise when higher input costs, such as energy or raw materials, are passed through into output prices.", bn: "জ্বালানি বা কাঁচামালের মতো উপকরণের ব্যয় বাড়লে তা পণ্যের দামে স্থানান্তরিত হয়ে cost-push inflation ঘটাতে পারে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-095", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following best describes stagflation?", bn: "মন্দাস্ফীতি (stagflation)-র সঠিক বর্ণনা কোনটি?" },
    options: [{ en: "High inflation accompanied by weak growth and high unemployment", bn: "উচ্চ মুদ্রাস্ফীতির সঙ্গে দুর্বল প্রবৃদ্ধি ও উচ্চ বেকারত্ব" }, { en: "Falling prices with rapid growth", bn: "দাম কমার সঙ্গে দ্রুত প্রবৃদ্ধি" }, { en: "Low inflation and full employment", bn: "কম মুদ্রাস্ফীতি ও পূর্ণ কর্মসংস্থান" }, { en: "A budget surplus with trade surplus", bn: "বাজেট উদ্বৃত্ত ও বাণিজ্য উদ্বৃত্ত" }],
    answer: 0,
    explanation: { en: "Stagflation describes the combination of stagnant or weak output growth and high inflation, often alongside elevated unemployment.", bn: "দুর্বল বা স্থবির উৎপাদন বৃদ্ধির সঙ্গে উচ্চ মুদ্রাস্ফীতি, প্রায়ই উচ্চ বেকারত্বসহ, থাকাকে stagflation বলে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-096", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following is a function of the Competition Commission of India?", bn: "ভারতের প্রতিযোগিতা কমিশনের একটি কাজ কী?" },
    options: [{ en: "Prevent practices having an appreciable adverse effect on competition", bn: "প্রতিযোগিতার উপর উল্লেখযোগ্য বিরূপ প্রভাব ফেলে এমন কার্যকলাপ প্রতিরোধ" }, { en: "Set the policy interest rate", bn: "নীতিগত সুদের হার নির্ধারণ" }, { en: "Regulate insurance premiums", bn: "বিমার প্রিমিয়াম নিয়ন্ত্রণ" }, { en: "Issue currency notes", bn: "মুদ্রার নোট জারি" }],
    answer: 0,
    explanation: { en: "The Competition Commission of India enforces competition law, addressing anti-competitive agreements, abuse of dominance and combinations under the Act.", bn: "Competition Commission of India প্রতিযোগিতা আইন প্রয়োগ করে; বিরোধী-প্রতিযোগিতামূলক চুক্তি, প্রভাবশালী অবস্থানের অপব্যবহার ও সংযুক্তি পরীক্ষা করে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-097", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following is a direct instrument of agricultural price support in India?", bn: "ভারতে কৃষিপণ্যের মূল্য সহায়তার প্রত্যক্ষ উপকরণ কোনটি?" },
    options: [{ en: "Minimum Support Price", bn: "ন্যূনতম সহায়ক মূল্য" }, { en: "Repo rate", bn: "রেপো হার" }, { en: "Cash Reserve Ratio", bn: "নগদ রিজার্ভ অনুপাত" }, { en: "Import duty on all consumer goods", bn: "সব ভোগ্যপণ্যে আমদানি শুল্ক" }],
    answer: 0,
    explanation: { en: "MSP is an administered price-support mechanism for selected crops; procurement operations and farmer access vary by crop and region.", bn: "MSP নির্বাচিত ফসলের জন্য প্রশাসনিক মূল্য-সহায়তা ব্যবস্থা; সংগ্রহ ও কৃষকের প্রবেশাধিকার ফসল ও অঞ্চলভেদে ভিন্ন।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-098", exam: "WBCS", subject: "Economy",
    question: { en: "Which of the following best describes food security?", bn: "খাদ্য নিরাপত্তার সঠিক বর্ণনা কোনটি?" },
    options: [{ en: "Physical and economic access to sufficient, safe and nutritious food", bn: "পর্যাপ্ত, নিরাপদ ও পুষ্টিকর খাদ্যে ভৌত ও আর্থিক প্রবেশাধিকার" }, { en: "Only high foodgrain production at national level", bn: "শুধু জাতীয় স্তরে খাদ্যশস্য উৎপাদন বেশি হওয়া" }, { en: "A ban on all food imports", bn: "সব খাদ্য আমদানি নিষিদ্ধ করা" }, { en: "Only stable prices for luxury foods", bn: "শুধু বিলাসবহুল খাদ্যের দাম স্থিতিশীল রাখা" }],
    answer: 0,
    explanation: { en: "Food security concerns availability, access and utilisation of sufficient safe and nutritious food, with stability over time.", bn: "খাদ্য নিরাপত্তায় পর্যাপ্ত নিরাপদ ও পুষ্টিকর খাদ্যের প্রাপ্যতা, প্রবেশাধিকার, ব্যবহার এবং সময়ের সঙ্গে স্থিতিশীলতা অন্তর্ভুক্ত।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-099", exam: "WBCS", subject: "Economy",
    question: { en: "Which index is used to measure changes in industrial production in India?", bn: "ভারতে শিল্প উৎপাদনের পরিবর্তন মাপতে কোন সূচক ব্যবহৃত হয়?" },
    options: [{ en: "Index of Industrial Production", bn: "শিল্প উৎপাদন সূচক" }, { en: "Consumer Price Index", bn: "ভোক্তা মূল্যসূচক" }, { en: "Human Development Index", bn: "মানব উন্নয়ন সূচক" }, { en: "Wholesale Price Index", bn: "পাইকারি মূল্যসূচক" }],
    answer: 0,
    explanation: { en: "The Index of Industrial Production (IIP) measures changes in the volume of production in selected industrial sectors.", bn: "শিল্প উৎপাদন সূচক (IIP) নির্বাচিত শিল্পক্ষেত্রে উৎপাদনের পরিমাণগত পরিবর্তন মাপে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-100", exam: "WBCS", subject: "Economy",
    question: { en: "Which sector is commonly called the secondary sector?", bn: "কোন ক্ষেত্রকে সাধারণত দ্বিতীয় ক্ষেত্র বলা হয়?" },
    options: [{ en: "Manufacturing and construction", bn: "উৎপাদন ও নির্মাণ" }, { en: "Agriculture and fishing", bn: "কৃষি ও মৎস্য" }, { en: "Banking and education", bn: "ব্যাঙ্কিং ও শিক্ষা" }, { en: "Public administration only", bn: "শুধু সরকারি প্রশাসন" }],
    answer: 0,
    explanation: { en: "The secondary sector transforms raw materials into manufactured goods and includes construction.", bn: "দ্বিতীয় ক্ষেত্র কাঁচামালকে উৎপাদিত পণ্যে রূপান্তর করে এবং নির্মাণকাজও এর অন্তর্ভুক্ত।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  },
  {
    id: "wbcs-econ-101", exam: "WBCS", subject: "Economy",
    question: { en: "A rise in labour productivity means:", bn: "শ্রম উৎপাদনশীলতা বৃদ্ধি বলতে কী বোঝায়?" },
    options: [{ en: "More output per unit of labour input", bn: "শ্রমের প্রতি একক ব্যবহারে বেশি উৎপাদন" }, { en: "Higher wages in every occupation automatically", bn: "প্রত্যেক পেশায় স্বয়ংক্রিয়ভাবে বেশি মজুরি" }, { en: "More workers without any change in output", bn: "উৎপাদন অপরিবর্তিত রেখে শ্রমিকের সংখ্যা বৃদ্ধি" }, { en: "A fall in capital per worker in all cases", bn: "সব ক্ষেত্রে প্রতি শ্রমিকে মূলধন হ্রাস" }],
    answer: 0,
    explanation: { en: "Labour productivity commonly measures output per worker or per hour worked; it can rise through skills, technology and better organisation.", bn: "শ্রম উৎপাদনশীলতা সাধারণত প্রতি শ্রমিক বা প্রতি কর্মঘণ্টায় উৎপাদন মাপে; দক্ষতা, প্রযুক্তি ও উন্নত সংগঠনের মাধ্যমে এটি বাড়তে পারে।" },
    source: "Original PrepBangla practice question; concept checked against standard economics and Indian official institutional material. Not represented as a verbatim PYQ.",
    status: "verified"
  }
];