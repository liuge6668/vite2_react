// src/layout/BasicLayout/index.tsx
import React, { FC } from 'react'
import Layout from 'components/Layout'
import { useNavigate } from 'react-router-dom'
import logoImg from 'assets/img/logo.png'

interface BasicLayoutProps {
  menuItems: any[]
  children?: React.ReactNode
}

interface MenuItem {
  key: string
  label: string
  path?: string
  children?: MenuItem[]
}
const BasicLayout: FC<BasicLayoutProps> = ({ children, menuItems }) => {
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

  const logo = {
    img: <img src={logoImg} alt='logo' />,
    text: 'Kaka Vite Template'
  }

  const layoutConfig = {
    menuItems: generateMenuItems(menuItems),
    menuClick: handleMenuClick,
    logo
  }

  return <Layout {...layoutConfig}>{children}</Layout>
}

export default BasicLayout
