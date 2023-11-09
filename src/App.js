import { QueryClient, QueryClientProvider } from "react-query";
import { LayoutApp } from "./MainShop/LayoutApp";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin : 0;
    padding : 0;
    box-sizing: border-box;
  }
`;

const client = new QueryClient();

export default function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={client}>
        <LayoutApp />
      </QueryClientProvider>
    </>
  );
}
