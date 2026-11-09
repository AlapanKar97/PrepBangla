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
];
