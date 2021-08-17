import React from "react";
import { AppProps } from "next/app";
//
import { DefaultSeo } from "next-seo";
import "tailwindcss/tailwind.css";

import SEO from "../next-seo.config";

//
import "tailwindcss/tailwind.css";
import "@/styles/global.css";
//
// import { QueryClient, QueryClientProvider } from "react-query";
// import { Hydrate } from "react-query/hydration";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    // const queryClient = new QueryClient();
    return (
        <>
            {/* // <QueryClientProvider client={queryClient}> */}
            {/* // <Hydrate state={pageProps.dehydratedState}> */}
            <RecoilRoot>
                <DefaultSeo {...SEO} />
                <Component {...pageProps} />
            </RecoilRoot>
            {/* // </Hydrate> */}
            {/* </QueryClientProvider> */}
        </>
    );
}

export default MyApp;
