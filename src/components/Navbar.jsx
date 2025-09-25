import logo from "../assets/logo/logo.jpg";
import SocialList from "./ui/socialList";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-20 h-20 rounded-full object-cover object-top"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <SocialList />
      </div>
    </nav>
  );
}

export default Navbar;
