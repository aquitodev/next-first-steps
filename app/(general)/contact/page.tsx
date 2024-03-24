import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact page',
 description: 'Contact description',
 keywords: ['Contact Page', 'Alexander']
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}