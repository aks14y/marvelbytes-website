/** Split a heading into two halves by word count for accent styling */
export function splitTitleHalf(title: string): [string, string] {
  const words = title.trim().split(/\s+/);
  if (words.length <= 1) return [title, ""];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

export type TitleAccentHalf = "first" | "second";
