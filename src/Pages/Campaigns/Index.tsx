import { Title } from "@mantine/core";
import Layout from "../../Shared/Layouts/Layout";
import PFButton from "../../Shared/Components/Button";

const Index = () => {
  return (
    <>
      <Title
        order={1} // h1
        sx={(theme) => ({
          boxShadow: theme.shadows.sm,
          color: theme.colors["pf-blue"][4],
        })}
      >
        This is a CAMPAIGN title
      </Title>
      <PFButton
        title="Create new Campaign"
        variant="filled"
        color="pink"
        uppercase
        size="xl"
        // radius="xl"
      ></PFButton>
    </>
  );
};

Index.layout = (page: any) => <Layout title="Campaigns" children={page} />;

export default Index;
