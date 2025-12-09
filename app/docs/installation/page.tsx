"use client"

import { CodeBlock } from "@/components/docs/code-block"
import Link from "next/link"

export default function QuickStartPage() {
    return (
        <div className="space-y-10">
            <div className="space-y-4">
                <h1 className="text-4xl font-black">Quick Start</h1>
                <p className="text-xl text-neutral-600">
                    Get up and running with NeoBrutal UI in your project.
                </p>
            </div>

            <div className="space-y-4">
                <p>
                    NeoBrutal UI components can be added to your project in two ways.
                    Use the CLI to install components with their dependencies automatically,
                    or copy the code directly and set things up manually.
                </p>
            </div>

            {/* CLI Installation */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold border-b-2 border-black pb-2">Using the CLI</h2>
                <p className="text-neutral-600">
                    The recommended way to add components. The CLI handles dependencies and file placement for you.
                </p>

                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Initialize your project</h3>
                    <p className="text-sm text-neutral-600">
                        Run the init command to set up your project. This installs dependencies and configures your project.
                    </p>
                    <CodeBlock code={`npx neobrutal-ui init`} language="bash" />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Add components</h3>
                    <p className="text-sm text-neutral-600">
                        Add the components you need. They will be placed in your <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">components/ui</code> folder.
                    </p>
                    <CodeBlock code={`npx neobrutal-ui add button`} language="bash" />
                    <p className="text-sm text-neutral-600">
                        You can add multiple components at once:
                    </p>
                    <CodeBlock code={`npx neobrutal-ui add button card input`} language="bash" />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Use the component</h3>
                    <CodeBlock code={`import { Button } from "@/components/ui/button"

export default function Page() {
  return <Button>Click me</Button>
}`} />
                </div>
            </div>

            {/* Manual Installation */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold border-b-2 border-black pb-2">Manual Installation</h2>
                <p className="text-neutral-600">
                    Prefer to copy code directly? Each component page shows the full source code.
                    Copy it into your project and install any required dependencies.
                </p>

                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Install base dependencies</h3>
                    <p className="text-sm text-neutral-600">
                        These utilities are used by all components:
                    </p>
                    <CodeBlock code={`npm install class-variance-authority clsx tailwind-merge`} language="bash" />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Add the cn utility</h3>
                    <p className="text-sm text-neutral-600">
                        Create <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">lib/utils.ts</code>:
                    </p>
                    <CodeBlock code={`import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`} />
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Copy the component</h3>
                    <p className="text-sm text-neutral-600">
                        Browse the component you need, copy the React code from the Code tab,
                        and paste it into <code className="bg-neutral-200 px-1.5 py-0.5 rounded text-sm">components/ui/</code>.
                    </p>
                    <p className="text-sm text-neutral-600">
                        Some components require Radix UI primitives. Install them as needed:
                    </p>
                    <CodeBlock code={`npm install @radix-ui/react-accordion`} language="bash" />
                </div>
            </div>

            {/* Copy as HTML */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold border-b-2 border-black pb-2">Copy as HTML</h2>
                <p className="text-neutral-600">
                    Need just the markup without React? Every component has an HTML tab with plain Tailwind classes.
                    Copy it into any project — React, Vue, plain HTML, or anything else.
                </p>

                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Requirements</h3>
                    <ul className="text-sm text-neutral-600 space-y-1">
                        <li>
                            <Link href="https://tailwindcss.com/docs/installation" target="_blank" className="underline hover:no-underline">Tailwind CSS v4</Link> installed and configured
                        </li>
                        <li>
                            For icons, use the inline SVGs provided or install <Link href="https://phosphoricons.com" target="_blank" className="underline hover:no-underline">Phosphor Icons</Link>
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-bold">How to use</h3>
                    <ol className="text-sm text-neutral-600 space-y-2 list-decimal list-inside">
                        <li>Go to any component page</li>
                        <li>Click the <span className="font-bold">Code</span> tab</li>
                        <li>Select <span className="font-bold">HTML</span> to see the Tailwind-only version</li>
                        <li>Copy and paste into your project</li>
                    </ol>
                </div>
            </div>

            {/* Next Steps */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold border-b-2 border-black pb-2">Next Steps</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link href="/docs/components/accordion" className="block">
                        <div className="p-4 border-2 border-black rounded-base hover:bg-main transition-colors">
                            <h3 className="font-bold">Browse Components</h3>
                            <p className="text-sm text-neutral-600">See all available components</p>
                        </div>
                    </Link>
                    <Link href="https://github.com/bridgetamana/neobrutal-ui" target="_blank" className="block">
                        <div className="p-4 border-2 border-black rounded-base hover:bg-main transition-colors">
                            <h3 className="font-bold">View on GitHub</h3>
                            <p className="text-sm text-neutral-600">Star the repo, report issues</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
