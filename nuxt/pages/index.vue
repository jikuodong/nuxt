<template>
  <div>
    <div>
      <h1>{{ info.name }}</h1>
    </div>
    <Page :total="100"/>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  components: {
    axios
  },
  async asyncData() {
    let { data } = await axios.get('/yfudk/')
    console.log(data)
    return {
      info: data
    }
  }
}
</script>

<style scoped>
</style>
