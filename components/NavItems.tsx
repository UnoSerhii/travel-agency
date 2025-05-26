import {NavLink} from "react-router";
import {sidebarItems} from "~/constants";
import {cn} from "../lib/utils";
import {Logo} from "./index";

interface NavItemsProps {
  closeSidebar?: () => void;
}

const NavItems = ({closeSidebar}: NavItemsProps) => {
  const user = {
    name: "Serhii",
    email: "serhii@.com",
    imageUrl: "/assets/images/david.webp",
  }
  return (
    <section className="nav-items">
      <Logo/>

      <div className="container">
        <nav>
          {sidebarItems.map(({id, href, icon, label}) => (
            <NavLink to={href} key={id} onClick={closeSidebar}>
              {({isActive}: { isActive: boolean }) => (
                <div className={cn('group nav-item', {
                  'bg-primary-100 !text-white': isActive
                })}>
                  <img src={icon} alt={label}
                       className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? 'brightness-0 invert' : 'text-dark-200'}`}/>
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <footer className="nav-footer">
          <img src={user?.imageUrl || "/assets/images/david.webp"} alt={user?.name || 'Serhii'}/>
          <article>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </article>
          <button onClick={() => {
            console.log("clicked: logout");
          }}
                  className="cursor-pointer">
            <img src="/assets/icons/logout.svg" alt="Logout" className="size-[30px]"/>
          </button>
        </footer>
      </div>
    </section>
  )
}
export default NavItems
