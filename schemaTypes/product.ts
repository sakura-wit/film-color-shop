export const product = {
  name: "product",
  title: "Sản phẩm",
  type: "document",
  fields: [
    { name: "name", title: "Tên bộ ảnh", type: "string" },
    {
      name: "image",
      title: "Ảnh đại diện",
      type: "image",
      options: { hotspot: true },
    },
    { name: "price", title: "Giá bán (VNĐ)", type: "number" },
    { name: "description", title: "Mô tả chi tiết", type: "text" },
    { name: "code", title: "Mã sản phẩm", type: "string" },
    { name: "cameraSystem", title: "Hệ máy", type: "string" },
    {
      name: "gallery",
      title: "Thư viện ảnh nhỏ",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "category",
      title: "Thuộc danh mục",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
};
