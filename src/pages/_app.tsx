import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {NextUIProvider} from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <NextUIProvider>
          <div className="w-screen h-screen flex items-start justify-center">
          <Component {...pageProps} />
          </div>
      </NextUIProvider>
  );
}
