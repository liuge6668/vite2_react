import React, { useEffect } from "react"
import useHox from "models/useHox"
import { useRequest, useMount } from "ahooks"
import { Button } from "antd"
import { getHoxData } from "../../api/home"
import style from "./styles.module.css"

const HomePage: React.FC = () => {
  const [useGlocalStore] = useHox;
  const { data, updateData, recoverData } = useGlocalStore();
  const { count } = data
  const { run } = useRequest(getHoxData, {
    manual: true,
    formatResult(res:any) {
      return {
        data: res.data
      }
    },
    onSuccess(res:any) {
      console.log(res)
      updateData(res.data)
    }
  })
  
  useMount(() => {
    run()
  })

  return (
    <div className={style.homeContainer}>
      <h1>首页</h1>
      <p>欢迎来到首页！</p>
      <span>
        <p>count: {data.count}</p>
        <span>
          <Button
            onClick={() => {
              updateData({ count: count + 1 })
            }}
          >
            +
          </Button>
          <Button
            onClick={() => {
              updateData({ count: count - 1 })
            }}
          >
            -
          </Button>
          <Button
            onClick={() => {
              recoverData()
            }}
          >
            recover
          </Button>
          <Button onClick={run}>req</Button>
        </span>
      </span>
    </div>
  )
}

export default HomePage
