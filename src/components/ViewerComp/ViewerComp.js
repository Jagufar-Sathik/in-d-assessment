import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";

const ViewerComp = (props) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        flex: "0 0 75%",
        height: 800,
      }}
    >
      <Viewer fileUrl="in-d-assessment/Contract-Breach.pdf" plugins={[props.plugins]} />
    </div>
  );
};

export default ViewerComp;
