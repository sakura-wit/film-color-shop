import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google"; // Import font mới
import "./globals.css";

// Cấu hình Font chữ có chân cho tiêu đề/nghệ thuật
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

// Cấu hình Font chữ không chân cho nội dung dễ đọc
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MNFILM | Studio & Concept",
  description: "Making memories that will last a lifetime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Thêm cả 2 class font vào body */}
      <body
        className={`${cormorant.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
