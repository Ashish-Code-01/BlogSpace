import Link from 'next/link';

type BlogPost = {
    id: string;
    title: string;
    author: string;
    readingTime: number;
    content: {
        introduction: string;
    };
    tags: string[];
};

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
    return (
        <Link
            href={`/blogpost/${post.id}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
        >
            <article className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                </h3>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                    <span className="mr-4">By {post.author}</span>
                    <span>{post.readingTime} min read</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.content.introduction}
                </p>
                <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag: string) => (
                        <span
                            key={tag}
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </article>
        </Link>
    );
};

export default BlogCard;