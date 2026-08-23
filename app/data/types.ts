export type Localized<T> = { zh: T; en: T };

export type DigestItem = {
  rank: number;
  name: string;
  kind?: "Benchmark" | "Dataset";
  area: string;
  author?: string;
  org?: string;
  published?: string;
  date?: string;
  summary: string;
  scale?: string;
  evaluation?: string;
  why?: string;
  takeaway?: string;
  url: string;
};

export type DigestIssue = {
  slug: string;
  week: number;
  issue: number;
  year: number;
  dateStart: string;
  dateEnd: string;
  theme: Localized<string>;
  observation: Localized<string> & { quote?: string };
  overview?: Localized<Array<{ count: number; title: string; text: string }>>;
  items: Localized<DigestItem[]>;
};
