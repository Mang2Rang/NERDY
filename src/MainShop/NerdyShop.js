import { QueryClient, QueryClientProvider } from "react-query";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Body/Home";
import { Error } from "./Body/Error";
import { Login } from "./Header/Login";
import { Cart } from "./Header/Cart";
import { Mypage } from "./Header/Mypage";
import { Search } from "./Header/Search";
import { Item } from "./Body/Item";
import { Layout } from "./Layout";
import { Shoes } from "./Header/Shoes";

import { Acc } from "./Header/Acc";
import { NewItem } from "./Header/NewItem";
import { BestItem } from "./Header/BestItem";
import { Ooutlet } from "./Header/Ooutlet";
import { Benefit } from "./Header/Benefit";
import { LookBook } from "./Header/LookBook";
import { Community } from "./Header/Community";
import { The8 } from "./Header/The8";
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
                <Route path="the8" element={<The8 />} />
                <Route path="bestItem" element={<BestItem />} />
                <Route path="newItem" element={<NewItem />} />
                <Route path="shoes" element={<Shoes />} />
                <Route path="acc" element={<Acc />} />
                <Route path="outlet" element={<Ooutlet />} />
                <Route path="benefit" element={<Benefit />} />
                <Route path="lookbook" element={<LookBook />} />
                <Route path="community" element={<Community />} />
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
