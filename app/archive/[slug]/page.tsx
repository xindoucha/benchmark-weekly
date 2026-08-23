import { getIssue } from "../../data";
import { IssueContent } from "../../IssueContent";
import { SiteFooter } from "../../SiteFooter";
import { SiteHeader } from "../../SiteHeader";

export default async function ArchivedIssuePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const issue = getIssue(slug);
  if (!issue) return <main><SiteHeader current="archive" /><section className="issue-hero"><a className="back-link" href="/archive">← 返回归档</a><h1>未找到这一期</h1></section><SiteFooter /></main>;
  return <main><SiteHeader current="archive" alternateHref={`/en/archive/${slug}`} /><IssueContent issue={issue} lang="zh" archived /><SiteFooter /></main>;
}
