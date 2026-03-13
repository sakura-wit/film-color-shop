/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { ShoppingCart, X, Check } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

export default function ProductCard({ product }: { product: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(product.image);

  // GỌI HÀM TỪ STORE
  const addToCart = useCartStore((state) => state.addToCart);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price);
  };

  const handleAddToCart = () => {
    addToCart(product); // Gọi hàm thêm vào giỏ
    alert(`Đã thêm "${product.name}" vào giỏ hàng!`); // (Tạm thời vẫn để alert cho bạn dễ biết)
  };

  return (
    <>
      {/* 1. GIAO DIỆN SẢN PHẨM BÊN NGOÀI (Giữ nguyên) */}
      <div className="group flex flex-col items-center">
        <div className="relative aspect-square w-full overflow-hidden bg-gray-100 mb-4 rounded-md">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
        </div>
        <h3 className="text-[18px] font-semibold uppercase text-center mt-2">
          {product.name}
        </h3>
        <p className="text-[13px] font-bold mt-1 mb-4">
          {product.price ? `${formatPrice(product.price)} VNĐ` : "Liên hệ"}
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleAddToCart()}
            className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
          >
            <ShoppingCart size={18} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => {
              setActiveImage(product.image); // Reset ảnh bự về ảnh gốc khi mở
              setIsModalOpen(true);
            }}
            className="px-8 py-2 border border-black rounded-full text-[13px] font-medium hover:bg-black hover:text-white transition-colors"
          >
            Chi tiết
          </button>
        </div>
      </div>

      {/* 2. GIAO DIỆN POPUP MỚI (Giống thiết kế mẫu) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/60 backdrop-blur-sm">
          <div className="bg-white max-w-5xl w-full relative flex flex-col md:flex-row shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Nút tắt */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 hover:rotate-90 transition-transform duration-300"
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            {/* Cột trái: Khu vực Ảnh */}
            <div className="w-full md:w-[55%] p-4 flex flex-col gap-2">
              {/* Ảnh chính */}
              <div className="relative w-full aspect-[4/3] bg-gray-100">
                {activeImage && (
                  <Image
                    src={urlFor(activeImage).url()}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Thư viện ảnh nhỏ bên dưới */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {/* Ảnh đầu tiên luôn là ảnh đại diện */}
                <div
                  onClick={() => setActiveImage(product.image)}
                  className={`relative w-24 h-16 flex-shrink-0 cursor-pointer border-2 ${activeImage === product.image ? "border-black" : "border-transparent"}`}
                >
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt="thumb"
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Các ảnh trong gallery */}
                {product.gallery?.map((img: any, index: number) => (
                  <div
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-24 h-16 flex-shrink-0 cursor-pointer border-2 ${activeImage === img ? "border-black" : "border-transparent"}`}
                  >
                    <Image
                      src={urlFor(img).url()}
                      alt="thumb"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Cột phải: Thông tin */}
            <div className="w-full md:w-[45%] p-8 md:p-10 flex flex-col">
              <h2 className="text-2xl font-medium uppercase mb-6 tracking-wide">
                {product.name}
              </h2>

              <ul className="space-y-3 text-sm text-gray-700 mb-6">
                <li className="flex items-center gap-2">
                  <Check size={16} />{" "}
                  <span>
                    Mã: <strong>{product.code || "Đang cập nhật"}</strong>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} />{" "}
                  <span>
                    Hệ máy:{" "}
                    <strong>{product.cameraSystem || "Đang cập nhật"}</strong>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} />{" "}
                  <span>
                    Giá:{" "}
                    <strong>
                      {product.price
                        ? `${formatPrice(product.price)}đ`
                        : "Liên hệ"}
                    </strong>
                  </span>
                </li>
              </ul>

              <hr className="border-gray-200 mb-6" />

              {/* Mô tả chi tiết */}
              <div className="text-sm text-gray-600 leading-relaxed mb-8 flex-grow">
                {product.description ||
                  "Chưa có mô tả chi tiết cho sản phẩm này."}
              </div>

              {/* Hai nút hành động */}
              <div className="flex gap-4 mt-auto">
                <button
                  onClick={() => handleAddToCart()}
                  className="flex-1 flex items-center justify-center gap-2 py-3 md:py-4 border border-black rounded-full text-sm font-medium hover:bg-gray-50 transition"
                >
                  <ShoppingCart size={18} /> Thêm vào giỏ
                </button>
                <button className="flex-1 py-3 md:py-4 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition shadow-lg">
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
