<template>
  <nav class="header">
    <a
      href="/"
      class="brand-logo center"
      style="color: rgb(0, 156, 156); text-shadow: 1px 1px rgb(129, 129, 129); font-weight:medium"
    >heart.io</a>
    <a href="https://www.github.com/amolikvivian" class="waves-effect waves-dark btn code-btn">
      <i class="material-icons">code</i>
    </a>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  margin: auto;
  margin-top: 2%;
  max-width: 80%;
  box-shadow: 5px 5px 0px rgb(129, 129, 129);
  transition: 0.1s ease-out;
}
.code-btn {
  margin-left: 80%;
  display: flex;
  align-items: center;
}

@media screen and (min-width: 990px) {
  .btn-text {
    transition: ease-in-out 0.3s;
    font-size: 10px;
  }
}
</style>
