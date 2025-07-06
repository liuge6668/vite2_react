import React, { useCallback } from "react"
import { createGlobalStore } from "hox"

const useHox = (initData: any) => {
  const [data, setData] = React.useState(initData)
  const updateData = useCallback((newProps: any) => {
    setData((v: any) => ({ ...v, ...newProps }))
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
  return useHox({
    count: 0,
    name: "hox",
    age: 18
  })
})
