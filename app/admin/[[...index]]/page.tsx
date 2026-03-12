"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config"; // Nó sẽ tự tìm đến file config bạn vừa tạo ở bước 1

export default function AdminPage() {
  return <NextStudio config={config} />;
}
