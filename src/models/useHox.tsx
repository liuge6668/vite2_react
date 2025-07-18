import { useCallback, useState } from 'react'
import { createGlobalStore } from 'hox'

// 定义状态类型
interface HoxState {
  count: number
  name: string
  age: number
}

// 初始状态
const initData: HoxState = { count: 10, name: 'hox', age: 18 }

const useHox = () => {
  const [data, setData] = useState<HoxState>(initData)

  const updateData = useCallback((newProps: Partial<HoxState>) => {
    setData(v => ({ ...v, ...newProps }))
  }, [])

  const recoverData = useCallback(() => {
    setData(initData)
  }, [])

  return {
    data,
    updateData,
    recoverData
  }
}

export default createGlobalStore(() => {
  return useHox()
})
