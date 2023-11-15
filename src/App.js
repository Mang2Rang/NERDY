import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./MainShop/Home";
import { createGlobalStyle } from "styled-components";
import { BestItem } from "./MainShop/BestItem";
import { NerdyShop } from "./MainShop/NerdyShop";
import { Item } from "./MainShop/Item";

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
        <NerdyShop />
      </QueryClientProvider>
    </>
  );
}
