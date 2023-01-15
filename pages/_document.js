/* eslint-disable */
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />

        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

        <meta name="description" content="GDSC VIT Chennai" />
        <link rel="icon" href="gdsc.png" />
      </Head>
      <body className="bg-gray-50">
        {/* <Navbar /> */}
        <NextScript />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

        <script>
          AOS.init();
        </script>
      </body>
    </Html>
  );
}
