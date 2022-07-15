import { createStyles, Navbar, Box } from "@mantine/core"
import { Bell } from "react-feather"

const useStyles = createStyles((theme) => ({
    container: {
        padding: theme.spacing.lg,
        borderBottom: `1px solid ${theme.colors.gray[4]}`,
        height: "50px",
        display: "flex",
        alignItems: 'center',
        flexDirection: "row"
    },
    header: {
        fontSize: theme.fontSizes.lg
    },

    options: {
        marginLeft: "auto"
    },
    icons: {
        color: theme.colors.gray[6],
        cursor: "pointer",
    },
    badge: {
        backgroundColor: theme.colors.blue[6],
        color: "#fff",
        width: "18px",
        height: "18px",
        borderRadius: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: theme.fontSizes.xs,
        position: "absolute",
        top: -8,
        right: -8,
    }
}))



export const Header = () => {
    const { classes } = useStyles();
    return <Navbar className={classes.container}>
        <Navbar.Section className={classes.header}>JiraBoard</Navbar.Section>

        <Navbar.Section className={classes.options}>
            <Box style={{ position: "relative" }}>
            <Box className={classes.badge}>2</Box>
            <Bell className={classes.icons} size={18} />
            </Box>
        </Navbar.Section>
    </Navbar>
}