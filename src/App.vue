<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
    box-sizing: border-box;
  }

  * {
    outline: none;
    box-sizing: border-box;
  }

  body {
    margin: 0px;
    height: 100vh;
    width: 100vw;
    color: #fff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  ul,
  li,
  dl,
  dt,
  dd,
  p,
  div,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a,
  a:hover {
    text-decoration: none;
  }

  #app {
    height: 100%;
    width: 100%;
  }
</style>
<style src="assets/iconfont/iconfont.css"></style>