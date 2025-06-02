import {NavLink, useLoaderData, useNavigate} from "react-router";
import {sidebarItems} from "~/constants";
import {cn} from "../lib/utils";
import {Logo} from "./index";
import {logoutUser} from "~/appwrite/auth";

interface NavItemsProps {
  closeSidebar?: () => void;
}

const NavItems = ({closeSidebar}: NavItemsProps) => {
  const user = useLoaderData();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate('/sign-in');
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
          <img src={user?.imageUrl || "/assets/images/david.webp"} alt={user?.name || 'Guest'}/>
          <article>
            <h2>{user?.name || 'Guest'}</h2>
            <p>{user?.email || 'guest@example.com'}</p>
          </article>
          <button onClick={handleLogout} className="cursor-pointer">
            <img src="/assets/icons/logout.svg" alt="Logout" className="size-[30px]"/>
          </button>
        </footer>
      </div>
    </section>
  )
}
export default NavItems
