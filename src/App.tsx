import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IssueList, NewIssue } from "./pages";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<NewIssue />} path="/new" />
          <Route element={<IssueList />} path="/issues" />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

const Home = () => {
  return <h2>Home!</h2>;
};
