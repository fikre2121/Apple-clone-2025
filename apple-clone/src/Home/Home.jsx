import React from "react";
import Header from "../Conponents/Header/Header";
import Ipro16 from "../Conponents/Ipro16/Ipro16";
import Iphon16 from "../Conponents/Iphon16/Iphon16";
import Ipad from "../Conponents/Ipad/Ipad";
import Watch from "../Conponents/Watch/Watch";
import Airpods from "../Conponents/Airpods/Airpods";
import MacBookAir from "../Conponents/MacBook Air/MacBook Air";
import Footer from "../Conponents/Footer/Footer";
import Carousel from "../Conponents/Carousel/Carousel";
import { Routes, Route } from "react-router-dom";
import Lighout from "../Conponents/Lighout/Lighout";

export default function Home() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Lighout />}>
          <Route path="/" element={<Ipro16 />} />
          <Route path="iphone16" element={<Iphon16 />} />
          <Route path="watch" element={<Watch />} />
          <Route path="airpods" element={<Airpods />} />
          <Route path="macbook" element={<MacBookAir />} />
          <Route path="carousel" element={<Carousel />} />
          <Route path="ipad" element={<Ipad />} />
        </Route>
      </Routes>
    </div>
  );
}
