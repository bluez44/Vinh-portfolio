import logo from '../assets/logo/logo.jpg'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

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
        <a
          href="https://www.linkedin.com/in/quang-vinh-485331286/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/bluez44" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/vlqvinh.44" target="_blank">
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
}

export default Navbar