import Script from "next/script";

export default function GoogleTagManager() {
  return (
    <div>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-713223450"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-713223450');
        `}
      </Script>
    </div>
  );
}
