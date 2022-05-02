import type { NextPage } from "next";
import { Layout } from "../Components/Layout";

const Home: NextPage = () => {
  return (
    <div className="">
      <Layout title={"home"}>
        <p className="text-4xl">Welcome to Nextjs</p>
      </Layout>
    </div>
  );
};

export default Home;
