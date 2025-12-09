"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
    return (
        <section className="py-16 bg-bg border-b-4 border-black overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                    Community says
                </h2>
                <div className="max-w-4xl mx-auto flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                        <Avatar className="w-12 h-12 border-2 border-black shadow-brutal">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="bg-pastel-purple p-6 rounded-4xl rounded-tl-none border-2 border-black shadow-brutal relative max-w-lg">
                            <p className="text-lg">
                                &quot;This library is exactly what I needed. It&apos;s like Tailwind and Radix had a baby, and that baby was raised by 90s MTV.&quot;
                            </p>
                            <div className="mt-2 font-bold text-sm opacity-75">
                                — @shadcn
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse gap-4 items-start self-end">
                        <Avatar className="w-12 h-12 border-2 border-black shadow-brutal">
                            <AvatarFallback className="bg-main text-black font-bold">JD</AvatarFallback>
                        </Avatar>
                        <div className="bg-pastel-yellow p-6 rounded-4xl rounded-tr-none border-2 border-black shadow-brutal relative max-w-lg">
                            <p className="text-lg">
                                &quot;Finally, a design system that doesn&apos;t take itself too seriously. The components are rock solid but the vibe is immaculate.&quot;
                            </p>
                            <div className="mt-2 font-bold text-sm opacity-75 text-right">
                                — Jane Doe, Frontend Dev
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                        <Avatar className="w-12 h-12 border-2 border-black shadow-brutal">
                            <AvatarImage src="https://github.com/leerob.png" />
                            <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <div className="bg-pastel-pink p-6 rounded-4xl rounded-tl-none border-2 border-black shadow-brutal relative max-w-lg">
                            <p className="text-lg">
                                &quot;Soft edges, hard shadows. It&apos;s a bold choice that pays off. The accessibility features are top-notch too.&quot;
                            </p>
                            <div className="mt-2 font-bold text-sm opacity-75">
                                — Lee Robinson
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
