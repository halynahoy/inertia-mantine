import Layout from "./../../Shared/Layouts/Layout";

const Index = () => {
  return (
    <>
      <h1>Users</h1>
    </>
  );
};

Index.layout = (page: any) => <Layout title="Users" children={page} />;

export default Index;
