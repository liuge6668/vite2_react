// src/routers.tsx
import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../components'

// 懒加载页面组件
const HomePage = lazy(() => import('../pages/Home'))
const AboutPage = lazy(() => import('../pages/About'))
const NotFoundPage = lazy(() => import('../pages/NotFound')) // 404 页面

// 定义并导出路由
export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback='Loading...'>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/api/*' element={null} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Suspense>
  )
}
