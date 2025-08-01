import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "고혜성 - 프론트엔드 개발자 포트폴리오",
  description: "사용자 중심의 프론트엔드 개발자 고혜성의 포트폴리오입니다.",
  keywords: ["프론트엔드", "React", "Next.js", "개발자", "포트폴리오"],
  authors: [{ name: "고혜성" }],
  creator: "고혜성",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
