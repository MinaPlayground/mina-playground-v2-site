import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="icon" href="/icon.svg" sizes="any" />
      </Head>
      <body className="dark text-foreground bg-background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
