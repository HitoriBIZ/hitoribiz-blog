// lib/microcms.ts
import { createClient } from "microcms-js-sdk";

export const microcms = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  cover?: { url: string; width?: number; height?: number };
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
};
