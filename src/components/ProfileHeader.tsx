
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileHeaderProps {
  name: string;
  imageUrl: string;
  title?: string;
}

const ProfileHeader = ({ name, imageUrl, title = "Senior Site Reliability Engineer II" }: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col items-center text-center animate-fade-up">
      <Avatar className="h-32 w-32 mb-4 border-4 border-white/20">
        <AvatarImage src={imageUrl} alt={name} />
        <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <h1 className="text-4xl font-bold">{name}</h1>
      {title && <p className="text-lg text-white/80 mt-2">{title}</p>}
    </div>
  );
};

export default ProfileHeader;
