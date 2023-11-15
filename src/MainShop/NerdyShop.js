import { QueryClient, QueryClientProvider } from "react-query";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Error } from "./Error";
import { HeaderBar } from "./HeaderBar";
import { Login } from "./Login";
import { Cart } from "./Cart";
import { Mypage } from "./Mypage";
import { Search } from "./Search";
import { BestItem } from "./BestItem";
import { NewItem } from "./NewItem";
import { Item } from "./Item";
import { Layout } from "./Layout";

// 글로벌 세팅 구현

const client = new QueryClient();
export const MyContext = createContext();

export function NerdyShop() {
  const [myGlobalState, setMyGlobalState] = useState(null);

  return (
    <>
      <QueryClientProvider client={client}>
        <MyContext.Provider value={{ myGlobalState, setMyGlobalState }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="bestItem" element={<BestItem />} />
                <Route path="newItem" element={<NewItem />} />
                <Route path="search" element={<Search />} />
                <Route path="login" element={<Login />} />
                <Route path="cart" element={<Cart />} />
                <Route path="member" element={<Mypage />} />
                <Route path="item" element={<Item />} />
                <Route path="*" element={<Error />} />
                <Route path="home" element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </MyContext.Provider>
      </QueryClientProvider>
    </>
  );
}
