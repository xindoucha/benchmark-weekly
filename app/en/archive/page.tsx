import { ArchiveList } from "../../ArchiveList";
import { SiteFooter } from "../../SiteFooter";
import { SiteHeader } from "../../SiteHeader";

export default function EnglishArchivePage() {
  return <main className="archive-page"><SiteHeader current="archive" lang="en" /><section className="archive-hero"><span className="eyebrow">THE ARCHIVE · SINCE 2026</span><h1>Evaluation shifts,<br /><em>week by week.</em></h1><p>Each issue records the week’s most useful benchmarks and datasets—and the methodological changes they reveal.</p></section><ArchiveList lang="en" /><SiteFooter lang="en" /></main>;
}
