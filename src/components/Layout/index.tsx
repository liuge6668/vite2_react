import React from 'react'
import { Layout as AntdLayout, Menu, Breadcrumb, theme } from 'antd'
import { useNavigate } from 'react-router-dom'
import style from './styles.module.css'

const { Header, Content, Sider } = AntdLayout

interface LayoutProps {
  children: React.ReactNode
  menuItems: any[]
}

interface MenuItem {
  key: string
  label: string
  path?: string
  children?: MenuItem[]
}

const Layout: React.FC<LayoutProps> = ({ children, menuItems }) => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  const navigate = useNavigate()

  const handleMenuClick = ({ key }: { key: string }) => {
    const fullPath = getMenuItemFullPath(menuItems, key)
    if (fullPath) {
      navigate(fullPath)
    }
  }

  // 递归查找并拼接完整路径
  const getMenuItemFullPath = (items: MenuItem[], targetKey: string, parentPath = ''): string | null => {
    for (const item of items) {
      const currentPath = item.path ? `${parentPath}/${item.path}`.replace(/\/+/g, '/') : parentPath

      if (item.key === targetKey) {
        return currentPath
      }

      if (item.children) {
        const foundPath = getMenuItemFullPath(item.children, targetKey, currentPath)
        if (foundPath) {
          return foundPath
        }
      }
    }
    return null
  }

  const generateMenuItems = (items: MenuItem[]): any[] => {
    return items
      .filter(item => item.path)
      .map(item => ({
        key: item.key,
        label: item.label,
        children: item.children ? generateMenuItems(item.children) : undefined
      }))
  }

  return (
    <AntdLayout className={style.layoutContainer}>
      <Header className={style.layoutHeader}>
        <h3>My App</h3>
      </Header>
      <AntdLayout className={style.midLayout}>
        <Sider className={style.layoutSider} width={200} style={{ background: colorBgContainer }}>
          <Menu theme='light' mode='inline' items={generateMenuItems(menuItems)} onClick={handleMenuClick} />
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
