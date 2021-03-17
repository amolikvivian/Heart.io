<template>
  <div class="home">
    <apexchart :options="chartOptions" :series="series"></apexchart>

    <div class="footer">
      <a title="Request Chart" @Click="updateChart" class="button-link">
        <p class="bottom-text">Update</p>
        <i class="small material-icons icon">insert_chart</i>
      </a>
      <a href="/home" title="Sign Out" class="button-link">
        <p class="bottom-text">Exit App</p>
        <i class="small material-icons icon">exit_to_app</i>
      </a>
      <a title="Profile" class="button-link">
        <p class="bottom-text">Profile</p>
        <i class="small material-icons icon">account_circle</i>
      </a>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  components: {
    apexchart: VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "Basic",
          type: "line",
          dropShadow: {
            enabled: true,
            top: 2,
            left: 3,
            blur: 1,
            opacity: 0.5,
          },
        },
        theme: {
          palette: "palette4",
        },
        dataLabels: {
          enabled: true,
        },
        title: {
          text: "BPM",
        },
      },
      series: [
        {
          name: "BPM",
          data: [
            { x: "05-08", y: 54 },
            { x: "06-08", y: 62 },
            { x: "07-28", y: 78 },
            { x: "08-28", y: 75 },
            { x: "09-28", y: 74 },
            { x: "10-28", y: 73 },
          ],
        },
      ],
    };
  },
  methods: {
    updateChart() {
      const max = 90;
      const min = 60;
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });

      this.series = [
        {
          data: newData,
        },
      ];
    },
  },
};
</script>

<style>
.apexcharts-canvas {
  margin: auto;
  width: 500px;
  color: teal;
  padding-top: 5px;
  padding-right: 12px;
  background-color: whitesmoke;
  border-radius: 10px;

  transition: 0.3s ease-in-out;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: auto;
  margin-bottom: 1%;
  color: white;
  background-color: inherit;
  text-align: center;
}
.button-link {
  display: inline;
  color: white;
  cursor: pointer;
}
.icon {
  color: white;
  transition: 0.4s ease-in-out;
}
.icon:hover {
  transition: 0.4s ease-in-out;
  color: rgb(129, 129, 129);
  text-shadow: 1px 1px whitesmoke;
}

@media screen and (max-width: 600px) {
  .apexcharts-canvas {
    transition: 0.3s ease-in-out;
    width: 300px;
  }
}
</style>