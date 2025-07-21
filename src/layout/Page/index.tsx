// src/layout/Page/index.tsx
import React, { FC, useEffect, useState } from 'react'
import Loading from 'components/Loading'

interface PageProps {
  children?: React.ReactNode
}

const Page: FC<PageProps> = ({ children }) => {
  const [pageReady, setPageReady] = useState(false)

  useEffect(() => {
    // 模拟异步初始化数据
    const fetchData = async () => {
      // 这里可以调用 API 获取页面数据
      // 数据加载完成后设置 pageReady 为 true
      setTimeout(() => {
        setPageReady(true)
      }, 1000)
    }

    fetchData()
  }, [])

  if (!pageReady) return <Loading />

  return <>{children}</>
}

export default Page
