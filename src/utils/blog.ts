import type { CollectionEntry } from 'astro:content';

export function estimateReadingTimeMinutes(markdownBody: string): number {
  const wordsPerMinute = 220;
  const words = markdownBody.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function formatPostDate(dateValue: string): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(dateValue));
}

export function sortPostsByDateDesc(posts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
  return [...posts].sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
}
