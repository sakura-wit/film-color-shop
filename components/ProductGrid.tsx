/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/lib/sanity";
import ProductCard from "./ProductCard"; // Thêm dòng này

async function getData(categorySlug?: string) {
  // Nếu có truyền categorySlug, ta lọc sản phẩm theo danh mục đó
  // Nếu không truyền, ta lấy tất cả sản phẩm (cho mục New Products)
  const query = categorySlug
    ? `*[_type == "product" && category->slug.current == "${categorySlug}"] | order(_createdAt desc) {
        _id, name, image, price, description, code, cameraSystem, gallery
      }`
    : `*[_type == "product"] | order(_createdAt desc) [0...6]`; // Lấy 6 cái mới nhất

  const data = await client.fetch(query);
  return data;
}

interface Props {
  title: string;
  categorySlug?: string; // Tham số không bắt buộc
}

export default async function ProductGrid({ title, categorySlug }: Props) {
  const products = await getData(categorySlug);

  return (
    <section className="max-w-7xl mx-auto px-6 py-5 border-t border-gray-50">
      <h2 className="text-2xl md:text-3xl font-serif text-center mb-10 tracking-widest uppercase italic">
        {title}
      </h2>

      {/* Container cho list sản phẩm */}
      <div
        className="
        /* Mobile: Cho phép vuốt ngang, ẩn thanh cuộn, padding trái để không sát mép */
        flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-6 -mx-6 px-6
        
        /* Desktop: Quay lại dạng lưới 2 hoặc 3 cột như cũ */
        md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:overflow-visible md:px-0 md:mx-0
      "
      >
        {products?.map((item: any) => (
          <div
            key={item._id}
            className="
              /* Mobile: Mỗi card chiếm 80% chiều rộng màn hình để người dùng biết là còn ảnh phía sau */
              min-w-[80vw] sm:min-w-[50vw] snap-center 
              
              /* Desktop: Trả về kích thước tự động trong grid */
              md:min-w-full
            "
          >
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
