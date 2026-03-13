// lib/api.ts
import { client } from "./sanity";

export async function getProducts(categorySlug?: string) {
  const query = categorySlug
    ? `*[_type == "product" && category->slug.current == $slug] | order(_createdAt desc) {
        _id, name, image, price, description, code, cameraSystem, gallery
      }`
    : `*[_type == "product"] | order(_createdAt desc) [0...6] {
        _id, name, image, price, description, code, cameraSystem, gallery
      }`;

  const params = categorySlug ? { slug: categorySlug } : {};

  // THAY ĐỔI Ở ĐÂY: Xóa revalidate: 60 và dùng cache: 'no-store'
  const data = await client.fetch(query, params, { cache: "no-store" });

  return data;
}
