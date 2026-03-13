import Link from "next/link";
import logo from "../public/Logofilm.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-300 border-t border-gray-100 pt-20 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* NỬA TRÊN: Các cột thông tin */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          {/* Cột 1: Brand Info (Chiếm diện tích lớn hơn chút) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="hidden md:flex flex-col items-start">
              <Image className="max-w-32 max-h-20" src={logo} alt={""}></Image>
            </Link>
            <p className="text-sm text-gray-500 font-light leading-relaxed max-w-sm">
              Nâng tầm thị giác cho mọi tác phẩm của bạn với bộ sưu tập màu phim
              kỹ thuật số chuyên nghiệp. Tối ưu hóa quy trình làm việc chỉ với
              một cú click.
            </p>
          </div>

          {/* Cột 2: Điều hướng Shop */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-[14px] font-sans font-semibold uppercase tracking-[0.2em] text-gray-900 mb-6">
              Cửa Hàng
            </h4>
            <ul className="space-y-4 text-xs font-sans text-gray-500">
              <li>
                <Link
                  href="#all"
                  className="hover:text-gray-900 transition-colors"
                >
                  Tất cả Preset
                </Link>
              </li>
              <li>
                <Link
                  href="#wedding"
                  className="hover:text-gray-900 transition-colors"
                >
                  Wedding Collection
                </Link>
              </li>
              <li>
                <Link
                  href="#portrait"
                  className="hover:text-gray-900 transition-colors"
                >
                  Portrait Collection
                </Link>
              </li>
              <li>
                <Link
                  href="#film"
                  className="hover:text-gray-900 transition-colors"
                >
                  Film Emulation
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ khách hàng */}
          <div className="md:col-span-2">
            <h4 className="text-[14px] font-sans font-semibold uppercase tracking-[0.2em] text-gray-900 mb-6">
              Hỗ Trợ
            </h4>
            <ul className="space-y-4 text-xs font-sans text-gray-500">
              <li>
                <Link
                  href="#guide"
                  className="hover:text-gray-900 transition-colors"
                >
                  Hướng dẫn cài đặt
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-gray-900 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-gray-900 transition-colors"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Cột 4: Mạng xã hội */}
          <div className="md:col-span-2">
            <h4 className="text-[14px] font-sans font-semibold uppercase tracking-[0.2em] text-gray-900 mb-6">
              Kết Nối
            </h4>
            <ul className="space-y-4 text-xs font-sans text-gray-500">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-900 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-900 transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-900 transition-colors"
                >
                  Behance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* NỬA DƯỚI: Copyright & Links pháp lý */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-sans tracking-[0.3em] text-gray-400 uppercase">
            © {new Date().getFullYear()} TTFILM STORE. All rights reserved.
          </p>

          <div className="flex gap-6 text-[10px] font-sans tracking-[0.15em] text-gray-400 uppercase">
            <Link
              href="#privacy"
              className="hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              className="hover:text-gray-900 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
