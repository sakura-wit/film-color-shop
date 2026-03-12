import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* 1. Mục mặc định: Hiện tất cả sản phẩm mới nhất */}
      <ProductGrid title="New Products" categorySlug="new-products" />

      {/* 2. Mục lọc theo danh mục 'most-popular' */}
      <ProductGrid
        title="Most Popular Products"
        categorySlug="most-popular-products"
      />

      {/* 3. Mục lọc theo danh mục 'wedding' */}
      <ProductGrid
        title="Wedding Collections"
        categorySlug="wedding-collections"
      />

      {/* Gọi Section Form & FAQ ở đây */}
      <ContactSection />

      {/* Thêm một Footer đơn giản cuối trang */}
      <footer className="py-20 text-center border-t border-gray-100 mt-20">
        <p className="text-[10px] tracking-[0.4em] text-gray-400 uppercase">
          © 2024 TTFILM STORE. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
