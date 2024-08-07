import Head from "next/head";
import { Russo_One, Roboto_Mono, Saira } from "next/font/google";

import Navbar from "../../components/Navbar";
import MainScreen from "../../components/MainScreen";
import DivisorListing from "../../components/DivisorListing/DivisorListing";
import AboutSection from "../../components/AboutSection";
import Howtobuy from "../../components/HowToBuy";
import Tokenomics from "../../components/Tokenomics";
import Footer from "../../components/Footer";

const row = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--Row",
});

const roboto = Saira({
  weight: "400",
  subsets: ["latin"],
  variable: "--Roboto",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>$MOGGED | ETH</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${roboto.variable} ${row.variable}`}>
        <Navbar name='MOGGED'/>
        <MainScreen name='MOGGED'/>
        <DivisorListing />
        <AboutSection name='MOGGED'/>
        <Howtobuy />
        <Tokenomics />
        <Footer />
      </main>

      <style jsx>{`
        main {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          background-color: #000000;
        }
      `}</style>
    </>
  );
}
