'use client'

import React, { useState, useEffect } from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaRegBookmark, FaBookmark } from 'react-icons/fa'

    // Define the correct props type for Next.js 13+ pages
    type BlogPostProps = {
        params: {
            slug: string;
        };
        searchParams?: { [key: string]: string | string[] | undefined
    };
}

const BlogPost = ({ params }: BlogPostProps) => {
    const [blogData, setBlogData] = useState<any>(null)
    const [isBookmarked, setIsBookmarked] = useState(false)
    const [likes, setLikes] = useState(0)
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState<Array<{ author: string; text: string; date: string }>>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [readingTime, setReadingTime] = useState(0)

    useEffect(() => {
        const fetchBlogPost = async () => {
            setIsLoading(true)
            try {
                const post = await import(`../../../components/blogPostJSON/${params.slug}.json`)
                setBlogData(post.default)

                const words = post.default.content.introduction.split(' ').length +
                    post.default.content.sections.reduce((acc: number, section: any) =>
                        acc + section.content.split(' ').length, 0)
                setReadingTime(Math.ceil(words / 200))
            } catch (err) {
                console.error('Error loading blog post:', err)
                setError('Failed to load blog post')
            } finally {
                setIsLoading(false)
            }
        }

        fetchBlogPost()
    }, [params.slug])

    const handleBookmark = () => {
        try {
            setIsBookmarked(!isBookmarked)
            // Add localStorage persistence
            localStorage.setItem(`bookmark-${params.slug}`, (!isBookmarked).toString())
        } catch (err) {
            console.error('Error toggling bookmark:', err)
        }
    }

    const handleLike = () => {
        try {
            setLikes(prev => prev + 1)
        } catch (err) {
            console.error('Error updating likes:', err)
        }
    }

    const handleCommentSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!comment.trim()) return

        setIsLoading(true)
        setError(null)

        try {
            // Add your API call here
            setComments(prev => [...prev, {
                author: 'Guest User',
                text: comment,
                date: new Date().toLocaleDateString()
            }])
            setComment('')
        } catch (err) {
            setError('Failed to post comment. Please try again.')
            console.error('Error posting comment:', err)
        } finally {
            setIsLoading(false)
        }
    }

    if (!blogData) {
        return <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 text-center">
                Loading...
            </div>
        </div>
    }

    return (
        <article className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                    {/* Header Section */}
                    <header className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            {blogData.title}
                        </h1>

                        <div className="flex items-center justify-between text-gray-600 mb-4">
                            <div className="flex items-center space-x-4">
                                <span>Author: {blogData.author}</span>
                                <span>Published: {blogData.date}</span>
                                <span>{readingTime} min read</span>
                            </div>
                            <button
                                onClick={handleBookmark}
                                className="text-blue-600 hover:text-blue-700"
                            >
                                {isBookmarked ? <FaBookmark size={20} /> : <FaRegBookmark size={20} />}
                            </button>
                        </div>
                    </header>

                    {/* Content Section */}
                    <div className="prose prose-lg max-w-none mb-8">
                        {/* Introduction */}
                        <p className="text-gray-700 text-lg mb-6">
                            {blogData.content.introduction}
                        </p>

                        {/* Main Content Sections */}
                        {blogData.content.sections.map((section: any, index: number) => (
                            <div key={index} className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                    {section.title}
                                </h2>
                                <p className="text-gray-700">
                                    {section.content}
                                </p>
                            </div>
                        ))}

                        {/* Conclusion */}
                        {blogData.content.conclusion && (
                            <div className="mt-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                    Conclusion
                                </h2>
                                <p className="text-gray-700">
                                    {blogData.content.conclusion}
                                </p>
                            </div>
                        )}

                        {/* Resources Section */}
                        {blogData.resources && blogData.resources.length > 0 && (
                            <div className="mt-8">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                    Additional Resources
                                </h2>
                                <ul className="list-disc pl-5">
                                    {blogData.resources.map((resource: any, index: number) => (
                                        <li key={index}>
                                            <a
                                                href={resource.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                {resource.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Interaction Section */}
                    <div className="border-t border-b py-4 mb-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={handleLike}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
                                >
                                    <span>❤️</span>
                                    <span>{likes}</span>
                                </button>
                            </div>
                            <div className="flex space-x-4">
                                <button className="text-blue-600 hover:text-blue-700">
                                    <FaFacebookF size={20} />
                                </button>
                                <button className="text-blue-600 hover:text-blue-700">
                                    <FaTwitter size={20} />
                                </button>
                                <button className="text-blue-600 hover:text-blue-700">
                                    <FaLinkedinIn size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Comments Section */}
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold mb-4">Comments</h3>

                        <form onSubmit={handleCommentSubmit} className="mb-6">
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                rows={3}
                                placeholder="Add a comment..."
                            />
                            <button
                                type="submit"
                                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Posting...' : 'Post Comment'}
                            </button>
                        </form>

                        {error && <p className="text-red-500 mb-4">{error}</p>}

                        <div className="space-y-4">
                            {comments.map((comment, index) => (
                                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold">{comment.author}</span>
                                        <span className="text-gray-500">{comment.date}</span>
                                    </div>
                                    <p className="text-gray-700">{comment.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default BlogPost