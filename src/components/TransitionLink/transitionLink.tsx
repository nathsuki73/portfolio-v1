'use client'

import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "../loading/animation"

interface TransitionLinkProps {
    href: string
    label: string
    className: string
}

const TransitionLink = ({href, label, className}: TransitionLinkProps) => {
    const router = useRouter();
    const pathName = usePathname();

    const handleClick = () => {
        if (pathName !== href) {
            router.prefetch(href)
            animatePageOut(href, router)
        }
    }

  return (
    <button 
    className={className}
    onClick={handleClick}>
        {label}
    </button>
  )
}

export default TransitionLink