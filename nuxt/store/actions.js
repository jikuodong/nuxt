import axios from '~/plugins/axios'
import * as TYPES from './mutation-types'
export default {
  getInfo({ commit }, payload) {
    axios.get('/yfudk/').then(res => {
      console.log('测试成功！')
      console.log(res)
      commit(TYPES.INFO, res.data)
    })
  }
}
