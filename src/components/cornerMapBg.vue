<template>
  <div class="corner-map-bg">
    <span class="top-left"></span>
    <span class="bottom-left"></span>
    <span class="top-right"></span>
    <span class="bottom-right"></span>
  </div>
</template>

<script>
export default {
  name: 'CornerMapBg'
}
</script>

<style lang="less">
.corner-map-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  box-sizing: border-box;
  background: rgba(54, 64, 124, 0.5);
  // border:1px solid #335b83;
  // background-image: linear-gradient(90deg, rgba(200, 0, 0, 0.15) 10%, rgba(0, 0, 0, 0) 10%), linear-gradient(rgba(200, 0, 0, 0.15) 10%, rgba(0, 0, 0, 0) 10%);
  background-image: linear-gradient(90deg, rgba(52, 64, 126, 1) 10%, rgba(0, 0, 0, 0) 10%), linear-gradient(rgba(52, 64, 126, 1) 10%, rgba(0, 0, 0, 0) 10%);
    background-size: 10px 10px;
  z-index: -1;
  border-top-left-radius: 12px;
  span {
    position: absolute;
    display: inline-block;
    // width: 10px;
    // height: 10px;
    // border-color: #2cda91;
    // border-style: solid;
    // border-width: 0;

    // @borderRadius: 0px;
    // @borderWidth: 2px;
    &.top-left {
      // border-left-width: @borderWidth;
      // border-top-width: @borderWidth;
      // border-top-left-radius: @borderRadius;
      left: 0;
      top: 0;
      width: 62px;
      height: 47px;
      background: url('~assets/img/cornerMapBg/leftRect.png') no-repeat 100% 100%;
    }
    &.bottom-left {
      // border-left-width: @borderWidth;
      // border-bottom-width: @borderWidth;
      // border-bottom-left-radius: @borderRadius;
      left: 0;
      top: 80px;
      width: 4px;
      height: 104px;
      background: url('~assets/img/cornerMapBg/verticalLine.png') no-repeat 100% 100%;
    }
    &.top-right {
      // border-right-width: @borderWidth;
      // border-top-width: @borderWidth;
      // border-top-right-radius: @borderRadius;
      right: 0;
      top: 0;
      width: 4px;
      height: 104px;
      background: url('~assets/img/cornerMapBg/verticalLine.png') no-repeat 100% 100%;
      transform: rotate(270deg) translate(50px, -75px);
    }
    &.bottom-right {
      // border-right-width: @borderWidth;
      // border-bottom-width: @borderWidth;
      // border-bottom-right-radius: @borderRadius;
      right: 0;
      bottom: 30px;
      width: 4px;
      height: 104px;
      background: url('~assets/img/cornerMapBg/verticalLine.png') no-repeat 100% 100%;
    }
  }
}
</style>
