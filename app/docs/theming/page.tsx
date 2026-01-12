"use client"

import Link from "next/link"
import { CodeBlock } from "@/components/docs/code-block"

export default function ThemingPage() {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold md:text-4xl text-black">Theming</h1>
            </header>

            <section className="space-y-4">
                <p className="text-base text-black">
                    All visual properties are controlled through CSS custom properties defined in your <code className="px-1.5 py-0.5 bg-neutral-200 rounded text-base font-mono">globals.css</code> file. Change a variable once and every component updates automatically.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black">Color Variables</h2>
                <p className="text-base text-black">
                    The default theme uses a soft purple accent with a light background.
                </p>

                <div className="border-2 border-black divide-y-2 divide-black">
                    <div className="flex items-center gap-4 p-4 bg-bw">
                        <div className="w-10 h-10 border-2 border-black bg-main"></div>
                        <div className="flex-1">
                            <code className="font-mono text-base font-bold text-black">--main</code>
                            <p className="text-base text-black">Primary accent color</p>
                        </div>
                        <code className="text-base text-black font-mono">#B6ACE4</code>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-bw">
                        <div className="w-10 h-10 border-2 border-black bg-bg"></div>
                        <div className="flex-1">
                            <code className="font-mono text-base font-bold text-black">--bg</code>
                            <p className="text-base text-black">Page background</p>
                        </div>
                        <code className="text-base text-black font-mono">#f0eefc</code>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-bw">
                        <div className="w-10 h-10 border-2 border-black bg-white"></div>
                        <div className="flex-1">
                            <code className="font-mono text-base font-bold text-black">--white</code>
                            <p className="text-base text-black">Component backgrounds</p>
                        </div>
                        <code className="text-base text-black font-mono">#ffffff</code>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-bw">
                        <div className="w-10 h-10 border-2 border-black bg-black"></div>
                        <div className="flex-1">
                            <code className="font-mono text-base font-bold text-black">--black</code>
                            <p className="text-base text-black">Text and borders</p>
                        </div>
                        <code className="text-base text-black font-mono">#000000</code>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black">Changing Colors</h2>
                <p className="text-base text-black">
                    Edit the <code className="px-1.5 py-0.5 bg-neutral-200 rounded text-base font-mono">:root</code> block in your CSS file.
                </p>
                <CodeBlock code={`:root {
  --white: #ffffff;
  --black: #000000;
  --main: #B6ACE4;
  --bg: #f0eefc;
  --radius: 5px;
}`} language="css" />
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black">Shadows</h2>
                <p className="text-base text-black">
                    The signature Neobrutalist shadow is a hard offset with no blur.
                </p>
                <CodeBlock code={`--shadow-brutal: 4px 4px 0px 0px var(--black);`} language="css" />
                <p className="text-base text-black">
                    Adjust the first two values to change the offset distance. The third value (blur) should remain 0 to maintain the hard edge.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black">Border Radius</h2>
                <p className="text-base text-black">
                    All components use the <code className="px-1.5 py-0.5 bg-neutral-200 rounded text-base font-mono">--radius</code> variable for consistent corners.
                </p>
                <CodeBlock code={`--radius: 5px;`} language="css" />
                <p className="text-base text-black">
                    Set to 0 for sharp corners or increase for softer edges.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black">Example Themes</h2>

                <div className="border-2 border-black divide-y-2 divide-black">
                    <div className="p-5 bg-bw">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-6 h-6 border-2 border-black bg-[#97ee88]"></div>
                            <h3 className="font-bold text-black text-lg">Mint</h3>
                        </div>
                        <CodeBlock code={`:root {
  --main: #97ee88;
  --bg: #eefbec;
}`} language="css" />
                    </div>

                    <div className="p-5 bg-bw">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-6 h-6 border-2 border-black bg-[#fed170]"></div>
                            <h3 className="font-bold text-black text-lg">Lemon</h3>
                        </div>
                        <CodeBlock code={`:root {
  --main: #fed170;
  --bg: #fffbf0;
}`} language="css" />
                    </div>
                </div>
            </section>

            <section className="border-2 border-black bg-bw">
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-black">
                    <Link href="/docs/cli" className="block p-3 hover:bg-main">
                        <span className="text-lg font-bold">CLI Reference</span>
                        <p className="truncate">All available commands and options</p>
                    </Link>
                    <Link href="/docs/accessibility" className="block p-3 hover:bg-main text-right">
                        <span className="text-lg font-bold">Accessibility</span>
                        <p className="truncate">Learn about how neobrutal ui is built with accessibility in mind</p>
                    </Link>
                </div>
            </section>
        </div>
    )
}
