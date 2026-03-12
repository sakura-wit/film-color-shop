"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { urlFor } from "@/lib/sanity";

const navLinks = [
  { name: "GIỚI THIỆU", href: "#" },
  { name: "NEW PRODUCTS", href: "#" },
  { name: "ALL PRODUCTS", href: "#" },
  { name: "LIÊN HỆ", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // State mở giỏ hàng

  // Lấy dữ liệu từ store
  const { cart, removeFromCart } = useCartStore();

  // Trick của Next.js để tránh lỗi Hydration khi dùng LocalStorage
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );

  // HÀM XỬ LÝ THANH TOÁN QUA ZALO
  const handleCheckout = () => {
    // 1. Số điện thoại Zalo của bạn (Bỏ số 0 ở đầu thay bằng 84 hoặc giữ nguyên số 0 tùy thiết lập Zalo, thường để 0 là ok)
    const zaloNumber = "0901234567"; // THAY BẰNG SỐ CỦA BẠN

    // 2. Soạn nội dung tin nhắn tự động
    let message = `Chào MNFILM, tôi muốn đặt đơn hàng sau:\n\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (SL: ${item.quantity})\n`;
      message += `   Giá: ${new Intl.NumberFormat("vi-VN").format(item.price)}đ\n`;
    });

    message += `\nTổng cộng: ${new Intl.NumberFormat("vi-VN").format(totalPrice)}đ\n\n`;
    message += `Vui lòng tư vấn thêm giúp tôi!`;

    // 3. Mã hóa đoạn text để đưa lên URL
    const encodedMessage = encodeURIComponent(message);

    // 4. Tạo link Zalo và mở tab mới
    // const zaloUrl = `https://zalo.me/${zaloNumber}?text=${encodedMessage}`;
    const messengerUrl = `https://m.me/8527697087267286?text=${encodedMessage}`;
    window.open(messengerUrl, "_blank");
  };

  return (
    <>
      <nav className="bg-white/90 backdrop-blur-md border-b sticky top-0 z-40 transition-all">
        {/* Bố cục 3 cột (Left - Center - Right) */}
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* CỘT TRÁI: Nút Menu (Mobile) / Logo (Desktop) */}
          <div className="flex-1 flex justify-start items-center">
            {/* Nút Hamburger chỉ hiện trên Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 -ml-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo chỉ hiện trên Desktop ở cột trái */}
            <Link href="/" className="hidden md:flex flex-col items-start">
              <span className="text-2xl md:text-3xl font-serif font-light tracking-tighter">
                MN<span className="italic">FILM</span>
              </span>
              <span className="text-[8px] tracking-[0.3em] uppercase">
                Est. 2019
              </span>
            </Link>
          </div>

          {/* CỘT GIỮA: Logo (Mobile) / Menu chữ (Desktop) */}
          <div className="flex-[2] flex justify-center items-center">
            {/* Logo trên Mobile được dời ra giữa */}
            <Link href="/" className="md:hidden flex flex-col items-center">
              <span className="text-2xl font-serif font-light tracking-tighter">
                MN<span className="italic">FILM</span>
              </span>
              <span className="text-[8px] tracking-[0.3em] uppercase">
                Est. 2019
              </span>
            </Link>

            {/* Menu chữ trên Desktop */}
            <ul className="hidden md:flex justify-center items-center gap-8 lg:gap-12">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {/* Thêm whitespace-nowrap để chữ không bị rớt dòng */}
                  <Link
                    href={link.href}
                    className="text-[11px] font-medium tracking-[0.2em] text-gray-600 hover:text-black transition uppercase whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT PHẢI: Icon Giỏ hàng */}
          <div className="flex-1 flex justify-end items-center">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-800 hover:text-black transition"
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
              {mounted && totalItems > 0 && (
                <span className="absolute top-1 right-0 bg-black text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg animate-in fade-in slide-in-from-top-2">
            <ul className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm tracking-[0.2em] text-gray-800 uppercase"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* SIDEBAR GIỎ HÀNG (Trượt từ phải sang) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Lớp nền đen mờ, bấm vào đây sẽ đóng giỏ hàng */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          ></div>

          {/* Giao diện giỏ hàng */}
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            {/* Header giỏ hàng */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-lg font-serif italic tracking-widest">
                GIỎ HÀNG
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Danh sách sản phẩm */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {mounted && cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-4">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="text-sm tracking-widest uppercase">
                    Giỏ hàng trống
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item._id} className="flex gap-4 items-center">
                    <div className="relative w-20 h-24 bg-gray-100 flex-shrink-0">
                      {item.image && (
                        <Image
                          src={urlFor(item.image).url()}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xs font-bold uppercase mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        SL: {item.quantity}
                      </p>
                      <p className="text-sm font-semibold mt-1">
                        {new Intl.NumberFormat("vi-VN").format(item.price)}đ
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer giỏ hàng (Tổng tiền & Nút thanh toán) */}
            {mounted && cart.length > 0 && (
              <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-medium uppercase tracking-widest">
                    Tổng cộng:
                  </span>
                  <span className="text-lg font-bold text-red-600">
                    {new Intl.NumberFormat("vi-VN").format(totalPrice)}đ
                  </span>
                </div>

                {/* ĐÃ SỬA SỰ KIỆN onClick Ở ĐÂY */}
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition"
                >
                  Gửi đơn qua Zalo
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
