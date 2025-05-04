'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchBar = () => {
    const [query, setQuery] = useState('')
    const router = useRouter()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (query.trim()) {
            router.push(`/blog/search?q=${encodeURIComponent(query)}`)
        }
    }

    return (
        <form onSubmit={handleSearch} className="max-w-xl mx-auto my-8">
            <div className="relative">
                <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search blog posts..."
                    className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchBar