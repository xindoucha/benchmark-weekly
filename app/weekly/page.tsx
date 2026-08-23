import { currentIssue } from "../data";
import { IssueContent } from "../IssueContent";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";

export default function WeeklyPage() {
  return <main><SiteHeader current="weekly" /><IssueContent issue={currentIssue} lang="zh" /><SiteFooter /></main>;
}
