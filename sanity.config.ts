import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "TTFILM Admin",
  projectId: "xn0x5ags", // Thay bằng ID bạn lấy từ sanity.io/manage
  dataset: "production",
  basePath: "/admin", // Đường dẫn vào trang quản trị
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
