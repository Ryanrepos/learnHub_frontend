import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Global sozlamalar bilan QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Brauzer oynasiga qaytganda qayta so'rov yubormaslik
      retry: 1, // Xato bo'lsa faqat 1 marta qayta urinish
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>  
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;