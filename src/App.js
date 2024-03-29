import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ComponentA,
  ComponentB,
  ComponentC,
  ComponentD,
} from "./test-query/Components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QueryClientProvider client={new QueryClient()}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 32,
            }}
          >
            <ComponentA />
            <ComponentB />
            <ComponentC />
            <ComponentD />
          </div>
        </QueryClientProvider>
      </header>
    </div>
  );
}

export default App;
