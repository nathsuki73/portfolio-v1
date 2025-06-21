'use client'

import { usePathname } from "next/navigation"
import { useLoading } from "../loading/LoadingContext"
import { useEffect } from "react"

interface TransitionLinkProps {
    path: string
    label: string
    className: string
}

const TransitionLink = ({path, label, className}: TransitionLinkProps) => {
    const pathName = usePathname();
    const {setIsLoading, setHref, href, isLoading} = useLoading();
    
    const handleClick = () => {
        if (pathName !== path) {
            setHref(path)
            setIsLoading(true)
        }
    }

    useEffect(() => {
        console.log("isLoading changed to:", isLoading);
      }, [isLoading]);
      
      useEffect(() => {
        console.log("href changed to:", href);
      }, [href]);
      

  return (
    <button 
    className={className}
    onClick={handleClick}>
        {label}
    </button>
  )
}

export default TransitionLink