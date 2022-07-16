import React from "react";
import { Aside, Box, createStyles, Text } from "@mantine/core";
import { Edit, Icon, List } from "react-feather";
import { Link, useLocation } from "react-router-dom";





export const Sidebar = () => {
    const { classes } = useStyles();
    return  <Aside className={classes.sidebar}>
    <Text className={classes.title} size="lg">Menu</Text>
    <Option to="/new" title="New Issue" Icon={Edit} />
    <Option to="/issues" title="All Issues" Icon={List} />
  </Aside>
}   


const Option = ({ Icon, title, to }: { Icon: Icon, title: string, to: string }) => {

    const location = useLocation();
    const { classes } = useStyles();

    return <Link style={{ color: location.pathname === to ? "blue" : "black" }}  to={to} className={classes.option}>
    <Icon size={18} />
    <Text>{title}</Text>
</Link>

}

const useStyles = createStyles(theme => ({
    sidebar: {
      height: "100%",
      borderRight: `1px solid ${theme.colors.gray[4]}`,
      position: "sticky",
      top: 0,
    },
    option: {
        display: "flex",
        alignItems: "center",
        padding: "8px 16px",
        gap: "10px"
    },
    title: {
     padding: "16px",
     marginBottom: "20px",
     fontSize: "20px"
    }
  }));
  