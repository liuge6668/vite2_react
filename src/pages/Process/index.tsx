import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const Precess: FC = () => {
  // 获取当前路径的Id
  return (
    <div>
      process
      <Outlet />
    </div>
  )
}

export default Precess
