import React from "react";

import Head from "next/head";

export default function SEO({
  title = "Lavalab",
  description = "We are the University of Southern California’s premiere, student-run, product incubator. Every semester, LavaLab invites a new cohort of visionary designers, developers, and project managers to build tomorrow’s startups, today.",
  author = "USC Lavalab",
  lang = "en",
  meta = [] as any[],
}) {
  return (
    <Head>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {meta.map((m, i) => (
        <meta key={i} {...m} />
      ))}
    </Head>
  );
}
