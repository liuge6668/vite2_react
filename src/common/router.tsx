// src/routers.tsx
import React, { lazy, Suspense, FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from '../components'
import Loading from 'components/Loading'

// 定义路由配置类型
interface RouteConfig {
  path?: string
  element?: React.LazyExoticComponent<React.FC>
  key: string
  children?: RouteConfig[]
  layout?: boolean
  hideInMenu?: boolean
  hideMenu?: boolean
  label?: string
  index?: boolean
}

const routes: RouteConfig[] = [
  {
    path: '/login',
    element: lazy(() => import('../pages/Login')),
    key: 'login',
    layout: false
  },
  {
    path: '/',
    element: lazy(() => import('../pages/Home')),
    key: 'home',
    label: '首页'
  },
  {
    path: '/about',
    element: lazy(() => import('../pages/About')),
    key: 'about',
    label: '关于'
  },
  {
    path: '/process',
    element: lazy(() => import('../pages/Process')),
    key: 'process',
    label: '流程',
    children: [
      {
        path: 'start',
        element: lazy(() => import('../pages/Process/Start')),
        key: 'process-start',
        label: '开始',
        layout: false // 显式设置为 false
      },
      {
        path: 'end',
        element: lazy(() => import('../pages/Process/End')),
        key: 'process-end',
        label: '结束',
        layout: false // 显式设置为 false
      }
    ]
  },
  {
    path: '/api',
    key: 'api'
  },
  {
    path: '*',
    element: lazy(() => import('../pages/NotFound')),
    key: 'notFound',
    hideInMenu: true,
    hideMenu: true
  }
]

const getLayoutMenuItems = (routes: RouteConfig[]) => {
  return routes.filter(route => route.layout !== false)
}

const menuItems = getLayoutMenuItems(routes)

// 定义路由渲染组件
const AppRoutes: FC = () => {
  const renderRoutes = (routeList: RouteConfig[] | undefined, parentLayout?: boolean) => {
    if (!routeList) return null

    return routeList.map(route => {
      const Element = route.element

      // 构造路由的 element 内容
      const routeElement = Element ? (
        <Suspense fallback={<Loading />} key={route.path}>
          <Element />
        </Suspense>
      ) : null

      // 确定当前路由是否使用 Layout 组件包裹
      const useLayout = route.layout !== false && (parentLayout ?? true)

      return (
        <Route key={route.key} path={route.path} element={useLayout ? <Layout menuItems={menuItems}>{routeElement}</Layout> : routeElement}>
          {route.children && renderRoutes(route.children, route.layout)} {/* 传递当前路由的 layout 属性 */}
        </Route>
      )
    })
  }

  return (
    <Routes>
      {renderRoutes(routes)}
      <Route path='*' element={<Navigate to='/404' replace />} />
    </Routes>
  )
}

export { AppRoutes, menuItems }
