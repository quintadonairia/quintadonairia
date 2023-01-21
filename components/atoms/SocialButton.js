import {
  RiFacebookCircleFill,
  RiHomeWifiLine,
  RiInstagramLine,
} from "react-icons/ri";
import { TbBrandAirbnb } from "react-icons/tb";

const SocialButton = ({ href, theme, label, icon }) => {
  const themes = {
    instagram: "bg-gradient-to-r from-[#ff7a00] to-[#ff0069] text-white",
    facebook: "bg-[#1877f2] text-white",
    airbnb: "bg-[#ff5a5f] text-white",
    website: "bg-olive-500 text-white",
  };

  const icons = {
    instagram: <RiInstagramLine className="text-xl" />,
    facebook: <RiFacebookCircleFill className="text-xl" />,
    airbnb: <TbBrandAirbnb className="text-xl" />,
    website: <RiHomeWifiLine className="text-xl" />,
  };

  return (
    <a
      href={href}
      target="blank"
      className={`flex items-center gap-2 px-8 py-3 rounded font-semibold ${themes[theme]}`}
    >
      {icons[icon]}
      <span>{label}</span>
    </a>
  );
};

export default SocialButton;
