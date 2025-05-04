import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <h1 className='text-center mt-6'>Our Blogs!</h1>
            <div className="flex  items-center justify-center gap-5">
                <div className="flex flex-col items-center justify-center">
                    <Link href={"/blogpost/learn-javascript"} className="flex flex-col items-center justify-center">
                        <div className=" mt-10 flex flex-col gap-5 max-w-md border-2 border-gray-300 rounded-lg p-5">
                            <h3 className="text-xl">How to learn JavaScript in 2025 ? </h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti maxime, quae aliquid excepturi ab earum, aperiam pariatur molestias laborum voluptatum deleniti itaque quam a exercitationem minima quia eius perspiciatis aliquam.</p>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className=" mt-10 flex flex-col gap-5 max-w-md border-2 border-gray-300 rounded-lg p-5">
                        <h3 className="text-xl">How to learn JavaScript in 2025 ? </h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti maxime, quae aliquid excepturi ab earum, aperiam pariatur molestias laborum voluptatum deleniti itaque quam a exercitationem minima quia eius perspiciatis aliquam.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
