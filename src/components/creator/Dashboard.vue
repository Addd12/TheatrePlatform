<template>
  <div class="main-content">
    <div class="header bg-gradient-primary pb-8 pt-5 pt-md-8">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row">
            <div class="col-xl-3 col-lg-6">
              <div class="card card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">
                        Traffic
                      </h5>
                      <span class="h2 font-weight-bold mb-0">350,897</span>
                    </div>
                    <div class="col-auto">
                      <div
                        class="
                          icon icon-shape
                          bg-danger
                          text-white
                          rounded-circle
                          shadow
                        "
                      >
                        <i class="fas fa-chart-bar"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-muted text-sm">
                    <span class="text-success mr-2"
                      ><i class="fa fa-arrow-up"></i> 3.48%</span
                    >
                    <span class="text-nowrap">Since last month</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">
                        Earnings
                      </h5>
                      <span class="h2 font-weight-bold mb-0">$2,356</span>
                    </div>
                    <div class="col-auto">
                      <div
                        class="
                          icon icon-shape
                          bg-warning
                          text-white
                          rounded-circle
                          shadow
                        "
                      >
                        <i class="fas fa-chart-pie"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-muted text-sm">
                    <span class="text-danger mr-2"
                      ><i class="fas fa-arrow-down"></i> 3.48%</span
                    >
                    <span class="text-nowrap">Since last week</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">
                        Sales
                      </h5>
                      <span class="h2 font-weight-bold mb-0">924</span>
                    </div>
                    <div class="col-auto">
                      <div
                        class="
                          icon icon-shape
                          bg-yellow
                          text-white
                          rounded-circle
                          shadow
                        "
                      >
                        <i class="fas fa-users"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-muted text-sm">
                    <span class="text-warning mr-2"
                      ><i class="fas fa-arrow-down"></i> 1.10%</span
                    >
                    <span class="text-nowrap">Since yesterday</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card card-stats mb-4 mb-xl-0">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">
                        Performance
                      </h5>
                      <span class="h2 font-weight-bold mb-0">49,65%</span>
                    </div>
                    <div class="col-auto">
                      <div
                        class="
                          icon icon-shape
                          bg-info
                          text-white
                          rounded-circle
                          shadow
                        "
                      >
                        <i class="fas fa-percent"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-muted text-sm">
                    <span class="text-success mr-2"
                      ><i class="fas fa-arrow-up"></i> 12%</span
                    >
                    <span class="text-nowrap">Since last month</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    

<div class="container-fluid">
      <div class="row">
      <!-- <div class="col-sm-6" >
        <div class="cardearnings">
          <div class="card-body">
            <h2 class="card-title">Earning Performance</h2>
          </div>
              <vue3-chart-js
                :id="lineChart.id"
                :type="lineChart.type"
                :data="lineChart.data"
                @before-render="beforeRenderLogic"
              ></vue3-chart-js>
        </div>
        
      </div> -->
      



      <div class="col-sm-6" >
        <div class="cardearnings">
          <div class="card-body">
            <h2 class="card-title" style="float:left;">Sales</h2>
          </div>
              <h5 class="font-weight-bold mb-0">
              $4567
              <small class="text-success ml-2">
                <i class="fas fa-arrow-up fa-sm pr-1"></i>13,48%</small
              >
            </h5>
              <vue3-chart-js
                :id="lineChart.id"
                :type="lineChart.type"
                :data="lineChart.data"
                @before-render="beforeRenderLogic"
              ></vue3-chart-js>
      </div>
<!-- 
    <div class="row">

        </div>
        
        <div class="row">
          <div class="col-sm-4">
            <div class="column half_whole">
              <article class="card box_panel">
                <h2
                  class="card-title"
                  style="padding: auto; margin: auto; margin-top: 10px"
                >
                  Total Number of Sales
                </h2>
                <section class="card_body">
                  <div class="graph">
                    <div class="txt_warn graph_data txt_serif">25,000</div>
                  </div>
                </section>
                <section class="stats stats_row">
                  <div class="stats_item half_whole">
                    <div class="txt_faded">
                      <label class="txt_label space_n_b"> Daily </label>
                      <div class="txt_serif stats_item_number txt_success">
                        29,000
                      </div>
                    </div>
                  </div>
                  <div class="stats_item half_whole">
                    <div class="txt_faded">
                      <label class="txt_label space_n_b"> Weekly </label>
                      <div class="txt_serif stats_item_number txt_error">
                        22,000
                      </div>
                    </div>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </div>
      </div> -->
      </div>

      <div class="col-sm-3">
        <div class="cardearnings">
          <div class="card-body">
                        <h2 class="card-title" style="  border-bottom: 1px solid;">Activity</h2>
              <div class="contents">
                <!-- <div class="what" style="position:relative;">
                  <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" style="width:70px; height:70px; float:left;" class="image--cover">
                  <span style="position:absolute;top:50%; left:50%;transform:translate(-50%, -50%)">Someone followed you</span>
                </div> -->

              <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" style="width:40px; height:40px;" class="image--cover"><i>Someone followed you</i>
              <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" style="width:40px; height:40px;" class="image--cover"><i>Me followed you</i>
              <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" style="width:40px; height:40px;" class="image--cover"><i>Me followed you</i>
              <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" style="width:40px; height:40px;" class="image--cover"><i>Me followed you</i>
              <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" style="width:40px; height:40px;" class="image--cover"><i>Me followed you</i>
              <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" style="width:40px; height:40px;" class="image--cover"><i>Someone followed you</i>
              <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" style="width:40px; height:40px;" class="image--cover"><i>Me followed you</i>
              <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" style="width:40px; height:40px;" class="image--cover"><i>Me followed you</i>
              <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" style="width:40px; height:40px;" class="image--cover"><i>Me followed you</i>
              <img src="https://i.kinja-img.com/gawker-media/image/upload/gd8ljenaeahpn0wslmlz.jpg" style="width:40px; height:40px;" class="image--cover"><i>Me followed you</i>

              

            </div>

          </div>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="cardearnings">
          <div class="card-body">
            <h2 class="card-title">Sold Contents</h2>
          </div>
          <div class="barchart">
              <vue3-chart-js
                :id="barChart.id"
                :type="barChart.type"
                :data="barChart.data"
                @before-render="beforeRenderLogic"
              ></vue3-chart-js>
          </div>
        </div>
        
      </div>

    </div>

    <div class="row">
      <div class="col-md-8">
        <div class="cardearnings tablecontent">
          <div class="card-body">
            <div class="table-wrap">
              <table class="table">
                <h2 class="card-title">Contents</h2>
                <thead class="thead-primary">
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>markotto@email.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>jacobthornton@email.com</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>larrybird@email.com</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>John</td>
                    <td>Doe</td>
                    <td>johndoe@email.com</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Gary</td>
                    <td>Bird</td>
                    <td>garybird@email.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <!-- Page content -->
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
// import Chart from "chart.js"
export default {
  name: "CrDashBoard",
  components: {
    Vue3ChartJs,
  },




  setup() {
    const lineChart = {
      id: "line",
      type: "line",
      data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Earning Performance',
          backgroundColor: 'blue',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]},
    };

    const barChart = {
      id: "bar",
      type: "bar",
      data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Average Daily Viewers',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]},
    };

    return {
      lineChart,
      barChart,
    };
  },
};
</script>

<style scoped>

.tablecontent{
  background-color: pink;
}


/* .card-title{
    position:fixed;
    overflow:hidden;
} */

.contents {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1em;
  overflow-x: hidden;
  overflow-y: auto;

}

/* .card-body {
  display: grid;
  justify-items: left;
  
} */

.image--cover {
  width: 150px;
  height: 150px;
  border-radius: 50%;

  object-fit: cover;
  object-position: center right;
}

.wrapper {
  padding: 3rem 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}
.st0 {
  fill: #d7dde5;
}
.st1,
.knob_data {
  fill: #2eab6f;
  color: #2eab6f;
}

.graph {
  width: 80%;
  display: table;
  margin: 0 auto 0;
  position: relative;
  text-align: center;
  height: 12.5rem;
}

.graph_media {
  max-height: 12rem;
}

.graph_data,
.knob_data {
  font-size: 3rem;
}

.graph_data {
  display: table-cell;
  vertical-align: middle;
}

.card_division {
  border-top: 1px solid #d7dde5;
  padding: 0;
}

.card_full {
  max-height: none;
  height: auto;
}

.card_more_button {
  display: block;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.1;
  transition: transform 0.12s ease-out;
}

.card_more_button {
  border-radius: 0;
  border-left: 0;
  border-right: 0;
  border-bottom-color: #d7dde5;
  border-top-color: #d7dde5;
  background-color: #fff;
}

.card_more_button:after {
  content: "\e629";
}

.card_more_content {
  display: none;
  font-size: 0.865rem;
  line-height: 1.5;
  padding: 0.75rem;
}

.stats {
  width: 100%;
  margin-bottom: -2px;
  height: 5.75rem;
  display: table;
}

.stats_row > .stats_item {
  border-left: 1px solid #d7dde5;
  padding: 0.75rem 1.5rem;
  overflow: hidden;
  display: table-cell;
  vertical-align: middle;
  height: 100%;
}

.stats_row > .stats_item:first-child {
  border-left: 0;
}

.stats_row:after {
  content: " ";
  display: table;
  clear: both;
}

.stats_item_number {
  white-space: nowrap;
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.stats_item_number:before {
  display: none;
}

.txt_success {
  color: #2eab6f;
}

.txt_warn {
  color: #ddc728;
}

.txt_smaller {
  font-size: 0.75em;
}

.flipY {
  transform: scaleY(-1);
  border-bottom-color: #fff;
}

.txt_faded {
  opacity: 0.65;
}

.table-wrap {
  overflow-x: scroll;
}

.table {
  min-width: 100px !important;
  width: 100%;
  background: white;
}
.table thead.thead-primary {
  background: #1089ff;
}
.table thead th {
  border: none;
  padding: 20px 30px;
  font-size: 14px;
  color: #fff;
}
.table tbody tr {
  margin-bottom: 10px;
}
.table tbody th,
.table tbody td {
  border: none;
  padding: 20px 30px;
  border-bottom: 3px solid #f8f9fd;
  font-size: 14px;
}

/* Float four columns side by side */
.column {
  float: left;
  width: fit-content;
  padding: 10px 10px 80px 30px;
}

/* Remove extra left and right margins, due to padding in columns */
.row {
  margin: 0 -5px;

}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the counter cards */
.cardearnings {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  background-color: #fff;
  margin-left: 5px;
  margin-right: 5px;
  overflow-x: hidden;
  overflow-y: auto;
  height: 80%;
  margin-top: 20px;
    border-radius: 0.375rem;
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

:root {
  --blue: #5e72e4;
  --indigo: #5603ad;
  --purple: #8965e0;
  --pink: #f3a4b5;
  --red: #f5365c;
  --orange: #fb6340;
  --yellow: #ffd600;
  --green: #2dce89;
  --teal: #11cdef;
  --cyan: #2bffc6;
  --white: #fff;
  --gray: #8898aa;
  --gray-dark: #32325d;
  --light: #ced4da;
  --lighter: #e9ecef;
  --primary: #5e72e4;
  --secondary: #f7fafc;
  --success: #2dce89;
  --info: #11cdef;
  --warning: #fb6340;
  --danger: #f5365c;
  --light: #adb5bd;
  --dark: #212529;
  --default: #172b4d;
  --white: #fff;
  --neutral: #fff;
  --darker: black;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: Open Sans, sans-serif;
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@-ms-viewport {
  width: device-width;
}

figcaption,
footer,
header,
main,
nav,
section {
  display: block;
}

body {
  font-family: Open Sans, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  text-align: left;
  color: #525f7f;
  background-color: #f8f9fe;
}

[tabindex="-1"]:focus {
  outline: 0 !important;
}

h2,
h5 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

dfn {
  font-style: italic;
}

strong {
  font-weight: bolder;
}

a {
  text-decoration: none;
  color: #5e72e4;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

a:hover {
  text-decoration: none;
  color: #233dd2;
}

a:not([href]):not([tabindex]) {
  text-decoration: none;
  color: inherit;
}

a:not([href]):not([tabindex]):hover,
a:not([href]):not([tabindex]):focus {
  text-decoration: none;
  color: inherit;
}

a:not([href]):not([tabindex]):focus {
  outline: 0;
}

caption {
  padding-top: 1rem;
  padding-bottom: 1rem;
  caption-side: bottom;
  text-align: left;
  color: #8898aa;
}

button {
  border-radius: 0;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

input,
button {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button {
  text-transform: none;
}

button,
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

input[type="radio"],
input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
}

input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  -webkit-appearance: listbox;
}

legend {
  font-size: 1.5rem;
  line-height: inherit;
  display: block;
  width: 100%;
  max-width: 100%;
  margin-bottom: 0.5rem;
  padding: 0;
  white-space: normal;
  color: inherit;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: none;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

[hidden] {
  display: none !important;
}

h2,
h5,
.h2,
.h5 {
  font-family: inherit;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  color: #32325d;
}

h2,
.h2 {
  font-size: 1.25rem;
}

h5,
.h5 {
  font-size: 0.8125rem;
}

.container-fluid {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}

.row {
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  flex-wrap: wrap;
}

.col,
.col-auto,
.col-lg-6,
.col-xl-3,
.col-xl-6 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
  max-width: 100%;
  flex-basis: 0;
  flex-grow: 1;
}

.col-auto {
  width: auto;
  max-width: none;
  flex: 0 0 auto;
}

@media (min-width: 992px) {
  .col-lg-6 {
    max-width: 50%;
    flex: 0 0 50%;
  }
}

@media (min-width: 1200px) {
  .col-xl-3 {
    max-width: 25%;
    flex: 0 0 25%;
  }
  .col-xl-6 {
    max-width: 50%;
    flex: 0 0 50%;
  }
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.375rem;
  background-color: #fff;
  background-clip: border-box;
}

.card:hover {
  transition: all 0.2s ease-out;
  box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
  top: -4px;
  border: 1px solid #cccccc;
  background-color: white;
}

.card:hover:before {
  transform: scale(2.15);
}

.card-body {
  padding: 1.5rem;
  flex: 1 1 auto;
}

.card-title {
  margin-bottom: 1.25rem;
}

@keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }
  to {
    background-position: 0 0;
  }
}

.bg-info {
  background-color: #11cdef !important;
}

a.bg-info:hover,
a.bg-info:focus,
button.bg-info:hover,
button.bg-info:focus {
  background-color: #0da5c0 !important;
}

.bg-warning {
  background-color: #fb6340 !important;
}

a.bg-warning:hover,
a.bg-warning:focus,
button.bg-warning:hover,
button.bg-warning:focus {
  background-color: #fa3a0e !important;
}

.bg-danger {
  background-color: #f5365c !important;
}

a.bg-danger:hover,
a.bg-danger:focus,
button.bg-danger:hover,
button.bg-danger:focus {
  background-color: #ec0c38 !important;
}

.bg-default {
  background-color: #172b4d !important;
}

a.bg-default:hover,
a.bg-default:focus,
button.bg-default:hover,
button.bg-default:focus {
  background-color: #0b1526 !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.align-items-center {
  align-items: center !important;
}

@media (min-width: 1200px) {
  .justify-content-xl-between {
    justify-content: space-between !important;
  }
}

.shadow {
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.mr-2 {
  margin-right: 0.5rem !important;
}

.mt-3 {
  margin-top: 1rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mb-5 {
  margin-bottom: 3rem !important;
}

.pt-5 {
  padding-top: 3rem !important;
}

.pb-8 {
  padding-bottom: 8rem !important;
}

.m-auto {
  margin: auto !important;
}

@media (min-width: 768px) {
  .pt-md-8 {
    padding-top: 8rem !important;
  }
}

@media (min-width: 1200px) {
  .mb-xl-0 {
    margin-bottom: 0 !important;
  }
}

.text-nowrap {
  white-space: nowrap !important;
}

.text-center {
  text-align: center !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.font-weight-bold {
  font-weight: 600 !important;
}

.text-white {
  color: #fff !important;
}

.text-success {
  color: #2dce89 !important;
}

a.text-success:hover,
a.text-success:focus {
  color: #24a46d !important;
}

.text-warning {
  color: #fb6340 !important;
}

a.text-warning:hover,
a.text-warning:focus {
  color: #fa3a0e !important;
}

.text-danger {
  color: #f5365c !important;
}

a.text-danger:hover,
a.text-danger:focus {
  color: #ec0c38 !important;
}

.text-white {
  color: #fff !important;
}

a.text-white:hover,
a.text-white:focus {
  color: #e6e6e6 !important;
}

.text-muted {
  color: #8898aa !important;
}

@media print {
  *,
  *::before,
  *::after {
    box-shadow: none !important;
    text-shadow: none !important;
  }
  a:not(.btn) {
    text-decoration: underline;
  }
  p,
  h2 {
    orphans: 3;
    widows: 3;
  }
  h2 {
    page-break-after: avoid;
  }
  @page {
    size: a3;
  }
  body {
    min-width: 992px !important;
  }
}

figcaption,
main {
  display: block;
}

main {
  overflow: hidden;
}

.bg-yellow {
  background-color: #ffd600 !important;
}

a.bg-yellow:hover,
a.bg-yellow:focus,
button.bg-yellow:hover,
button.bg-yellow:focus {
  background-color: #ccab00 !important;
}

.bg-gradient-primary {
background-color: #f9c5d1;
background-image: linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%);
}

.bg-gradient-primary {
    background-color: #f9c5d1;
background-image: linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%);
}

@keyframes floating-lg {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes floating {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes floating-sm {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0px);
  }
}

[class*="shadow"] {
  transition: all 0.15s ease;
}

.text-sm {
  font-size: 0.875rem !important;
}

.text-white {
  color: #fff !important;
}

a.text-white:hover,
a.text-white:focus {
  color: #e6e6e6 !important;
}

[class*="btn-outline-"] {
  border-width: 1px;
}

.card-stats .card-body {
  padding: 1rem 1.5rem;
}

.main-content {
  position: relative;
}

@media (min-width: 768px) {
  .main-content .container-fluid {
    padding-right: 39px !important;
    padding-left: 39px !important;
  }
}

.footer {
  padding: 2.5rem 0;
  background: #f7fafc;
}

.footer .copyright {
  font-size: 0.875rem;
}

.header {
  position: relative;
}

.icon {
  width: 3rem;
  height: 3rem;
}

.icon i {
  font-size: 2.25rem;
}

.icon-shape {
  display: inline-flex;
  padding: 12px;
  text-align: center;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
}

.icon-shape i {
  font-size: 1.25rem;
}

@media (min-width: 768px) {
  @keyframes show-navbar-dropdown {
    0% {
      transition: visibility 0.25s, opacity 0.25s, transform 0.25s;
      transform: translate(0, 10px) perspective(200px) rotateX(-2deg);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
  @keyframes hide-navbar-dropdown {
    from {
      opacity: 1;
    }
    to {
      transform: translate(0, 10px);
      opacity: 0;
    }
  }
}

@keyframes show-navbar-collapse {
  0% {
    transform: scale(0.95);
    transform-origin: 100% 0;
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes hide-navbar-collapse {
  from {
    transform: scale(1);
    transform-origin: 100% 0;
    opacity: 1;
  }
  to {
    transform: scale(0.95);
    opacity: 0;
  }
}

p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.7;
}
</style>
