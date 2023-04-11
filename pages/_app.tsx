import axiosClient from "@/api-client/axios-client";
import "../styles/globals.css";
import { EmptyLayout } from "@/components/Layout";
import { AppPropsWithLayout } from "@/models";
import { SWRConfig } from "swr";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosClient.get(url),
        shouldRetryOnError: false,
      }}
    >
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </SWRConfig>
  );
}
