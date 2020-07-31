<template>
  <div class="home">
    <div class="main-con">
      <div class="tooger-btn">
        <div class="kj-btn active">砍价专区</div>
        <router-link tag="a" :to="'/indexPt'">
          <div class="pt-btn">拼团专区</div>
        </router-link>

      </div>
      <div class="con-info">
        <ul class="info-kj">
          <li class="info-btn">
            <img src="./img/btn-pic1@2x2.png" alt="">
          </li>
          <li class="info-item">
            <img src="./img/pic1@2x2-bg(0).png" alt="">
          </li>
          <li class="info-item">
            <img src="./img/pic1@2x2-bg(1).png" alt="">
          </li>
          <li class="info-item">
            <img src="./img/pic1@2x2-bg(2).png" alt="">
          </li>
          <li class="info-item">
            <img src="./img/pic1@2x2-bg(3).png" alt="">
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  created() {
    // 存储状态
    // this.Setzmloverlin('我是zmloverlin')
    // 取状态
    console.log(this.Getzmloverlin);

  }
}
</script>
<style scoped>

  .main-con {
    width: 100%;
    height: 33.466667rem;
    background-image: url(./img/bg-pic1@2x2.png);
    background-size: 100%;
    padding-top: 12.666667rem;
    box-sizing: border-box;
  }
  .con-info {
    height: 19.64rem;
    background-image: url(./img/hd-pic1@2x2.png);
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .tooger-btn {

  }
  .info-kj {
    margin-top: .1rem;
  }
  .info-item {
    width: 100%;
    padding: 0 .666667rem;
    margin-bottom: .133333rem;
  }
  .info-item img  {
    width: 100%;
  }
  .info-btn {
    padding: .5rem 0 .3rem;
  }
  .info-btn img{
    width: 6.64rem;
    height: .986667rem;
    display: block;
    margin: 0 auto;
  }
  .tooger-btn {
    width: 8rem;
    height: 1.066667rem;
    margin: 0 auto;
    position: relative;
    top: .256rem;
    display: flex;
  }
  .kj-btn {
    width: 4rem;
    height: 100%;
    background-color: #0a77ed;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0px;
    border-radius: .266667rem 0 0 0;
    color: #fff;
    font-size: 0.38rem;
  }
  .pt-btn {
    width: 4rem;
    height: 100%;
    background-color: #0a77ed;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0px;
    border-radius: 0 .266667rem 0 0;
    color: #fff;
    font-size: 0.38rem;
  }
  .active {
    width: 4.5rem;
    height: 130%;
    position: absolute;
    background-color: #c7edff;
    color: #167df5;
    top: -0.21rem;
    font-size: .466667rem;
    z-index: 10;
    left: 0px;
    font-weight: 600;
    border-radius: .266667rem .266667rem 0 0;
  }
</style>
