import {Link} from "react-router";

const Logo = () => {
  return (
    <Link to="/dashboard" className="flex items-center p-2 gap-3 group transition-all hover:opacity-80">
      <div className="p-2 bg-primary rounded-full shadow-md transition-transform duration-300 group-hover:scale-110">
        <img src="/assets/icons/logo.svg" alt="Logo" className="w-8 h-8"/>
      </div>
      <h1 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
        HelloWorld!
      </h1>
    </Link>
  )
}
export default Logo
