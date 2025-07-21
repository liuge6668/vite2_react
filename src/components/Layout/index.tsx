import React from 'react'
import { Layout as AntdLayout, Menu, Breadcrumb, theme, Flex, Typography } from 'antd'
import style from './styles.module.less'

const { Header, Content, Sider } = AntdLayout

interface LayoutProps {
  children: React.ReactNode
  menuItems: any[]
  menuClick: (item: any) => void
  logo: any
  // logout: any
  // sideMenu: any
  // breadcrumb: any
  // toolbar: any
}

const Layout: React.FC<LayoutProps> = ({ children, ...config }) => {
  const { menuClick, menuItems, logo } = config
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
    <AntdLayout className={style.layoutContainer}>
      <Header className={style.layoutHeader}>
        <Flex align='center' justify='space-between' className={style.header}>
          <Flex align='center' gap='8px'>
            {logo.img}
            <Typography.Title level={3} className={style.logoText}>
              {logo.text}
            </Typography.Title>
          </Flex>
        </Flex>
      </Header>
      <AntdLayout className={style.midLayout}>
        <Sider className={style.layoutSider} width={200} style={{ background: colorBgContainer }}>
          <Menu theme='light' mode='inline' items={menuItems} onClick={menuClick} />
        </Sider>
        <AntdLayout className={style.layoutMid}>
          <Breadcrumb items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]} style={{ margin: '16px 0' }} />
          <Content className={style.layoutMain} style={{ background: colorBgContainer, borderRadius: borderRadiusLG }}>
            {children}
          </Content>
        </AntdLayout>
      </AntdLayout>
    </AntdLayout>
  )
}

export default Layout
