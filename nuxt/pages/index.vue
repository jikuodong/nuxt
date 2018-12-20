<template>
  <div>
    <div>
      <h1>{{ info.name }}</h1>
      <h1>{{ info }}</h1>
      <h1>{{ info1 }}</h1>
      <button @click="getInfo">测试</button>
    </div>
    <Page :total="100"/>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import { mapGetters } from 'vuex'
export default {
  components: {
    axios
  },
  async asyncData() {
    let { data } = await axios.get('/yfudk/')
    console.log(data)
    return {
      info1: data
    }
  },
  computed: {
    ...mapGetters(['info'])
  },
  methods: {
    getInfo() {
      let payload = {
        vue: this
      }
      this.$store.dispatch('getInfo', payload)
    }
  }
}
</script>

<style scoped>
</style>
