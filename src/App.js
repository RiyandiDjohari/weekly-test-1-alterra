import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tabs from "./components/Tabs";
// Tab Component
import TabGit from "./components/Tab/Git";
import TabUIUX from "./components/Tab/UIUX";
import TabFigma from "./components/Tab/Figma";
import TabHTML from "./components/Tab/HTML";
import TabCSS from "./components/Tab/CSS";
import TabBootstrap from "./components/Tab/Bootstrap";
import TabJavascript from "./components/Tab/Javascript";
import TabCleanCode from "./components/Tab/CleanCode";

function App() {
  return (
    <BrowserRouter>
      <Tabs />
      <div className="App">
        <Routes>
          <Route path="/" />
          <Route path="git" element={<TabGit />} />
          <Route path="uiux" element={<TabUIUX />} />
          <Route path="figma" element={<TabFigma />} />
          <Route path="html" element={<TabHTML />} />
          <Route path="css" element={<TabCSS />} />
          <Route path="bootstrap" element={<TabBootstrap />} />
          <Route path="javascript" element={<TabJavascript />} />
          <Route path="clean-code" element={<TabCleanCode />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
