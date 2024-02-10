import React from 'react'

type Props = {
   children: React.ReactNode
}

function GlobalProvider({ children }: Props) {
   return <div>{children}</div>
}

export default GlobalProvider
