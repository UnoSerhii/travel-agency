// @ts-nocheck


import {SidebarComponent} from "@syncfusion/ej2-react-navigations";
import {useRef} from "react";
import {NavItems} from "./index";
import {Logo} from "./index";

const MobileSidebar = () => {
  const sidebarRef = useRef(null);

  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Logo/>
        <button onClick={() => sidebarRef.current?.toggle()}>
          <img src="/assets/icons/menu.svg" alt="Menu" className="size-[30px]"/>
        </button>
      </header>
      <SidebarComponent
        width={270}
        ref={sidebarRef}
        created={() => sidebarRef.current?.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="Over"
      >
        <NavItems closeSidebar={() => sidebarRef.current?.hide()}/>
      </SidebarComponent>
    </div>
  )
}
export default MobileSidebar
