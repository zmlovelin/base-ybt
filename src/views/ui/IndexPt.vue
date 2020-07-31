<template>
    <div class="Index-pt">
        <div class="main-con">
            <div class="tooger-btn">
                <router-link tag="a" :to="'/home'">
                    <div class="kj-btn">砍价专区</div>
                </router-link>
                <div class="pt-btn active">拼团专区</div>
            </div>
            <div class="con-info">
                <ul class="info-kj">
                    <li class="info-btn">
                        <img src="./img/btn-pic1@2x2-pt.png" alt="">
                    </li>
                    <li class="info-item">
                        <img class="item-img" src="./img/bg-pic1@2x2-pt-bg(0).png" alt="">
                        <img class="img-pt" src="./img/pt-pop4.png" alt="">
                    </li>
                    <li class="info-item">
                        <img class="item-img" src="./img/bg-pic1@2x2-pt-bg(1).png" alt="">
                        <img class="img-pt" src="./img/pt-pop4.png" alt="">
                    </li>
                    <li class="info-item">
                        <img class="item-img" src="./img/bg-pic1@2x2-pt-bg(2).png" alt="">
                        <img class="img-pt" src="./img/pt-pop4.png" alt="">
                    </li>
                    <li class="info-item">
                        <img class="item-img" src="./img/bg-pic1@2x2-pt-bg(3).png" alt="">
                        <img class="img-pt" src="./img/pt-pop5.png" alt="">
                    </li>
                    <li class="info-item">
                        <img class="item-img" src="./img/bg-pic1@2x2-pt-bg(4).png" alt="">
                        <img class="img-pt" src="./img/pt-pop5.png" alt="">
                    </li>
                    <li class="info-item">
                        <img class="item-img" src="./img/bg-pic1@2x2-pt-bg(5).png" alt="">
                        <img class="img-pt" src="./img/pt-pop5.png" alt="">
                    </li>
                    <li class="info-item">
                        <img class="item-img" src="./img/bg-pic1@2x2-pt-bg(6).png" alt="">
                        <img class="img-pt" src="./img/pt-pop5.png" alt="">
                    </li>
                    <li class="info-item">
                        <img class="item-img" src="./img/bg-pic1@2x2-pt-bg(7).png" alt="">
                        <img class="img-pt" src="./img/pt-pop5.png" alt="">
                    </li>
                    <li class="info-item">
                        <img class="item-img" src="./img/bg-pic1@2x2-pt-bg(8).png" alt="">
                        <img class="img-pt" src="./img/pt-pop5.png" alt="">
                    </li>
                    <li class="info-item">
                        <img class="item-img" src="./img/bg-pic1@2x2-pt-bg(9).png" alt="">
                        <img class="img-pt" src="./img/pt-pop5.png" alt="">
                    </li>
                    <li class="info-item">
                        <img class="item-img" src="./img/bg-pic1@2x2-pt-bg(10).png" alt="">
                        <img class="img-pt" src="./img/pt-pop5.png" alt="">
                    </li>
                    <li class="info-item">
                        <img class="item-img" src="./img/bg-pic1@2x2-pt-bg(11).png" alt="">
                        <img class="img-pt" src="./img/pt-pop5.png" alt="">
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'IndexPt',
    created() {
        this.Setzmloverlin('我是林子墨')
    }
}
</script>
<style scoped>
    .main-con {
        width: 100%;
        height: 49.366667rem;
        background-image: url(./img/bg-pic1@2x2-pt.png);
        background-size: 100%;
        padding-top: 12.666667rem;
        box-sizing: border-box;
    }
    .con-info {
        height: 35.493333rem;
        background-image: url(./img/hd-pic1@2x2-pt2.png);
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
        position: relative;
    }
    .info-item .img-pt  {
        width: 1.706667rem;
        height: .973333rem;
        position: absolute;
        right: 1.1rem;
        top: 1.293333rem;
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
    .item-img {
        width: 100%;
        height: 2.56rem;
    }
    /* .tooger-btn {
        width: 8rem;
        height: 1.066667rem;
        margin: 0 auto;
        position: relative;
        top: .1rem;
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
        right: 0px;
        font-weight: 600;
        border-radius: .266667rem .266667rem 0 0;
    } */

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
        right: 0px;
        font-weight: 600;
        border-radius: .266667rem .266667rem 0 0;
    }
</style>
