
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, Rss } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  imageUrl: string;
}

const ProfileHeader = ({ name, imageUrl }: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col items-center py-12 animate-fade-in">
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white mb-4">
        <img 
          src={imageUrl} 
          alt={`${name}'s profile`} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-wider">{`[ ${name} ]`}</h1>
      
      <div className="flex space-x-4 mt-4">
        <SocialIcon Icon={Mail} href="mailto:contact@example.com" label="Email" />
        <SocialIcon Icon={Github} href="https://github.com/username" label="GitHub" />
        <SocialIcon Icon={Linkedin} href="https://linkedin.com/in/username" label="LinkedIn" />
        <SocialIcon Icon={Rss} href="/rss.xml" label="RSS Feed" />
      </div>
    </div>
  );
};

interface SocialIconProps {
  Icon: React.ElementType;
  href: string;
  label: string;
}

const SocialIcon = ({ Icon, href, label }: SocialIconProps) => {
  return (
    <Link 
      to={href.startsWith('http') ? '' : href} 
      href={href.startsWith('http') ? href : undefined}
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
      className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-blog-purple-dark transition-all duration-300"
      aria-label={label}
    >
      <Icon size={20} />
    </Link>
  );
};

export default ProfileHeader;
