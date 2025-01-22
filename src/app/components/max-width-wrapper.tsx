import { cn } from "@/utils"

interface MaxWidthWrapperProps {
  className?: string
  children: React.ReactNode
}

export const MaxWidthWrapper = ({
  className,
  children,
}: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </div>
  )
}
