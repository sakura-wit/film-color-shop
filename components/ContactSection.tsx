"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Bao lâu thì tôi nhận được toàn bộ file ảnh?",
    answer:
      "Thông thường, thời gian hậu kỳ và bàn giao toàn bộ file ảnh chất lượng cao là từ 2 đến 4 tuần kể từ ngày chụp, tùy thuộc vào số lượng ảnh và gói dịch vụ bạn chọn.",
  },
  {
    question: "MNFILM có nhận chụp ngoại tỉnh không?",
    answer:
      "Chắc chắn rồi. Chúng tôi sẵn sàng di chuyển đến bất cứ đâu để lưu giữ khoảnh khắc của bạn. Chi phí đi lại và ăn ở sẽ được tính riêng vào báo giá chi tiết.",
  },
  {
    question: "Tôi có cần đặt cọc để giữ lịch không?",
    answer:
      "Để đảm bảo lịch trình tốt nhất cho ekip, chúng tôi yêu cầu đặt cọc 30% giá trị hợp đồng ngay khi bạn chốt ngày chụp. Phần còn lại sẽ thanh toán sau khi nhận file gốc.",
  },
  {
    question: "Tôi có được chọn tone màu riêng không?",
    answer:
      "Tất nhiên. Trước ngày chụp, chúng ta sẽ có một buổi trao đổi chi tiết về moodboard, phong cách và tone màu film mà bạn mong muốn để đảm bảo sản phẩm cuối cùng ưng ý nhất.",
  },
];

export default function ContactSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Cảm ơn bạn đã để lại thông tin! MNFILM sẽ liên hệ với bạn sớm nhất."
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 justify-between">
        {/* CỘT TRÁI: FORM ĐĂNG KÝ (Được bọc trong khối nền kem) */}
        <div className="w-full lg:w-[45%] bg-[#F9F9F8] p-8 md:p-12 lg:p-14 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 tracking-tight">
            Bắt đầu câu chuyện.
          </h2>
          <p className="text-sm text-gray-500 mb-12 font-light leading-relaxed">
            Hãy để lại thông tin, chúng tôi sẽ liên hệ để tư vấn gói chụp và màu
            sắc phù hợp nhất với bạn.
          </p>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Input Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder=" "
                required
                className="peer w-full bg-transparent border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black transition-colors"
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-2 text-[11px] text-gray-400 uppercase tracking-widest transition-all peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-black peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-black"
              >
                Tên của bạn *
              </label>
            </div>

            {/* Input Phone */}
            <div className="relative">
              <input
                type="tel"
                id="phone"
                placeholder=" "
                required
                className="peer w-full bg-transparent border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black transition-colors"
              />
              <label
                htmlFor="phone"
                className="absolute left-0 top-2 text-[11px] text-gray-400 uppercase tracking-widest transition-all peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-black peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-black"
              >
                Số điện thoại *
              </label>
            </div>

            {/* Input Service Type */}
            <div className="relative mt-2">
              <select
                id="service"
                className="w-full bg-transparent border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black transition-colors text-gray-800 appearance-none rounded-none"
              >
                <option value="wedding">Phóng sự cưới (Wedding)</option>
                <option value="prewedding">Ảnh cưới (Pre-wedding)</option>
                <option value="couple">Ảnh đôi (Couple / Anniversary)</option>
                <option value="personal">Ảnh cá nhân / Nàng thơ</option>
                <option value="presets">Mua Màu Film (Presets)</option>
              </select>
              <div className="absolute right-0 top-3 pointer-events-none text-gray-500">
                <Plus size={14} />
              </div>
            </div>

            {/* Input Message */}
            <div className="relative mt-12">
              <textarea
                id="message"
                rows={2}
                placeholder=" "
                className="peer w-full bg-transparent border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-black transition-colors resize-none"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 top-2 text-[11px] text-gray-400 uppercase tracking-widest transition-all peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-black peer-not-placeholder-shown:-top-5 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-black"
              >
                Lời nhắn / Ý tưởng của bạn
              </label>
            </div>

            {/* Nút Submit */}
            <button
              type="submit"
              className="mt-6 w-full py-4 bg-black text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors"
            >
              Gửi Yêu Cầu
            </button>
          </form>
        </div>

        {/* CỘT PHẢI: FAQ */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center py-8">
          <div className="inline-flex items-center gap-4 mb-10">
            <span className="w-8 h-[1px] bg-black"></span>
            {/* Làm đậm tiêu đề phụ */}
            <h3 className=" text-4xl uppercase tracking-[0.3em] font-bold text-black">
              Những điều cần biết
            </h3>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                {/* Đã đưa comment vào bên trong thẻ div */}
                {/* Làm rõ đường kẻ ngang */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                >
                  {/* Tăng kích thước chữ (md:text-xl) và dùng màu xám đậm (gray-800) */}
                  <span
                    className={`text-lg md:text-xl font-serif pr-8 transition-colors ${openIndex === index ? "text-black font-medium" : "text-gray-800 group-hover:text-black"}`}
                  >
                    {faq.question}
                  </span>
                  {/* Đổi màu icon Plus/Minus cho rõ hơn */}
                  <span
                    className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "text-black rotate-180" : "text-gray-600"}`}
                  >
                    {openIndex === index ? (
                      <Minus size={20} strokeWidth={2} />
                    ) : (
                      <Plus size={20} strokeWidth={2} />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100 pb-8" : "max-h-0 opacity-0"}`}
                >
                  {/* Gỡ bỏ font-light, dùng text-gray-700 để đoạn văn dễ đọc tuyệt đối */}
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify pr-4 md:pr-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
