
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
}

const ProjectCard = ({ title, description, slug }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${slug}`} className="block hover:scale-[1.01] transition-transform">
      <Card className="h-full border border-gray-200 hover:border-primary/20 transition-colors">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{description}</p>
          <div className="mt-4 text-primary font-medium">View project →</div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
