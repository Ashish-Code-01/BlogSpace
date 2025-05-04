import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r  text-black shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-xl font-bold">BlogSpace</Link>
                    <ul className="flex space-x-8">
                        <li>
                            <Link href="/" className="hover:text-blue-200 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-blue-200 transition-colors">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-blue-200 transition-colors">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-blue-200 transition-colors">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
