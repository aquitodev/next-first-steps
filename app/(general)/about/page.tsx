import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About page',
 description: 'About description',
 keywords: ['About Page', 'Alexander']
};

export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}