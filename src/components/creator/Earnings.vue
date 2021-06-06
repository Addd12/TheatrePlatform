<template>
  <div>
    <div class="container">
      <h3>Earnings</h3>
      <hr>
      <button class="btn fromSubmitBtnStyle mb-3">Add Bank</button>
      <span class="balanceHeadingStyle">Balance: 30.00 <i class="fas fa-euro-sign"></i></span>

      <div class="card text-center">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3 col-6 earningSumm-group noselect">
              <span class="earningSumm-style">Available for Withdrawal</span> <br>
              <i class="fas fa-euro-sign"></i> 30
            </div>
            <div class="col-sm-3 col-6 borderDivider earningSumm-group noselect">
              <span class="earningSumm-style">Pending for Clearance</span> <br>
              <i class="fas fa-euro-sign"></i> 50
            </div>
            <div class="col-sm-3 col-6 borderDivider2 earningSumm-group noselect">
              <span class="earningSumm-style">Withdrawn</span> <br>
              <i class="fas fa-euro-sign"></i> 100
            </div>
            <div class="col-sm-3 col-6 borderDivider1 earningSumm-group noselect">
              <span class="earningSumm-style">Net Income</span> <br>
              <i class="fas fa-euro-sign"></i> 180
            </div>
          </div>
        </div>
      </div>
      <button class="btn fromSubmitBtnStyle mt-4">Withdraw Now</button>
      <h4 class="mt-3">All Transactions</h4>

      <div class="card">
        <div class="card-body">
          <div class="filterbarTrans mb-3">
            <select id="filterTrans" name="filterTrans">
              <option value="This Week">This Week</option>
              <option value="This Month">This Month</option>
              <option value="Past 90 days">Past 90 days</option>
              <option value="Past Year">Past Year</option>
              <option value="Custom range">Custom range</option>
            </select>

            <select id="typeTrans" name="typeTrans">
              <option value="Credited">Credited</option>
              <option value="Withdrawn">Withdrawn</option>
            </select>
          </div>
          <div class="table-responsive">
            <table class="table">
              <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Album</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Mike Bob</td>
                <td>Credited</td>
                <td><a class="albuminTable" href="#"><img src="http://sl.agilab.io/modules/demoimg/albumcover.jpg" alt="Cover" width="70px;"> A Summer Spent Seaside</a></td>
                <td>19 Feb, 2021</td>
                <td>21 <i class="fas fa-euro-sign"></i></td>
              </tr>
              <tr>
                <td>Own</td>
                <td>Withdrawn</td>
                <td>Cash Withdrawn</td>
                <td>20 Feb, 2021</td>
                <td>36 <i class="fas fa-euro-sign"></i></td>
              </tr>
              <tr>
                <td>Alice Blue</td>
                <td>Credited</td>
                <td><a class="albuminTable" href="#"><img src="http://sl.agilab.io/modules/demoimg/albumcover.jpg" alt="Cover" width="70px;"> Album Title 2</a></td>
                <td>19 Feb, 2021</td>
                <td>21 <i class="fas fa-euro-sign"></i></td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>Credited</td>
                <td><a class="albuminTable" href="#"><img src="http://sl.agilab.io/modules/demoimg/albumcover.jpg" alt="Cover" width="70px;"> New Album Title</a></td>
                <td>15 Feb, 2021</td>
                <td>15 <i class="fas fa-euro-sign"></i></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Earnings"
}
</script>

<style scoped>
.albuminTable{
  color:black;
  text-decoration:none;
}
.albuminTable:hover{
  color: #9500ae;
}

#typeTrans{
  float: right;
}
.filterbarTrans select{
  border-radius: 10px;
  border:1px solid #f7ebfa;
  font-size: 16px;
  padding: 5px;
  margin-right: 5px;
  cursor: pointer;
  outline:0px;
  color: rgba(0, 0, 0, 0.7);
  background: white;
  box-shadow: 0px 0px 3px rgba(149, 0, 174, 0.7);
}
.filterbarTrans select:focus{
  border:1px solid #9500ae;
}
.fromSubmitBtnStyle{
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
  box-shadow: 2px 1px 5px #bf66ce;
}

.fromSubmitBtnStyle:hover{
  color: #9500ae;
  background: #f7ebfa;
}
.balanceHeadingStyle{
  float: right;
  font-size: 16px;
}
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
  .filterbarTrans select{
    padding: 5px 3px;
  }
}
</style>