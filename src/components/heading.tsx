import { cn } from "@/utils"

// Can take any props that are valid for an HTML heading element
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
//   className?: string
  children: React.ReactNode
}

const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1 className={cn("text-4xl sm:text-5xl text-pretty font-heading font-semibold tracking-tight text-zinc-800", className)} {...props}>
      {children}
    </h1>
  )
}

export default Heading
