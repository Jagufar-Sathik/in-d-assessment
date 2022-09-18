import { Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import RenderToolbar from "./components/RenderToolbar/RenderToolbar";
import ViewerComp from "./components/ViewerComp/ViewerComp";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    RenderToolbar,
  });
  const searchInstance =
    defaultLayoutPluginInstance.toolbarPluginInstance.searchPluginInstance;
  return (
    <div className="App">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
        <div style={{ display: "flex" }}>
          <Sidebar search={searchInstance} />
          <ViewerComp plugins={defaultLayoutPluginInstance} />
        </div>
      </Worker>
    </div>
  );
}

export default App;
