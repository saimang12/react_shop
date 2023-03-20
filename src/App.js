import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Layout from "./Layout";
import Nav from "./pages/Nav";
import List from "./shop/List";
import ListAll from "./shop/ListAll";


const App = () => {
    // 데이터 가져오기 ... state에 배열(쇼핑몰데이터)넣기
    const [shopData, setShopData] = useState([]);
    // 데이터 불러오는 함수 만들기 ...
    const getData = async () => {
        const url = 'https://desipossa.github.io/shop_cra/assets/data.json'
        // 데이터 가져오기 ...
        const r = await axios.get(url);
        setShopData(r.data);
    }
    // 데이터 한번만 불러오기 ...
    useEffect(() => {
        getData();
    }, []);

    console.log(shopData);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<List />} />
                <Route path="/all" element={<ListAll shopData={shopData} />} />
            </Route>
        </Routes>
    )
}

export default App;