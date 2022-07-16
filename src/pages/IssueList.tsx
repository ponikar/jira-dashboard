import { Table, LoadingOverlay } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import React, { useEffect } from "react";
import { Layout } from "../components";
import { useIssues } from "../hooks/useIssues";

export const IssueList = () => {
  const { data, error, isError, isLoading } = useIssues();
  useEffect(() => {
    if (error && isError && !isLoading) {
      showNotification({
        title: "Could not fetch issues",
        message: "There was a problem fetching the issues. Please try again",
        color: "red",
      });
    }
  }, [error, isError, isLoading]);

  return (
    <Layout>
      <Table>
        <thead>
          <tr>
            <th>issue ID</th>
            <th>Summary</th>
            <th>Description</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {data?.issues.map((issue, index) => (
              <tr key={index}>
                <td> {issue.id} </td>
                <td> {issue.fields.summary} </td>
                <td> {issue.fields.description} </td>
                <td> <img src={issue.fields.priority.iconUrl} style={{ width: "25px", height: "25px" }} /> </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <LoadingOverlay visible={isLoading} />
    </Layout>
  );
};
