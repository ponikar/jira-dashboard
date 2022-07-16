import React from "react";
import {
  AppShell,
  Navbar,
  Aside,
  Footer,
  Box,
  createStyles,
  Text,
} from "@mantine/core";
import { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <Header />
      <Box className={classes.main}>
        <Sidebar />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    height: "100%",
  },
  main: {
    display: "grid",
    gridTemplateColumns: "15% 80%",
    height: "100%",
  },
}));
