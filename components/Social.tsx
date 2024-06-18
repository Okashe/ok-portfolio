import Link from 'next/link';

import {FaGithub, FaLinkedin, FaYoutube, FaTwitter} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub/>,  path:""},
    {icon:<FaLinkedin/>, path:""},
    {icon: <FaYoutube/>, path:""},
    {icon:<FaTwitter/>,  path:""}
]

type StyleProps = {
  containerStyles: string; // Specify the correct type for containerStyles
  iconStyles: string; // Specify the correct type for iconStyles
};
const Social = ({containerStyles, iconStyles}: StyleProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=>{
        return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
      })}
    </div>
  )
}

export default Social
