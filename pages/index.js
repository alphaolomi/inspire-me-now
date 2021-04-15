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
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <NextSeo
        title="Inspire Me Now"
        description="Exceptional, curated qoutes to lift your day"
        openGraph={{
          url: "https://inspire-me-now.vercel.com/",
          title: "Inspire Me Now",
          description: "Exceptional, curated qoutes to lift your day",
          images: [{ url: "https://inspire-me-now.vercel.com/cover.jpg" }],
        }}
      />

      <Head>
        <title>Inspire Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer />

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <CopyToClipboard
          onCopy={notify}
          text={`"${props.quote.text}" - ${props.quote.author}`}
        >
          <blockquote className="text-6xl font-bold">
            {props.quote.text}
            <br />-
            <cite className="text-blue-600 italic">{props.quote.author}</cite>
          </blockquote>
        </CopyToClipboard>
      </main>

      <footer className="flex justify-center h-24 w-full space-x-3 border-t">
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
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const quote = quotes.random();
  return {
    props: {
      quote,
    },
  };
}
