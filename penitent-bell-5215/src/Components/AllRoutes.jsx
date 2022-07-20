import { Route, Routes } from "react-router-dom";
import Man from "./Categories/Man"
import Women from "./Categories/Women"
import Girls from "./Categories/Girl"
import Boys from "./Categories/Boy"
import Navbar from "./Navbar";

export default function AllRoutes(){

    return (
        <Routes>
          {/* <Route path="/man" element={<Man />} /> */}
          <Route path="/" element={<Navbar />} />
          <Route path="/man" element={<Man />} />
          <Route path="/women" element={<Women />} />
          <Route path="/girl" element={<Girls />} />
          <Route path="/boys" element={<Boys />} />
          </Routes>
      );
}