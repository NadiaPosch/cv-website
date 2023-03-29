import { ChevronDown } from "@/components/icons";
import { Section } from "@/components/section";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nadia Posch</title>
        <meta name="description" content="Nadia Posch - Curriculum vitae" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full max-w-3xl mx-auto text-white">
        <div className="h-screen relative flex flex-col gap-y-8 p-8 justify-center items-center text-center font-mono text-xl lg:text-3xl">
          <p className="w-[30ch] text1">Hello 👋🏼 I'm glad you're here!</p>
          <p className="w-[25ch] text2">Let me tell you a story.</p>
          <p className="w-[20ch] text3">Once upon a time...</p>
          <p className="text4 mt-12 leading-relaxed">
            Just kidding, scroll down and you'll find everything you'll need to
            know.
          </p>
          <button
            className="absolute left-1/2 bottom-0 -translate-x-1/2 opacity-50 hover:opacity-100 transition-opacity duration-200"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <ChevronDown className="w-20 h-20" />
          </button>
        </div>
        <Section>Hello</Section>
      </main>
    </>
  );
}
