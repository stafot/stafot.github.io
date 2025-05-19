
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BlogPostCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const BlogPostCard = ({ title, date, excerpt, slug }: BlogPostCardProps) => {
  return (
    <Link to={`/blog/${slug}`} className="block hover:scale-[1.01] transition-transform">
      <Card className="h-full border border-gray-200 hover:border-primary/20 transition-colors">
        <CardHeader className="pb-2">
          <div className="text-sm text-muted-foreground mb-2">{date}</div>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
          <div className="mt-4 text-primary font-medium">Read more →</div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
