import mock from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/getHoxData',
    response: () => {
      return {
        data: {
          count: 100,
          age: mock.mock('@integer(5, 88)')
        },
        success: true,
        errorData: null,
        code: 200
      }
    }
  }
] as MockMethod[]
