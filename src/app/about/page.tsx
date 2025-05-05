import React from "react"


const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">About BlogSpace</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We're passionate about creating a space where ideas flourish and stories come to life.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h2>
                        <p className="text-gray-600 leading-relaxed">
                            At BlogSpace, we believe everyone has a story worth sharing. Our platform is designed
                            to empower writers, thinkers, and creators to reach their audience and make their
                            voice heard. We're committed to providing a seamless, beautiful writing experience
                            that lets you focus on what matters most - your content.
                        </p>
                    </div>
                </div>

                {/* Features Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-blue-600 mb-4">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
                        <p className="text-gray-600">
                            Intuitive interface designed for the best writing experience.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-blue-600 mb-4">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Community First</h3>
                        <p className="text-gray-600">
                            Connect with other writers and grow your audience.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-blue-600 mb-4">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
                        <p className="text-gray-600">
                            Your content is safe and protected with us.
                        </p>
                    </div>
                </div>

                {/* Team Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Team</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                            <p className="text-gray-600">Founder & CEO</p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
                            <p className="text-gray-600">Lead Developer</p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                            <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
                            <p className="text-gray-600">Design Lead</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
