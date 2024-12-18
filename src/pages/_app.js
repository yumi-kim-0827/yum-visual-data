import "primereact/resources/themes/soho-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "@/src/styles/globals.css";
import { PrimeReactProvider } from "primereact/api";
import { useEffect, useState } from "react";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
//components
import PanelMenuBar from "@/src/components/sidemenu/PanelMenuBar";
import Header from "@/src/components/header/Header";
import Footer from "@/src/components/footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-DCKP3WS77X`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
           window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DCKP3WS77X');
        `}
      </Script>
      <DefaultSeo
        title="visual infographic"
        description="로그인 없이 그래프와 차트 등 인포그래픽을 생성하세요, 간단히 데이터를 입력하여 직관적인 그래프와 지도에서 결과를 시각화하세요."
        openGraph={{
          type: "website",
          locale: "ko_KR",
          url: "https://visualinfographic.life",
          site_name: "visual infographic",
          images: [
            {
              url: "https://your-site.com/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "OG Image Alt",
            },
          ],
        }}
        // twitter={{
        //   handle: "@twitter_handle",
        //   site: "@twitter_handle",
        //   cardType: "summary_large_image",
        // }}
      />
      <PrimeReactProvider>
        <Header />
        <div className="p-4 flex gap-2 h-[calc(100vh-139px)]">
          <PanelMenuBar />
          <Component {...pageProps} />
        </div>
        <Footer />
      </PrimeReactProvider>
    </>
  );
}
