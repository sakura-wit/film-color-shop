export const category = {
  name: "category",
  title: "Danh mục",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Tên danh mục",
      type: "string",
    },
    {
      name: "slug",
      title: "Đường dẫn (Slug)",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
  ],
};
