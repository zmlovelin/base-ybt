<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <div>{{ count }}</div>
    <div style="width: 100px;height: 50px;background: #42b983;line-height: 50px" @click="getAdd">
      点击佳佳
    </div>
    <div style="width: 100px;height: 50px;background: pink;line-height: 50px" @click="jj">
      点击渐渐
    </div>
    <div style="width: 100px;height: 50px;background: pink;line-height: 50px" @click="asynchronous">
      异步加载
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      msg: this.$store.state.count
    }
  },
  components: {

  },
  watch: {
    count (event) {
      console.log(event);
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    getAdd() {
      this.$store.commit('add')
      this.msg = this.$store.state.count
    },
    jj() {
      this.$store.commit('jj')
      this.msg = this.$store.state.count
    },
    // 异步处理
    asynchronous() {
      this.$store.dispatch('incrementAsync')
    }
  }
}
</script>
