import SafireTable from "@/components/Table/table";
import TopBanner from "@/components/TopBanner";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Safire - Products</title>
      </Head>
      <div>
        <TopBanner
          title="Safire"
          description="Decentralized insurance platform that providing flexible conditions on-chain"
          isCreateInsurance={false}
        />
        <SafireTable />
      </div>
    </>
  );
}
