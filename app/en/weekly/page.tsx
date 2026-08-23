import { currentIssue } from "../../data";
import { IssueContent } from "../../IssueContent";
import { SiteFooter } from "../../SiteFooter";
import { SiteHeader } from "../../SiteHeader";

export default function EnglishWeeklyPage() {
  return <main><SiteHeader current="weekly" lang="en" /><IssueContent issue={currentIssue} lang="en" /><SiteFooter lang="en" /></main>;
}
