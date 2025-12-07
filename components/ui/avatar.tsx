"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
    src?: string
    alt?: string
    fallback?: string
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
    ({ className, src, alt, fallback, children, ...props }, ref) => {
        const [imageError, setImageError] = React.useState(false)

        return (
            <div
                ref={ref}
                className={cn(
                    "relative inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-base border-2 border-border bg-main text-sm font-bold text-black",
                    className
                )}
                {...props}
            >
                {src && !imageError ? (
                    <img
                        src={src}
                        alt={alt || "Avatar"}
                        onError={() => setImageError(true)}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <span>{fallback || children}</span>
                )}
            </div>
        )
    }
)
Avatar.displayName = "Avatar"

export type AvatarGroupProps = React.HTMLAttributes<HTMLDivElement> & {
    max?: number
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
    ({ className, max = 3, children, ...props }, ref) => {
        const childArray = React.Children.toArray(children)
        const visible = childArray.slice(0, max)
        const overflow = childArray.length - max

        return (
            <div
                ref={ref}
                className={cn("flex items-center -space-x-2", className)}
                {...props}
            >
                {visible.map((child, index) => (
                    <div key={index} className="relative">
                        {child}
                    </div>
                ))}
                {overflow > 0 && (
                    <div className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-base border-2 border-border bg-neutral-300 text-sm font-bold">
                        +{overflow}
                    </div>
                )}
            </div>
        )
    }
)
AvatarGroup.displayName = "AvatarGroup"

export { Avatar, AvatarGroup }
