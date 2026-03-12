"use client"; // Bắt buộc phải có dòng này

export default function ZaloButton({ productName }: { productName: string }) {
  const handleContact = () => {
    const phone = "0901234567"; // Thay số của bạn
    const message = `Tư vấn bộ ảnh: ${productName}`;
    const url = `https://zalo.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleContact}
      className="mt-2 text-[9px] tracking-[0.3em] font-bold border-b border-black pb-1 hover:text-blue-500 hover:border-blue-500 transition-all uppercase"
    >
      Liên hệ tư vấn
    </button>
  );
}
