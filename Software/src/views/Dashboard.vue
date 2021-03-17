<template>
  <div>
    <Header />
    <div>
      <Chart />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Chart from "@/components/Chart.vue";
export default {
  name: "Dashboard",
  components: {
    Header,
    Chart,
  },
};
</script>

<style>
body {
  background-color: #2c3e50;
}
</style>
