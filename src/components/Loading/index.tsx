import React from 'react'
import { Spin } from 'antd'
import style from './index.module.less'

interface LoadingProps {
  text?: string
}
const Loading: React.FC = (props: LoadingProps) => {
  const { text } = props
  return (
    <div className={style.loading}>
      <Spin size='large' />
      <p>{text || 'Loading...'}</p>
    </div>
  )
}

export default Loading
