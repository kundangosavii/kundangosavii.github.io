// src/utils/searchIndex.ts
import { getCollection } from "astro:content";

export type SearchItem = {
  title: string;
  kind: "Page" | "Blog" | "Lab" | "Project";
  href: string;
  summary?: string;
  keywords: string[];
};

export async function getSearchIndex(): Promise<SearchItem[]> {
  const [blogs, labs, projects] = await Promise.all([
    getCollection("blog"),
    getCollection("lab"),
    getCollection("projects"),
  ]);

  const staticPages: SearchItem[] = [
    { title: "Home", kind: "Page", href: "/", keywords: ["home", "landing"] },
    { title: "Lab", kind: "Page", href: "/lab", keywords: ["lab", "experiments"] },
    { title: "Blogs", kind: "Page", href: "/blogs", keywords: ["blog", "articles", "writing"] },
    { title: "Projects", kind: "Page", href: "/projects", keywords: ["projects", "work", "portfolio"] },
    { title: "Resume", kind: "Page", href: "/resume", keywords: ["resume", "cv"] },
  ];

  const blogItems: SearchItem[] = blogs.map((post) => ({
    title: post.data.title,
    kind: "Blog",
    href: `/blog/${post.slug}`,
    summary: post.data.category,
    keywords: [post.data.category, "blog", "article"],
  }));

  const labItems: SearchItem[] = labs.map((note) => ({
    title: note.data.title,
    kind: "Lab",
    href: `/lab/${note.slug}`,
    summary: note.data.status,
    keywords: [note.data.status, "lab", "experiment"],
  }));

  const projectItems: SearchItem[] = projects.map((project) => ({
    title: project.data.title,
    kind: "Project",
    href: `/projects/${project.slug}`,
    summary: project.data.category,
    keywords: [...project.data.tags, project.data.category, "project"],
  }));

  return [...staticPages, ...blogItems, ...labItems, ...projectItems];
}