import { useMutation } from "react-query";
import { JIRA_API_ENDPOINT, JIRA_API_TOKEN, JIRA_PROJECT_KEY } from "../constants/api";
import { QUERY_KEY } from "../constants/query";
import { NEW_ISSUE_INITIAL_STATE } from "../pages/NewIssue";

export const useCreateIssue = () => {
  return useMutation(QUERY_KEY.CREATE_ISSUE, async (data: typeof NEW_ISSUE_INITIAL_STATE) => {

    console.log("DATA", data);
    const res = await fetch(`http://localhost:8080/issues`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await res.json();
  });
};
