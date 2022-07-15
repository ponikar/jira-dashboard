import { AppShell, Navbar, Aside, Footer } from "@mantine/core";
import { PropsWithChildren } from "react";
import { Header } from "./Header"

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
     <Header />
    {children}
    </>
  );
};
