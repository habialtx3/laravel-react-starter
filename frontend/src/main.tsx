import { QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { queryClient } from "./lib/queryClient";

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>
