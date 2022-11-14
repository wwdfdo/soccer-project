import "./App.css";
// import Header from "./components/Header";
import VideoBg from "./components/VideoBg";
import { Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery";
import Layout from "./components/Layout";
import Roadmap from "./components/Roadmap";
import Worldbg from "./components/Worldbg";
import RoadmapTwo from "./components/RoadmapTwo";
import RoadmapThree from "./components/RoadmapThree";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<VideoBg />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/worldbg" element={<Worldbg />} />
          <Route path="/roadmapTwo" element={<RoadmapTwo />} />
          <Route path="/roadmapThree" element={<RoadmapThree />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
