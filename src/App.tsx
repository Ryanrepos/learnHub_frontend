import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif;
    }
`;

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
   <>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>  
      <RouterProvider router={router} />
    </QueryClientProvider>
   </>
  );
};

export default App;