import * as React from "react"
import { cn } from "@/lib/utils"

export type ProgressProps = React.HTMLAttributes<HTMLDivElement> & {
    value?: number
    max?: number
    variant?: "default" | "destructive"
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
    ({ className, value = 0, max = 100, variant = "default", ...props }, ref) => {
        const percentage = (value / max) * 100

        return (
            <div
                ref={ref}
                className={cn(
                    "relative h-4 w-full overflow-hidden rounded-full border-2 border-border bg-bw",
                    className
                )}
                role="progressbar"
                aria-valuenow={value.toString()}
                aria-valuemin="0"
                aria-valuemax={max.toString()}
                {...props}
            >
                <div
                    className={cn(
                        "h-full transition-all",
                        variant === "destructive" ? "bg-red-400" : "bg-main"
                    )}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        )
    }
)
Progress.displayName = "Progress"

export { Progress }
