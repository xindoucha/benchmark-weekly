import { getIssue, issues } from "../../../data";
import { IssueContent } from "../../../IssueContent";
import { SiteFooter } from "../../../SiteFooter";
import { SiteHeader } from "../../../SiteHeader";
import { sitePath } from "../../../site-path";

export default async function EnglishArchivedIssuePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const issue = getIssue(slug);
  if (!issue) return <main><SiteHeader current="archive" lang="en" /><section className="issue-hero"><a className="back-link" href={sitePath("/en/archive")}>← Back to archive</a><h1>Issue not found</h1></section><SiteFooter lang="en" /></main>;
  return <main><SiteHeader current="archive" lang="en" alternateHref={`/archive/${slug}`} /><IssueContent issue={issue} lang="en" archived /><SiteFooter lang="en" /></main>;
}

export function generateStaticParams() {
  return issues.map((issue) => ({ slug: issue.slug }));
}
