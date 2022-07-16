import { useQuery } from "react-query";
import { JIRA_API_ENDPOINT, JIRA_API_TOKEN, JIRA_PROJECT_KEY } from "../constants/api";
import { QUERY_KEY } from "../constants/query";
import type { IssueResponse } from "../../@types/issues";

export const useIssues = () => {
  return useQuery<IssueResponse>(QUERY_KEY.ISSUES, async () => {
    const res = await fetch(
        "http://localhost:8080/issues",
      );

    return await res.json();
});


}