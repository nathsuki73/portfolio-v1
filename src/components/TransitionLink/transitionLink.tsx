'use client'

import { usePathname } from "next/navigation"
import { useLoading } from "../loading/LoadingContext"

interface TransitionLinkProps {
    path: string
    children: React.ReactNode
    className: string
    style?: React.CSSProperties | undefined
}

const TransitionLink = ({path, children, className, style,}: TransitionLinkProps) => {
    const pathName = usePathname();
    const {setIsLoading, setHref, } = useLoading();
    
    const handleClick = () => {
        if (pathName !== path) {
            setHref(path)
            setIsLoading(true)
        }
    }
      

  return (
    <button 
    className={className}
    onClick={handleClick} style={style}>
        {children}
    </button>
  )
}

export default TransitionLink