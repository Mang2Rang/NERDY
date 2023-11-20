import { QueryClient, QueryClientProvider } from "react-query";
<<<<<<< HEAD
import { createGlobalStyle } from "styled-components";
import { NerdyShop } from "./MainShop/NerdyShop";
=======
import { Home } from "./MainShop/Body/Home";
import { createGlobalStyle } from "styled-components";
import { BestItem } from "./MainShop/Header/BestItem";
import { NerdyShop } from "./MainShop/NerdyShop";
import { Item } from "./MainShop/Body/Item";
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
  * {
    margin : 0;
    padding : 0;
<<<<<<< HEAD
    box-sizing: border-box;
    font-family: Pretendard-Regular;
=======
    box-sizing: border-box;    
>>>>>>> 28c6aaf949b747dc229a435948e802044af9e084
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
