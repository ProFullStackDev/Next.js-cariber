import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Index: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/review')
  })

  return (
    <div>
    </div>
  )
}

export default Index
