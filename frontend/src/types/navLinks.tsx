import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faFolder } from "@fortawesome/free-solid-svg-icons";

interface NavLink {
  path: string;
  label: string;
  icon: JSX.Element;
}

const navLinks: NavLink[] = [
  { path: "/", label: "Home", icon: <FontAwesomeIcon icon={faHome} /> },
  {
    path: "/about",
    label: "About me",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    path: "/projects",
    label: "Projects",
    icon: <FontAwesomeIcon icon={faFolder} />,
  },
];

export default navLinks;
