//import { SocialLink } from "../../types/SocialLinks";

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
  color?: string;
}

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const useSocialLinks: ReadonlyArray<SocialLink> = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100023347819321",
    icon: <FaFacebookF />,
    color: "#4267B2",
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
    color: "#1DA1F2",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tritacle/",
    icon: <FaLinkedinIn />,
    color: "#0077B5",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/tri_le4/",
    icon: <FaInstagram />,
    color: "#C13584",
  },
  {
    name: "GitHub",
    url: "https://github.com/TriTacLe",
    icon: <FaGithub />,
    //color: "#333",
  },
];

export default useSocialLinks;
