import React from "react";
import Head from "next/head";
import quotes, { Quote } from "quotesy";
import { NextSeo } from "next-seo";

import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "next/app";

interface HomepageProps {
    quote: Quote
}



export async function getServerSideProps(_context: AppContext):Promise<{props:HomepageProps}> {
    const quote = quotes.random();
    return {
        props: {
            quote,
        },
    };
}


const Homepage: React.FC<HomepageProps> = ({ quote }) => {
    const notify = () =>
        toast.success("Copied to clipboard!", {
            position: "top-center",
            autoClose: 2000,
        });

    return (
        <div className="min-h-screen overflow-auto ">
            <Head>
                <title>Inspire Me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NextSeo
                title="Inspire Me Now"
                description="Exceptional, curated qoutes to lift your day"
                openGraph={{
                    url: "https://inspire-me-now.vercel.app/",
                    title: "Inspire Me Now",
                    description: "Exceptional, curated qoutes to lift your day",
                    images: [
                        { url: "https://inspire-me-now.vercel.app/cover.jpg" },
                    ],
                }}
            />
            

            <ToastContainer />

            <div className="container">
                <main className="flex flex-col justify-between h-screen px-4">
                    <div className="flex flex-col items-center justify-center flex-1 text-center">
                        <CopyToClipboard
                            onCopy={notify}
                            text={`"${quote.text}" - ${quote.author}`}
                        >
                            <blockquote className="text-6xl font-bold ">
                                {quote.text}
                                <br />-
                                <cite className="italic text-blue-600">
                                    <a href={`https://www.google.com/search?q=${quote.author}`}  target="_blank" rel="noreferrer">
                                        {quote.author}
                                    </a>
                                </cite>
                            </blockquote>
                        </CopyToClipboard>
                    </div>

                    <footer className="flex justify-around w-full h-24 gap-1 border-t md:h-1/6 lg:justify-center lg:gap-5">
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
};

export default Homepage;
