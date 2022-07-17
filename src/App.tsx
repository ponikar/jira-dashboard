import React from "react";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IssueList, NewIssue } from "./pages";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <NotificationsProvider>
          <Router>
            <Routes>
              <Route element={<IssueList />} path="/" />
              <Route element={<NewIssue />} path="/new" />
            </Routes>
          </Router>
        </NotificationsProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;

const Home = () => {
  return <h2>Home!</h2>;
};
