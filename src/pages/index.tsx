import Head from "next/head";
import Dashboard from "./dashboard/dashboard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Asset Alyze</title>
        <meta name="description" content="Asset Alyze" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </>
  );
}
