import { seoDescription, siteName } from "@/utils/general";
import Head from "next/head";
import Script from "next/script";

const SEO = ({ title, description, image, imageDescription, locale }) => {
  return (
    <>
      <Head>
        <title>{`${siteName}${title ? ` | ${title}` : ""} `}</title>
        <meta
          property="og:title"
          content={`${siteName}${title ? `| ${title}` : ""} `}
        />

        <meta name="author" content="Dasimems" />

        <meta
          name="description"
          content={description ? description : seoDescription}
        />
        <meta
          property="og:description"
          content={description ? description : seoDescription}
        />

        <meta property="og:image" content={image ? image : "/meta_image.png"} />
        <meta name="twitter:card" content={image ? image : "/meta_image.png"} />
        <link rel="apple-touch-icon" href={image ? image : "/meta_image.png"} />

        <meta
          property="og:image:alt"
          content={`${siteName}${title ? `| ${title}` : ""} `}
        />
        <meta property="og:locale" content={locale ? locale : "en_US"} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dasimems" />
        <meta
          name="twitter:title"
          content={`${siteName}${title ? `| ${title}` : ""} `}
        />
        <meta
          name="twitter:description"
          content={description ? description : seoDescription}
        />
        <meta
          name="twitter:image"
          content={image ? image : "/meta_image.png"}
        />
      </Head>
      <Script
        src="https://www.google-analytics.com/analytics.js"
        async
      ></Script>
    </>
  );
};

export default SEO;
