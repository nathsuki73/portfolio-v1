'use client'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState } from 'react'

type LoadingContextType = {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    href: string;
    setHref: (value: string) => void;
    router: AppRouterInstance;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export const LoadingProvider = ({children}: {children: React.ReactNode}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [href, setHref] = useState("")
    const router = useRouter()
  return (
    <LoadingContext.Provider value={{isLoading, setIsLoading, href, setHref, router }}>
        {children}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) throw new Error("useLoading must be used within the LoadingContextProvider")
    return context;
}

