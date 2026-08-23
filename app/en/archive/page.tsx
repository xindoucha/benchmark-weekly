import { ArchiveList } from "../../ArchiveList";
import { SiteFooter } from "../../SiteFooter";
import { SiteHeader } from "../../SiteHeader";

export default function EnglishArchivePage() {
  return <main className="archive-page"><SiteHeader current="archive" lang="en" /><section className="archive-hero"><span className="eyebrow">THE ARCHIVE · SINCE 2026</span><h1>Evaluation trends,<br /><em>distilled week by week.</em></h1><p>Each issue captures the week’s most noteworthy benchmarks and datasets, along with the methodological shifts they reveal.</p></section><ArchiveList lang="en" /><SiteFooter lang="en" /></main>;
}
