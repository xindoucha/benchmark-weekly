import type { DigestIssue } from "./types";

const modules = import.meta.glob<{ default: DigestIssue }>("./issues/*.ts", { eager: true });

export const issues = Object.values(modules)
  .map((module) => module.default)
  .sort((a, b) => b.dateStart.localeCompare(a.dateStart));

export const currentIssue = issues[0];
export const archivedIssues = issues.slice(1);

export function getIssue(slug: string) {
  return issues.find((issue) => issue.slug === slug);
}

export type { DigestIssue, DigestItem } from "./types";
