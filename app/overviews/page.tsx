import { OverviewGallery } from "../OverviewGallery";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";

export default function OverviewsPage() {
  return <main className="overviews-page"><SiteHeader current="overviews" /><section className="overviews-hero"><span className="eyebrow">ISSUE OVERVIEWS · 2026</span><h1>一张图，<br /><em>读完一期。</em></h1><p>统一整理每期入选项目、方向、简介、发布日期与发布机构。点击图片即可进入对应周刊。</p></section><OverviewGallery lang="zh" /><SiteFooter /></main>;
}
