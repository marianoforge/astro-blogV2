import { getCollection, type CollectionEntry } from "astro:content";

//Format Date To String
export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(undefined, options);
}

//Capitalize Word
export function capitalize(str: string): string {
  if (typeof str !== "string" || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const allBlogArticles: CollectionEntry<"blog">[] = (
  await getCollection("blog")
).sort((a: CollectionEntry<"blog">, b: CollectionEntry<"blog">) => {
  return (
    ((b.data.pubDate.valueOf() as number) - a.data.pubDate.valueOf()) as number
  ).valueOf();
});
