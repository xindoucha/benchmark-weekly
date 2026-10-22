import { OverviewGallery } from "../../OverviewGallery";
import { SiteFooter } from "../../SiteFooter";
import { SiteHeader } from "../../SiteHeader";

export default function EnglishOverviewsPage() {
  return <main className="overviews-page"><SiteHeader current="overviews" lang="en" /><section className="overviews-hero"><span className="eyebrow">ISSUE OVERVIEWS · 2026</span><h1>One image,<br /><em>one complete issue.</em></h1><p>Browse each issue’s selected projects, fields, summaries, publication dates and organizations. Select an image to read the full issue.</p></section><OverviewGallery lang="en" /><SiteFooter lang="en" /></main>;
}
