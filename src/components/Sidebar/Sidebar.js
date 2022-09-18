import { apiData } from "./apiData";
import "./Sidebar.css";

const Sidebar = ({search}) => {
  const hilit = (keyword) => {
    search.highlight(keyword);
    search.jumpToNextMatch()
  };
  return (
    <div className="Sidebar">
      <h3>{apiData.response.label}</h3>
      {apiData.response.values.map((topic,index) => (
        <button key={topic.value} onClick={() => hilit(topic.value)}>
          {index+1}. {topic.value}
        </button>
      ))}
    </div>
  );
};
export default Sidebar;
