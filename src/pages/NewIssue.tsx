import React, { useEffect } from "react";
import { Button, createStyles, TextInput, Title } from "@mantine/core";
import { useCreateIssue } from "../hooks/useCreateIssue";
import { showNotification } from "@mantine/notifications";
import { useQueryClient } from "react-query";
import { QUERY_KEY } from "../constants/query";
import { Layout } from "../components";

export const NEW_ISSUE_INITIAL_STATE = {
  summary: "",
  description: "",
};

export const NewIssue = () => {
  const [issue, setIssue] = React.useState(NEW_ISSUE_INITIAL_STATE);
  const queryClient = useQueryClient();
  const mutation = useCreateIssue();

  const { classes } = useStyles();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIssue({ ...issue, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      setIssue(NEW_ISSUE_INITIAL_STATE);
      showNotification({
        message: "Issue created successfully",
        color: "green",
      });
      // invalidating issues
      queryClient.invalidateQueries(QUERY_KEY.ISSUES);
    }
  }, [mutation.isSuccess]);

  console.log( "ERROR",mutation.error, mutation.isError);

  useEffect(() => {
    if (mutation.error && mutation.isError) {
      showNotification({
        title: "Something went wrong",
        message: "There was a problem creating the issue. Please try again",
        color: "red",
      });
    }
  }, [mutation.error, mutation.isError]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("ISSUE", issue)
    mutation.mutate(issue);
  };

  return (
    <Layout>
      <form className={classes.container} onSubmit={onSubmit}>
        <Title>Create an Jira Issue</Title>
        <TextInput
          placeholder="API is not responding"
          label="Summary of issue"
          required
          onChange={onChange}
          name="summary"
          value={issue.summary}
          my="lg"
        />
        <TextInput
          label="Describe an issue"
          required
          my="lg"
          onChange={onChange}
          value={issue.description}
          name="description"
          placeholder="API is down since 7 morning."
        />
        <Button
          type="submit"
          my="xs"
          loading={mutation.isLoading}
          title="Create an issue"
        >
          Create Issue
        </Button>
      </form>
    </Layout>
  );
};

const useStyles = createStyles((theme) => ({
  container: {
    width: "60%",
    margin: "40px auto",
    border: `1px solid ${theme.colors.gray[3]}`,
    padding: "50px",
    background: theme.colors.white,
  },
}));
