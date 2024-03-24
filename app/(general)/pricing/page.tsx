import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing page',
 description: 'Pricing description',
 keywords: ['Pricing Page', 'Alexander']
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}