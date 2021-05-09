import Head from "next/head";
import quotes from "quotesy";
import { NextSeo } from "next-seo";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Home(props) {
  const notify = () =>
    toast.success("Copied to clipboard!", {
      position: "top-center",
      autoClose: 2000,
    });

  return (
    <div className="min-h-screen overflow-auto ">
      <NextSeo
        title="Inspire Me Now"
        description="Exceptional, curated qoutes to lift your day"
        openGraph={{
          url: "https://inspire-me-now.vercel.app/",
          title: "Inspire Me Now",
          description: "Exceptional, curated qoutes to lift your day",
          images: [{ url: "https://inspire-me-now.vercel.app/cover.jpg" }],
        }}
      />

      <Head>
        <title>Inspire Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer />

      <div className="container">
        <main className="flex flex-col h-screen justify-between px-4">
          <div className="flex flex-col  items-center justify-center flex-1 text-center">
            <CopyToClipboard
              onCopy={notify}
              text={`"${props.quote.text}" - ${props.quote.author}`}
            >
              <blockquote className="text-6xl font-bold ">
                {props.quote.text}
                <br />-
                <cite className="text-blue-600 italic">
                  {props.quote.author}
                </cite>
              </blockquote>
            </CopyToClipboard>
          </div>

          <footer className="h-24 md:h-1/6  w-full flex justify-around lg:justify-center lg:gap-5 gap-1   border-t">
            <a
              className="flex items-center justify-center"
              href="https://github.com/alphaolomi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Made with ❤️ by @alphaolomi
            </a>
            <a
              className="flex items-center justify-center"
              href="https://github.com/dwyl/quotes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by dwyl/quotes
            </a>
            <a
              className="flex items-center justify-center"
              href="https://github.com/alphaolomi/inspire-me-now"
            >
              <img
                src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Finspire-me-now.vercel.app&count_bg=%23CFCFCF&title_bg=%23A8A8A8&icon=&icon_color=%23E7E7E7&title=inspired&edge_flat=true"
                alt="inspired tag"
                width="120"
                height="15"
              />
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const quote = quotes.random();
  return {
    props: {
      quote,
    },
  };
}
