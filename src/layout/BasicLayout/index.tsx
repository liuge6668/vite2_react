import React, { FC } from 'react'
import Layout from 'components/Layout'

interface BasicLayoutProps {
  pageReady: boolean
}

const BasicLayout: FC<BasicLayoutProps> = (props: BasicLayoutProps) => {
  const { pageReady } = props
  if (!pageReady) return null

  return <Layout menuItems={[]} children={} />
}

export default BasicLayout
