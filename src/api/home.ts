import service from '../utils/request'

const getHoxData = () => {
  return service.get('/getHoxData')
}

export { getHoxData }
