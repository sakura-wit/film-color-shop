import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // Import font mới
import "./globals.css";

// Cấu hình Font chữ có chân cho tiêu đề/nghệ thuật
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
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
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
