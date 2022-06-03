import Layout from "./../../Shared/Layouts/Layout";

const Index = () => {
  return (
    <>
      <h1>Accounts</h1>
    </>
  );
};

Index.layout = (page: any) => <Layout title="Accounts" children={page} />;

export default Index;
