import React from 'react'
import { Layout as AntdLayout, Menu, Breadcrumb, theme } from 'antd'
import style from './styles.module.css'

const { Header, Content, Sider } = AntdLayout

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()
  return (
    <AntdLayout className={style.layoutContainer}>
      <Header className={style.layoutHeader}>
        <h3>My App</h3>
      </Header>
      <AntdLayout className={style.midLayout}>
        <Sider className={style.layoutSider} width={200} style={{ background: colorBgContainer }}>
          <Menu
            theme='light'
            mode='inline'
            defaultSelectedKeys={['home']}
            items={[
              { key: 'home', label: '首页' },
              { key: 'about', label: '关于我们' }
            ]}
          />
        </Sider>
        <AntdLayout className={style.layoutMid}>
          <Breadcrumb items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]} style={{ margin: '16px 0' }} />
          <Content className={style.layoutMain} style={{ background: colorBgContainer, borderRadius: borderRadiusLG }}>
            {children}
          </Content>
          <AntdLayout />
        </AntdLayout>
      </AntdLayout>
    </AntdLayout>
  )
}

export default Layout
