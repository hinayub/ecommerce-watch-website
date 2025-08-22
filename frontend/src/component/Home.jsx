import React, { useState, useEffect } from "react";
import axios from "axios";
import AdCard from "./AdCard";

const Home = () => {
  const [productinfo, setProductInfo] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/product/productdata/")
      .then((res) => {
        console.timeLog(`this is what ${res.data[0]["color_name"]}`);
        setProductInfo(res.data);
      })
      .catch((error) => console.log(`problem is${error}`));
  }, []);
  return (
    <>
      <div className="flex flex-col sm:flex-row mt-20 gap-4 px-10 justify-center">
        {productinfo.map((item, key) => (
          <AdCard product={item} key={key} />
        ))}
      </div>
    </>
  );
};

export default Home;
