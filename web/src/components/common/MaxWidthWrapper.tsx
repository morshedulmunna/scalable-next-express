import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

type Props = {
   className?: string
   children: ReactNode
}

export default function MaxWidthWrapper({ children, className }: Props) {
   return <div className={cn('mx-auto  max-w-[1440px]  px-[26px] md:px-[100px]', className)}>{children}</div>
}
