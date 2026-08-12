import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, keywords, url = "/" }) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:type" content="website" />

      <meta property="og:url" content={`https://anklegaming.com${url}`} />

      <link rel="canonical" href={`https://anklegaming.com${url}`} />
    </Helmet>
  );
}
