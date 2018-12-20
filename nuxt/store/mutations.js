// 这里要注意不要在mutations里面进行异步操作，只是用来改变state的值
import * as TYPES from './mutation-types'
import Vue from 'vue'
export default {
  [TYPES.INFO](state, value) {
    Vue.set(state, 'info', value)
  }
}
