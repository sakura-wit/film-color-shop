import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F9F9F8] text-[#1a1a1a]">
      {/* Container chính với padding rộng rãi để tạo không gian thở */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 lg:gap-8">
        {/* CỘT TRÁI: Typography phong cách tạp chí */}
        <div className="w-full md:w-[45%] flex flex-col justify-center space-y-8 z-10">
          {/* Dòng title phụ */}
          <div className="inline-flex items-center gap-4">
            <span className="w-10 h-[1px] bg-black"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-600">
              MNFILM Production
            </span>
          </div>

          {/* Tiêu đề chính */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] tracking-tight">
            Màu sắc <br />
            <span className="italic text-gray-400 text-4xl md:text-5xl lg:text-6xl">
              của những
            </span>{" "}
            <br />
            Ký ức.
          </h1>

          {/* Đoạn văn */}
          <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-sm text-justify">
            Mỗi khung hình là một câu chuyện. Chúng tôi mang đến những dải màu
            điện ảnh, giúp bạn lưu giữ trọn vẹn cảm xúc và không gian của từng
            khoảnh khắc vô giá.
          </p>

          {/* Nút Khám phá */}
          <div className="pt-4">
            <Link
              href="#products"
              className="group relative inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest"
            >
              <span>Khám phá Preset</span>
              <span className="w-8 h-[1px] bg-black transition-all duration-300 group-hover:w-16"></span>
            </Link>
          </div>
        </div>

        {/* CỘT PHẢI: Editorial Image Layout (Hiệu ứng 2 ảnh xếp chồng) */}
        <div className="w-full md:w-[55%] relative h-[450px] md:h-[650px]">
          {/* Ảnh số 1: Ảnh chính to, nằm phía trên bên phải */}
          <div className="absolute top-0 right-0 w-[75%] h-[85%] overflow-hidden bg-gray-200">
            <Image
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
              alt="Cinematic Main"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Ảnh số 2: Ảnh phụ nằm ngang, đè lên góc dưới bên trái ảnh chính */}
          <div className="absolute bottom-0 left-0 w-[60%] h-[40%] overflow-hidden border-4 border-[#F9F9F8] shadow-2xl bg-gray-300 group">
            <Image
              src="https://images.unsplash.com/photo-1621535496660-311ab81ab2e4?q=80&w=1974&auto=format&fit=crop"
              alt="Film preset detail"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>

          {/* Chữ dọc trang trí (chỉ hiện trên Desktop) */}
          <div className="absolute bottom-20 -right-4 rotate-90 origin-bottom-right hidden md:block">
            <span className="text-[9px] uppercase tracking-[0.4em] text-gray-400">
              Est. 2019 — Vietnam
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
