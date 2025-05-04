'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { searchBlogPosts } from '@/utils/search'
import Link from 'next/link'

const SearchResults = () => {
    const searchParams = useSearchParams()
    const query = searchParams.get('q') || ''
    const [results, setResults] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchResults = async () => {
            setIsLoading(true)
            const searchResults = await searchBlogPosts(query)
            setResults(searchResults)
            setIsLoading(false)
        }

        fetchResults()
    }, [query])

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold mb-4">Loading...</h1>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold mb-4">
                    Search Results for: {query}
                </h1>
                
                {results.length === 0 ? (
                    <p className="text-gray-600">No results found.</p>
                ) : (
                    <div className="grid gap-6">
                        {results.map((post) => (
                            <Link 
                                href={`/blogpost/${post.id}`} 
                                key={post.id}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            >
                                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                                <p className="text-gray-600 mb-4">{post.content.introduction}</p>
                                <div className="flex gap-2">
                                    {post.tags.map((tag: string) => (
                                        <span 
                                            key={tag}
                                            className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchResults