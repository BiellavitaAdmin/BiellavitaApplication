import "./dashboard.css";
import TabOne from "./subcomponent/tabone";
import TabTwo from "./subcomponent/tabfour";
import TabThree from "./subcomponent/tabtwo";
import TabFour from "./subcomponent/tabfour";
export default function Admin() {
  return (
    <>
      <div className="dashboard-content">
        <div className="stats-tabs-container">
          <TabOne />
          <TabTwo />
          <TabThree />
          <TabFour />
        </div>
      </div>
    </>
  );
}
