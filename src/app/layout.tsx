import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "PrepBangla | Free WBCS Mock Tests & Previous Year Questions",
  description: "Practise free WBCS mock tests and subject-wise MCQs in Bengali and English. Get instant results, explanations and track your progress.",
  metadataBase: new URL("https://prep-bangla-website.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: { title: "PrepBangla — Free Exam Practice", description: "Free bilingual mock tests for WBCS aspirants.", type: "website" },
  robots: { index: true, follow: true }
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
