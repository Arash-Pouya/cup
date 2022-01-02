import React from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Social">
      <SocialMediaIconsReact borderColor="rgba(12,255,6,0)" borderWidth="5" borderStyle="solid" icon="linkedin" iconSize="5" roundness="30%" url="" size="30" />
      <SocialMediaIconsReact borderColor="rgba(12,255,6,0)" borderWidth="5" borderStyle="solid" icon="whatsapp" iconSize="5" roundness="30%" url="" size="30" />
      <SocialMediaIconsReact borderColor="rgba(12,255,6,0)" borderWidth="5" borderStyle="solid" icon="mail" iconSize="5" roundness="30%" url="" size="30" />
    </div>
  );
};

export default Footer;
