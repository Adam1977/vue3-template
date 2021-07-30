<template>
  <div class="layout-loading">
    <div class="loader">
      <div class="inner one"></div>
      <div class="inner two"></div>
      <div class="inner three"></div>
    </div>
    <p class="slogan">{{ text }}</p>
  </div>
</template>
<script>
export default {
  name: 'Loading'
}
</script>

<style lang="less" scoped>
html,
body {
  margin: 0;
  padding: 0;
}

.layout-loading {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: radial-gradient(
    circle farthest-corner at center,
    #3c4b57 0%,
    #1c262b 100%
  );
}

.layout-loading .loader {
  position: absolute;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  perspective: 800px;
}

.layout-loading .inner {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.layout-loading .inner.one {
  left: 0%;
  top: 0%;
  animation: rotate-one 1s linear infinite;
  border-bottom: 3px solid #efeffa;
}

.layout-loading .inner.two {
  right: 0%;
  top: 0%;
  animation: rotate-two 1s linear infinite;
  border-right: 3px solid #efeffa;
}

.layout-loading .inner.three {
  right: 0%;
  bottom: 0%;
  animation: rotate-three 1s linear infinite;
  border-top: 3px solid #efeffa;
}

.layout-loading .slogan {
  position: absolute;
  color: white;
  font-size: 14px;
  left: 50%;
  top: 50%;
  text-align: center;
  width: 200px;
  margin-left: -100px;
  font-style: italic;
  margin-top: 64px;
}

@keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>
