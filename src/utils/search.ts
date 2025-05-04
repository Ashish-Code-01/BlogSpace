export const searchBlogPosts = async (query: string) => {
    try {
        const blogPosts = [
            require('../components/blogPostJSON/how-to-learn-javascript.json'),
            require('../components/blogPostJSON/react-fundamentals-guide.json'),
            require('../components/blogPostJSON/mastering-css-grid.json'),
            require('../components/blogPostJSON/typescript-essentials.json')
        ];

        const searchTerm = query.toLowerCase();
        return blogPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) ||
            post.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm)) ||
            post.content.introduction.toLowerCase().includes(searchTerm)
        );
    } catch (error) {
        console.error('Error searching blog posts:', error);
        return [];
    }
}