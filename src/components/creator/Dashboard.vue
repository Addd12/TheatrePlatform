<template>
  <div>
    <div class="container">
      <h3>Dashboard</h3>
      <hr>
      <div class="card text-center">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3 col-6 earningSumm-group noselect">
              <span class="earningSumm-style">Earning Today</span> <br>
              <i class="fas fa-euro-sign"></i> 30
            </div>
            <div class="col-sm-3 col-6 borderDivider earningSumm-group noselect">
              <span class="earningSumm-style">Earning Yesterday</span> <br>
              <i class="fas fa-euro-sign"></i> 50
            </div>
            <div class="col-sm-3 col-6 borderDivider2 earningSumm-group noselect">
              <span class="earningSumm-style">Earning This Week</span> <br>
              <i class="fas fa-euro-sign"></i> 100
            </div>
            <div class="col-sm-3 col-6 borderDivider1 earningSumm-group noselect">
              <span class="earningSumm-style">Total Sold</span> <br>
              10
            </div>
          </div>
        </div>
      </div>
      <h3 class="mt-3">Sales Chart</h3>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: "CrDashBoard"
}
</script>

<style scoped>
.borderDivider{
  border-right: 2px solid rgba(0, 0, 0, 0.6);
  border-left: 2px solid rgba(0, 0, 0, 0.6);
}
.borderDivider1{
  border-left: 2px solid rgba(0, 0, 0, 0.6);
}
.earningSumm-group .earningSumm-style{
  font-size: 18px;
  color: rgba(0, 0, 0, 0.6);
}
.earningSumm-group{
  cursor: pointer;
}
.earningSumm-group:hover .earningSumm-style{
  color: #9500ae;
}
@media screen and (max-width: 576px) {
  .earningSumm-style{
    font-size: 16px;
  }
  .borderDivider{
    border-right: 0px;
    border-left: 2px solid rgba(0, 0, 0, 0.6);
  }
  .borderDivider1{
    border-top: 2px solid rgba(0, 0, 0, 0.5);
    padding-top: 10px;
  }
  .borderDivider2{
    border-top: 2px solid rgba(0, 0, 0, 0.5);
    padding-top: 10px;
  }
}
</style>