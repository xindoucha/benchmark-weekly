import { ArchiveList } from "../ArchiveList";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";

export default function ArchivePage() {
  return <main className="archive-page"><SiteHeader current="archive" /><section className="archive-hero"><span className="eyebrow">THE ARCHIVE · SINCE 2026</span><h1>评测趋势，<br /><em>按周沉淀。</em></h1><p>每一期都记录当周最值得关注的 Benchmark 与 Dataset，以及它们带来的方法变化。</p></section><ArchiveList lang="zh" /><SiteFooter /></main>;
}
