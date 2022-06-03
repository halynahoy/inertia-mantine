import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import {
  createStyles,
  Anchor,
  AppShell,
  Avatar,
  Group,
  Header,
  Image,
  Menu,
  Navbar,
  Text,
  UnstyledButton,
  Box,
} from "@mantine/core";
import { IoGlobeOutline, IoPeopleOutline, IoStarSharp } from "react-icons/io5";
import { MdExpandMore, MdOutlineCampaign } from "react-icons/md";
import { Logout, Settings } from "tabler-icons-react";
import logoHorizontalWhite from "./../../images/PathFactoryWhite.png";

const useStyles = createStyles((theme) => ({
  link: {
    display: "block",
    color: theme.colors.gray[7],
    fontWeight: 300,
    borderLeft: "2px solid transparent",
    "&:hover": {
      color: theme.colors["pf-blue"][4],
      textDecoration: "none",
      backgroundColor: theme.colors.gray[1],
    },
  },
  active: {
    fontWeight: 500,
    color: theme.colors["pf-blue"][0],
    backgroundColor: theme.colors["pf-blue"][4],
    borderLeft: `5px solid ${theme.colors.cyan[3]}`,
  },
  nestedLink: { paddingLeft: 26, color: theme.colors.gray[6] },
}));

interface Props {
  title: string;
  children: React.ReactNode;
}

type LinkedItem = {
  label: String;
  path: String;
  icon: React.ReactNode;
  active: Boolean;
  links?: Array<Object>;
};

type LinkTypes = {
  items: Array<LinkedItem>;
};

export default function Layout({ children }: Props): JSX.Element {
  const { flash, errors, account, contents }: any = usePage().props;
  const user = {
    name: "Best Dog",
    image:
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2568&q=80",
  };
  const { url, component } = usePage();
  const { classes, theme, cx } = useStyles();

  const linksData: Array<LinkTypes> = [
    {
      items: [
        {
          label: "ACCOUNTS",
          path: "/accounts",
          icon: <IoGlobeOutline />,
          active: component.startsWith("Accounts/"),
        },
        {
          label: "USERS",
          path: "/users",
          icon: <IoPeopleOutline />,
          active: component.startsWith("Users/"),
        },
        {
          label: "CAMPAIGNS",
          path: "/campaigns",
          icon: <MdOutlineCampaign />,
          active: component.startsWith("Campaigns/"),
        },
        {
          label: "PRODUCTS",
          path: "/users",
          icon: <IoStarSharp />,
          active: component.startsWith("Products/"),
          links: [
            {
              label: "Target",
              path: "/target",
              active: component.startsWith("Target/"),
            },
            {
              label: "Recommend",
              path: "/Recommend",
              active: component.startsWith("Recommend/"),
            },
            {
              label: "Explore",
              path: "/Explore",
              active: component.startsWith("Explore/"),
            },
            {
              label: "Microsite",
              path: "/Microsite",
              active: component.startsWith("Microsite"),
            },
          ],
        },
      ],
    },
  ];

  const links: React.ReactNode = linksData.map(
    (linkGroup: LinkTypes, index: number) => (
      <React.Fragment key={index}>
        {linkGroup.items.map((link: LinkedItem, index: number) => (
          <React.Fragment key={index}>
            <Anchor
              component={Link}
              href={link.path}
              className={cx(classes.link, {
                [classes.active]: link.active,
              })}
            >
              <Group spacing="sm" px="md" py={8}>
                {link.icon}
                <Text size="md">{link.label}</Text>
              </Group>
            </Anchor>
            {link.links &&
              link.links.map((nestedLink: any, index: any) => (
                <Anchor
                  key={index}
                  component={Link}
                  href={nestedLink.path}
                  className={cx(classes.link, classes.nestedLink, {
                    [classes.active]: nestedLink.active,
                  })}
                >
                  <Group spacing="xs" px="md" py={8}>
                    <Text size="md">{nestedLink.label}</Text>
                  </Group>
                </Anchor>
              ))}
          </React.Fragment>
        ))}
      </React.Fragment>
    )
  );

  return (
    <AppShell
      fixed
      header={
        <Header height={63}>
          <Group
            py="sm"
            px="md"
            position="apart"
            sx={(theme) => ({
              height: "100%",
              backgroundColor: theme.colors["pf-blue"][5],
              boxShadow: theme.shadows.sm,
            })}
          >
            <Image src={logoHorizontalWhite} mr="md" height="42px" />
            <Menu
              mt={5}
              size={260}
              placement="end"
              transition="pop-top-right"
              control={
                <UnstyledButton>
                  <Group spacing={8}>
                    <Avatar
                      src={user.image}
                      alt={user.name}
                      radius="xl"
                      size={32}
                    />
                    <Text
                      weight={400}
                      size="sm"
                      sx={{
                        lineHeight: 1,
                        color: theme.colors["pf-blue"][0],
                        fontWeight: 300,
                      }}
                      mr={2}
                    >
                      {user.name}
                    </Text>
                    <MdExpandMore
                      size={15}
                      color={theme.colors["pf-blue"][1]}
                    />
                  </Group>
                </UnstyledButton>
              }
            >
              <Menu.Item icon={<Settings size={14} />}>
                Account settings
              </Menu.Item>
              <Menu.Item icon={<Logout size={14} />}>Logout</Menu.Item>
            </Menu>
          </Group>
        </Header>
      }
      navbar={
        <Navbar
          width={{ sm: 280 }}
          py="sm"
          sx={(theme) => ({
            backgroundColor: theme.colors.gray[0],
          })}
        >
          <Navbar.Section grow>{links}</Navbar.Section>
        </Navbar>
      }
    >
      <Box py={8}>{children}</Box>
    </AppShell>
  );
}
