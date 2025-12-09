import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr"

export default function DocsPage() {
    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <h1 className="text-4xl font-black md:text-5xl">About</h1>
                <p className="text-xl text-neutral-600">
                    Neobrutalist components you can copy and paste into your apps. Open source. Accessible. Customizable.
                </p>
            </div>

            <div className="space-y-6">
                <p>
                    NeoBrutal UI is a collection of accessible UI components with a bold, Neobrutalist aesthetic.
                    It combines the structured accessibility of Radix UI with the raw, unapologetic style of Neobrutalism.
                </p>

                <p>
                    This is not a component library you install from npm. Pick a component, copy the code,
                    and paste it into your project. You own the code. Customize it however you want.
                </p>

                <p>
                    Each component is available in two formats: as a React component built on Radix UI,
                    or as plain HTML with Tailwind classes. Use whichever fits your project.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold border-b-2 border-black pb-2">Features</h2>
                <ul className="space-y-3">
                    <li className="flex gap-3">
                        <span className="font-bold text-main">01</span>
                        <div>
                            <span className="font-bold">Open Code</span>
                            <span className="text-neutral-600"> — You own every line. No hidden abstractions, no version lock-in.</span>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="font-bold text-main">02</span>
                        <div>
                            <span className="font-bold">Accessible</span>
                            <span className="text-neutral-600"> — Built on Radix UI primitives with proper keyboard navigation and ARIA support.</span>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="font-bold text-main">03</span>
                        <div>
                            <span className="font-bold">Two Formats</span>
                            <span className="text-neutral-600"> — React components for apps, or plain HTML/Tailwind for quick prototypes.</span>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="font-bold text-main">04</span>
                        <div>
                            <span className="font-bold">Tailwind CSS v4</span>
                            <span className="text-neutral-600"> — Styled with the latest Tailwind using CSS variables for easy theming.</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold border-b-2 border-black pb-2">Prerequisites</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold mb-2">For React Components</h3>
                        <ul className="text-sm space-y-1 text-neutral-600">
                            <li>React 19+ or Next.js 16+</li>
                            <li><Link href="https://tailwindcss.com/docs/installation" target="_blank" className="underline hover:no-underline">Tailwind CSS v4</Link></li>
                            <li>TypeScript (recommended)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">For HTML/Tailwind</h3>
                        <ul className="text-sm space-y-1 text-neutral-600">
                            <li><Link href="https://tailwindcss.com/docs/installation" target="_blank" className="underline hover:no-underline">Tailwind CSS v4</Link></li>
                            <li>Any project (React, Vue, plain HTML, etc.)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 pt-4">
                <Link href="/docs/installation">
                    <Button className="gap-2">
                        Quick Start <ArrowRightIcon className="h-4 w-4" />
                    </Button>
                </Link>
                <Link href="https://github.com/bridgetamana/neobrutal-ui" target="_blank">
                    <Button variant="neutral">GitHub</Button>
                </Link>
            </div>
        </div>
    )
}
