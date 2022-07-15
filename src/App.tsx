import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";


const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <Router>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </Router>
    </QueryClientProvider>
  );
}

export default App;

const Home = () => {
  return <h2>Home!</h2>;
};
