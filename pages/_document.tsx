import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <meta name="yandex-verification" content="9b8bd6df918b909b" />
            <meta name="google-site-verification" content="892BtrojwlJjmo_8xSjL1dT_hjjsHobxcmeQLVz8mBg" />
        </Head>
      <body>
        <Main />
        <NextScript />

        <script
            dangerouslySetInnerHTML={{
                __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(94273001, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });
              `,
            }}
        />
        <noscript>
            <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://mc.yandex.ru/watch/12345678" style={{ position:'absolute', left:'-9999px' }} alt=""/>
            </div>
        </noscript>

        <script
            dangerouslySetInnerHTML={{
                __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W3FZBPN');`}}
            />
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W3FZBPN"
                          height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>

      </body>
    </Html>
  )
}
