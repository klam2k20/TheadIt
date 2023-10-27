"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IProvidersProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const Providers: React.FC<IProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
