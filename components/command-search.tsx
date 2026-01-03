"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Command } from "cmdk"
import {
    MagnifyingGlassIcon,
    FileIcon,
    BookOpenIcon,
    TerminalIcon,
    PaletteIcon,
} from "@phosphor-icons/react"

interface SearchItem {
    name: string
    description: string
    href: string
    keywords: string[]
    category: "component" | "docs" | "cli"
}

const searchItems: SearchItem[] = [
    // Components
    {
        name: "Accordion",
        description: "A vertically stacked set of interactive headings that reveal content sections.",
        href: "/docs/components/accordion",
        keywords: ["collapse", "expand", "disclosure", "faq"],
        category: "component",
    },
    {
        name: "Alert",
        description: "Displays a callout for user attention with neobrutalist styling.",
        href: "/docs/components/alert",
        keywords: ["notification", "message", "warning", "error", "info"],
        category: "component",
    },
    {
        name: "Avatar",
        description: "An image element with a fallback for representing the user.",
        href: "/docs/components/avatar",
        keywords: ["user", "profile", "image", "picture"],
        category: "component",
    },
    {
        name: "Badge",
        description: "Displays a badge or label with neobrutalist styling.",
        href: "/docs/components/badge",
        keywords: ["tag", "label", "chip", "status"],
        category: "component",
    },
    {
        name: "Breadcrumb",
        description: "Displays the path to the current resource using a hierarchy of links.",
        href: "/docs/components/breadcrumb",
        keywords: ["navigation", "path", "hierarchy", "trail"],
        category: "component",
    },
    {
        name: "Button",
        description: "Displays a button or a component that looks like a button.",
        href: "/docs/components/button",
        keywords: ["click", "action", "submit", "cta"],
        category: "component",
    },
    {
        name: "Card",
        description: "Displays a card with header, content, and footer sections.",
        href: "/docs/components/card",
        keywords: ["container", "box", "panel", "tile"],
        category: "component",
    },
    {
        name: "Checkbox",
        description: "A control that allows the user to toggle between checked and not checked.",
        href: "/docs/components/checkbox",
        keywords: ["check", "toggle", "tick", "form"],
        category: "component",
    },
    {
        name: "Dialog",
        description: "A window overlaid on the primary window with neobrutalist styling.",
        href: "/docs/components/dialog",
        keywords: ["modal", "popup", "overlay", "confirm"],
        category: "component",
    },
    {
        name: "Input",
        description: "Displays a form input field with neobrutalist styling.",
        href: "/docs/components/input",
        keywords: ["text", "field", "form", "textbox"],
        category: "component",
    },
    {
        name: "Label",
        description: "Renders an accessible label associated with controls.",
        href: "/docs/components/label",
        keywords: ["text", "form", "accessibility"],
        category: "component",
    },
    {
        name: "Pagination",
        description: "Pagination with page navigation and ellipsis.",
        href: "/docs/components/pagination",
        keywords: ["pages", "navigation", "next", "previous"],
        category: "component",
    },
    {
        name: "Popover",
        description: "Displays rich content in a portal, triggered by a button.",
        href: "/docs/components/popover",
        keywords: ["popup", "dropdown", "tooltip", "overlay"],
        category: "component",
    },
    {
        name: "Progress",
        description: "Displays an indicator showing the completion progress of a task.",
        href: "/docs/components/progress",
        keywords: ["loading", "bar", "indicator", "percent"],
        category: "component",
    },
    {
        name: "Radio Group",
        description: "A set of checkable buttons where only one can be checked at a time.",
        href: "/docs/components/radio-group",
        keywords: ["radio", "option", "select", "form"],
        category: "component",
    },
    {
        name: "Select",
        description: "Displays a list of options for the user to pick from.",
        href: "/docs/components/select",
        keywords: ["dropdown", "option", "picker", "form"],
        category: "component",
    },
    {
        name: "Skeleton",
        description: "Use to show a placeholder while content is loading.",
        href: "/docs/components/skeleton",
        keywords: ["loading", "placeholder", "shimmer"],
        category: "component",
    },
    {
        name: "Slider",
        description: "An input where the user selects a value from within a given range.",
        href: "/docs/components/slider",
        keywords: ["range", "input", "volume", "form"],
        category: "component",
    },
    {
        name: "Switch",
        description: "A control that allows the user to toggle between on and off.",
        href: "/docs/components/switch",
        keywords: ["toggle", "on", "off", "boolean"],
        category: "component",
    },
    {
        name: "Tabs",
        description: "A set of layered sections of content displayed one at a time.",
        href: "/docs/components/tabs",
        keywords: ["navigation", "panel", "section"],
        category: "component",
    },
    {
        name: "Textarea",
        description: "Displays a form textarea with neobrutalist styling.",
        href: "/docs/components/textarea",
        keywords: ["text", "multiline", "form", "input"],
        category: "component",
    },
    {
        name: "Toast",
        description: "An opinionated toast component with neobrutalist styling.",
        href: "/docs/components/toast",
        keywords: ["notification", "snackbar", "message", "sonner"],
        category: "component",
    },
    {
        name: "Tooltip",
        description: "A popup that displays information related to an element.",
        href: "/docs/components/tooltip",
        keywords: ["hint", "help", "info", "hover"],
        category: "component",
    },
    // Documentation
    {
        name: "Getting Started",
        description: "Learn how to get started with NeoBrutal UI.",
        href: "/docs",
        keywords: ["start", "intro", "begin", "overview"],
        category: "docs",
    },
    {
        name: "Installation",
        description: "How to install NeoBrutal UI in your project.",
        href: "/docs/installation",
        keywords: ["setup", "install", "npm", "pnpm"],
        category: "docs",
    },
    {
        name: "Theming",
        description: "Customize the look and feel with CSS variables.",
        href: "/docs/theming",
        keywords: ["theme", "colors", "customize", "css", "variables"],
        category: "docs",
    },
    {
        name: "CLI",
        description: "Use the neobrutal CLI to add components.",
        href: "/docs/cli",
        keywords: ["command", "terminal", "npx", "add"],
        category: "cli",
    },
]

function getCategoryIcon(category: SearchItem["category"]) {
    switch (category) {
        case "component":
            return <FileIcon size={16} weight="bold" />
        case "docs":
            return <BookOpenIcon size={16} weight="bold" />
        case "cli":
            return <TerminalIcon size={16} weight="bold" />
        default:
            return <PaletteIcon size={16} weight="bold" />
    }
}

export function CommandSearch() {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault()
                setOpen((prev) => !prev)
            }
        }

        document.addEventListener("keydown", onKeyDown)
        return () => document.removeEventListener("keydown", onKeyDown)
    }, [])

    const runCommand = useCallback((command: () => void) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-black/60 border-2 border-border rounded-md bg-white hover:bg-main/20 transition-colors cursor-pointer focus-brutal"
            >
                <MagnifyingGlassIcon size={16} weight="bold" />
                <span>Search...</span>
                <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border-2 border-border bg-bg px-1.5 font-mono text-[10px] font-medium">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>
            <Command.Dialog
                open={open}
                onOpenChange={setOpen}
                label="Search components"
                className="fixed inset-0 z-100"
            >
                <div
                    className="fixed inset-0 bg-black/50"
                    onClick={() => setOpen(false)}
                />
                <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white border-4 border-border shadow-brutal rounded-lg overflow-hidden">
                    <div className="flex items-center gap-2 px-4 border-b-2 border-border">
                        <MagnifyingGlassIcon size={20} weight="bold" className="text-black/60" />
                        <Command.Input
                            placeholder="Search components, docs..."
                            className="flex-1 py-4 text-base outline-none placeholder:text-black/40"
                        />
                    </div>
                    <Command.List className="max-h-80 overflow-y-auto p-2">
                        <Command.Empty className="py-6 text-center text-sm text-black/60">
                            No results found.
                        </Command.Empty>

                        <Command.Group heading="Components" className="px-2 py-1.5 text-xs font-bold text-black/40 uppercase tracking-wider">
                            {searchItems
                                .filter((item) => item.category === "component")
                                .map((item) => (
                                    <Command.Item
                                        key={item.href}
                                        value={`${item.name} ${item.description} ${item.keywords.join(" ")}`}
                                        onSelect={() => runCommand(() => router.push(item.href))}
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer data-[selected=true]:bg-main/30 hover:bg-main/20"
                                    >
                                        <span className="flex items-center justify-center w-6 h-6 rounded border-2 border-border bg-bg">
                                            {getCategoryIcon(item.category)}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold truncate">{item.name}</p>
                                            <p className="text-xs text-black/60 truncate">{item.description}</p>
                                        </div>
                                    </Command.Item>
                                ))}
                        </Command.Group>

                        <Command.Group heading="Documentation" className="px-2 py-1.5 text-xs font-bold text-black/40 uppercase tracking-wider mt-2">
                            {searchItems
                                .filter((item) => item.category === "docs" || item.category === "cli")
                                .map((item) => (
                                    <Command.Item
                                        key={item.href}
                                        value={`${item.name} ${item.description} ${item.keywords.join(" ")}`}
                                        onSelect={() => runCommand(() => router.push(item.href))}
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer data-[selected=true]:bg-main/30 hover:bg-main/20"
                                    >
                                        <span className="flex items-center justify-center w-6 h-6 rounded border-2 border-border bg-bg">
                                            {getCategoryIcon(item.category)}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold truncate">{item.name}</p>
                                            <p className="text-xs text-black/60 truncate">{item.description}</p>
                                        </div>
                                    </Command.Item>
                                ))}
                        </Command.Group>
                    </Command.List>
                    <div className="flex items-center justify-between px-4 py-2 border-t-2 border-border bg-bg text-xs text-black/60">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                                <kbd className="px-1.5 py-0.5 rounded border border-border bg-white">↑</kbd>
                                <kbd className="px-1.5 py-0.5 rounded border border-border bg-white">↓</kbd>
                                navigate
                            </span>
                            <span className="flex items-center gap-1">
                                <kbd className="px-1.5 py-0.5 rounded border border-border bg-white">↵</kbd>
                                select
                            </span>
                        </div>
                        <span className="flex items-center gap-1">
                            <kbd className="px-1.5 py-0.5 rounded border border-border bg-white">esc</kbd>
                            close
                        </span>
                    </div>
                </div>
            </Command.Dialog>
        </>
    )
}
