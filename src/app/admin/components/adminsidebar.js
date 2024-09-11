import SidebarFirstItem from "./subcomponents/sidebarfirstitem";
import SidebarSecondItem from "./subcomponents/sidebarseconditem";
import SidebarThirdItem from "./subcomponents/sidebarthirditem";
import SidebarFourthItem from "./subcomponents/sidebarfourthitem";
import SidebarFifthItem from "./subcomponents/sidebarfifthitem";
export default function AdminSidebar() {
  return (
    <>
      <aside className="sidebar">
        <nav className="dashlist-container">
          <ul className="list-dash-item">
            <SidebarFirstItem />
            <SidebarSecondItem />
            <SidebarThirdItem />
            <SidebarFourthItem />
            <SidebarFifthItem />
          </ul>
        </nav>
      </aside>
    </>
  );
}
