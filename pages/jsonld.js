import { ArticleJsonLd } from "next-seo";

// See all available JSON-LD here:
// https://github.com/garmeeh/next-seo#json-ld
export default function JsonLd() {
  return (
    <div>
      <ArticleJsonLd
        url="https://inspire-me-now.vercel.com/article"
        title="Inspire Me Now"
        images={["https://inspire-me-now.vercel.com/cover.jpg"]}
        datePublished="2021-04-15T08:00:00+08:00"
        dateModified="2021-04-15T09:00:00+08:00"
        authorName="Alpha Olomi"
        publisherName="Alpha Olomi Projects"
        publisherLogo="https://inspire-me-now.vercel.com/cover.jpg"
        description="This is a mighty good description of this article."
      />
      <h1>Inspirational Qoutes</h1>
      <p>Exceptional, curated qoutes to lift your day</p>
    </div>
  );
}
