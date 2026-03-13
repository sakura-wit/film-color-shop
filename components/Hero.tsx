import Image from "next/image";
import Link from "next/link";
import hero1 from "../public/hero.avif";
import hero2 from "../public/hero2.avif";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F9F9F8] text-[#1a1a1a]">
      {/* Tăng padding (py-20 md:py-24) để tạo khoảng thở rộng rãi, sang trọng hơn */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-12 flex flex-col md:flex-row items-center gap-16 lg:gap-20">
        {/* CỘT TRÁI: Typography tinh tế */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-10 z-10">
          {/* Dòng title phụ - Làm nét mảnh hơn */}
          <div className="flex items-center gap-4">
            <span className="w-12 h-[1px] bg-gray-400"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-sans">
              Sakura Production
            </span>
          </div>

          {/* Tiêu đề chính - BỎ font-bold, dùng font-serif với leading sát nhau để tạo chất thơ */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-[1.15]">
            SAKURA STORE
          </h1>

          {/* Đoạn văn - Chữ nhỏ gọn, dễ đọc */}
          <p className="text-base text-gray-500 font-sans font-light leading-relaxed max-w-md">
            Mang chất điện ảnh vào từng bức ảnh của bạn. Khám phá bộ sưu tập màu
            film được tinh chỉnh tỉ mỉ, giúp tái hiện cảm xúc, ánh sáng và chiều
            sâu như những khung hình trong phim. Chỉ với vài cú nhấp, bạn có thể
            biến khoảnh khắc đời thường thành những thước ảnh đầy cảm hứng.
          </p>

          {/* Nút Khám phá - Thanh lịch hơn, hiệu ứng hover mượt mà */}
          <div className="pt-2">
            <Link
              href="#products"
              className="group inline-flex items-center gap-4 text-xs font-sans uppercase tracking-[0.2em] text-gray-900"
            >
              <span className="pb-1 border-b border-transparent transition-colors group-hover:border-gray-900">
                Khám phá Preset
              </span>
              <span className="w-8 h-[1px] bg-gray-900 transition-all duration-300 group-hover:w-12"></span>
            </Link>
          </div>
        </div>

        {/* CỘT PHẢI: Layout ảnh Tạp chí (Clean & Minimal) */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px]">
          {/* Ảnh số 1: Tỉ lệ thanh thoát hơn */}
          <div className="absolute top-0 right-0 w-[85%] h-[85%] overflow-hidden">
            <Image
              src={hero1}
              alt="Cinematic Main"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              priority
            />
          </div>

          {/* Ảnh số 2: Bỏ border dày và shadow gắt. Thay bằng khung bo màu nền tinh tế */}
          <div className="absolute bottom-0 left-0 w-[55%] h-[45%] bg-[#F9F9F8] p-2 shadow-sm transition-transform duration-700 hover:-translate-y-2">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={hero2}
                alt="Film preset detail"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Chữ dọc trang trí */}
          <div className="absolute bottom-24 -right-6 rotate-90 origin-bottom-right hidden lg:block">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-sans">
              Est. 2019 — Vietnam
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
