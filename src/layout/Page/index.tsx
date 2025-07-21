import React, { FC, useEffect, useState } from 'react'
import Loading from 'components/Loading'
import BasicLayout from '../BasicLayout'

const Page: FC = () => {
  const [pageReady, setPageReady] = useState(false)
  useEffect(() => {
    // 模拟异步加载数据
    setPageReady(true)
  }, [])

  if (!pageReady) return <Loading />
  return <BasicLayout pageReady={pageReady} />
}

export default Page
