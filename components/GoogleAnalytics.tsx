"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GA_TRACKING_ID = "G-952NXF29C2"; // Replace with your actual GA ID

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return (
    <>
      {/* Google Analytics script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
    </>
  );
}
