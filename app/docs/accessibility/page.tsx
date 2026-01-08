"use client"

import Link from "next/link"
import { CodeBlock } from "@/components/docs/code-block"

export default function AccessibilityPage() {
    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold md:text-4xl text-black">Accessibility</h1>
            </header>

            <section className="space-y-4">
                <p className="text-base text-black">
                    Neobrutal UI is built with accessibility as a core principle. All interactive components are designed to meet WCAG 2.1 AA standards while maintaining the bold Neobrutalist aesthetic.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black">Foundation</h2>
                <p className="text-base text-black">
                    Components that require complex interactions are built on <a href="https://base-ui.com" className="underline font-bold" target="_blank" rel="noopener noreferrer">Base UI</a>, which provides:
                </p>
                <ul className="list-disc list-inside space-y-2 text-black">
                    <li>Complete keyboard navigation</li>
                    <li>Proper ARIA attributes and roles</li>
                    <li>Focus management and trapping</li>
                    <li>Screen reader announcements</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black">Keyboard Navigation</h2>
                <p className="text-base text-black">
                    All interactive components support keyboard navigation:
                </p>

                <div className="border-2 border-black divide-y-2 divide-black">
                    <div className="p-4 bg-bw">
                        <code className="font-mono font-bold">Tab</code>
                        <p className="text-sm text-black mt-1">Move focus between interactive elements</p>
                    </div>
                    <div className="p-4 bg-bw">
                        <code className="font-mono font-bold">Enter / Space</code>
                        <p className="text-sm text-black mt-1">Activate buttons, toggle checkboxes and switches</p>
                    </div>
                    <div className="p-4 bg-bw">
                        <code className="font-mono font-bold">Arrow Keys</code>
                        <p className="text-sm text-black mt-1">Navigate within radio groups, sliders, and menus</p>
                    </div>
                    <div className="p-4 bg-bw">
                        <code className="font-mono font-bold">Escape</code>
                        <p className="text-sm text-black mt-1">Close dialogs, popovers, and tooltips</p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black">Focus Management</h2>
                <p className="text-base text-black">
                    All components have visible focus indicators that meet contrast requirements. Focus is properly trapped in modal dialogs to prevent users from tabbing out of the dialog content.
                </p>
                <CodeBlock code={`.focus-visible:ring-2 .focus-visible:ring-black .focus-visible:ring-offset-2`} language="css" />
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black">Color Contrast</h2>
                <p className="text-base text-black">
                    The default color palette uses high-contrast combinations. Text is always black on light backgrounds, meeting WCAG AAA contrast ratios. When customizing colors, verify contrast using a tool like <a href="https://webaim.org/resources/contrastchecker/" className="underline font-bold" target="_blank" rel="noopener noreferrer">WebAIM Contrast Checker</a>.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black">Semantic HTML</h2>
                <p className="text-base text-black">
                    Components use semantic HTML elements whenever possible:
                </p>
                <ul className="list-disc list-inside space-y-2 text-black">
                    <li><code className="bg-gray-100 px-1 rounded">button</code> for interactive buttons</li>
                    <li><code className="bg-gray-100 px-1 rounded">nav</code> for navigation (breadcrumbs, pagination)</li>
                    <li><code className="bg-gray-100 px-1 rounded">dialog</code> for modal windows</li>
                    <li><code className="bg-gray-100 px-1 rounded">label</code> for form control labels</li>
                    <li><code className="bg-gray-100 px-1 rounded">input</code>, <code className="bg-gray-100 px-1 rounded">textarea</code> for form fields</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-black">Component-Specific Notes</h2>

                <div className="space-y-6">
                    <div className="border-2 border-black p-4 bg-bw">
                        <h3 className="font-bold text-lg mb-2">Form Controls</h3>
                        <p className="text-sm text-black">
                            Always pair inputs, textareas, checkboxes, radio buttons, and switches with a <code className="bg-gray-100 px-1 rounded">Label</code> component. The <code className="bg-gray-100 px-1 rounded">htmlFor</code> attribute links the label to the control.
                        </p>
                    </div>

                    <div className="border-2 border-black p-4 bg-bw">
                        <h3 className="font-bold text-lg mb-2">Dialog</h3>
                        <p className="text-sm text-black">
                            Focus is automatically trapped and returned to the trigger element on close. Dialogs use <code className="bg-gray-100 px-1 rounded">aria-labelledby</code> and <code className="bg-gray-100 px-1 rounded">aria-describedby</code> to announce their title and description.
                        </p>
                    </div>

                    <div className="border-2 border-black p-4 bg-bw">
                        <h3 className="font-bold text-lg mb-2">Toast</h3>
                        <p className="text-sm text-black">
                            Standard toasts use <code className="bg-gray-100 px-1 rounded">aria-live=&quot;polite&quot;</code> to not interrupt the user. Error toasts use <code className="bg-gray-100 px-1 rounded">aria-live=&quot;assertive&quot;</code> for immediate announcement.
                        </p>
                    </div>

                    <div className="border-2 border-black p-4 bg-bw">
                        <h3 className="font-bold text-lg mb-2">Accordion</h3>
                        <p className="text-sm text-black">
                            Implements proper ARIA patterns for expandable sections. Triggers are focusable and announce their expanded/collapsed state.
                        </p>
                    </div>

                    <div className="border-2 border-black p-4 bg-bw">
                        <h3 className="font-bold text-lg mb-2">Select</h3>
                        <p className="text-sm text-black">
                            Uses <code className="bg-gray-100 px-1 rounded">role=&quot;combobox&quot;</code> with proper <code className="bg-gray-100 px-1 rounded">aria-expanded</code> and option selection announcements.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-2 border-black bg-bw">
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-black">
                    <Link href="/docs/theming" className="block p-3 hover:bg-main">
                        <span className="text-lg font-bold">Theming</span>
                        <p className="truncate">Customize the look and feel of Neobrutal UI components</p>
                    </Link>
                    <Link href="/docs/changelog" className="block p-3 hover:bg-main text-right">
                        <span className="text-lg font-bold">Changelog</span>
                        <p className="truncate">See what&apos;s new in each release</p>
                    </Link>
                </div>
            </section>
        </div>
    )
}
