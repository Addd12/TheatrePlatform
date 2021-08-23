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
      <h4 class="mt-3">Earning Resume</h4>
      <div class="card text-center">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-4 col-6 earningSumm-group noselect">
              <span class="earningSumm-style">Yesterday</span> <br>
              <i class="fas fa-euro-sign"></i> 30
            </div>
            <div class="col-sm-4 col-6 borderDivider earningSumm-group noselect">
              <span class="earningSumm-style">Today</span> <br>
              <i class="fas fa-euro-sign"></i> 50
            </div>
            <div class="col-sm-4 col-6 borderDivider2 earningSumm-group noselect earningweek">
              <span class="earningSumm-style">Week</span> <br>
              <i class="fas fa-euro-sign"></i> 100
            </div>
          </div>

          <div class="row">

            <div class="col-sm-6 col-6 earningSumm-group noselect">
              <span class="earningSumm-style">Month</span> <br>
              <i class="fas fa-euro-sign"></i> 30
            </div>
            <div class="col-sm-4 col-6 borderDividerLeft earningSumm-group noselect">
              <span class="earningSumm-style">Life Long</span> <br>
              <i class="fas fa-euro-sign"></i> 100
            </div>
          </div>
          
        </div>
      </div>
        <br>
        <br>
       <div class="card text-center">
        <div class="card-body">
          <div class="row">

            <div class="col-sm-6 col-6 earningSumm-group noselect">
              <button class="btn fromSubmitBtnStyle mt-4">Withdraw Now</button>
            </div>
            <div class="col-sm-4 col-6 borderDividerLeft earningSumm-group noselect">
              <button class="btn fromSubmitBtnStyle mt-4">More Statistics</button>
            </div>
          </div>
          
        </div>
      </div>
      <h4 class="mt-3">Purchases Resume</h4>
      <div class="card text-center">
        <div class="card-body">
      <div class="table-responsive">
        <table class="table">
           <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Viewer</th>
      <th scope="col">Amount</th>
      <th scope="col">Album</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Category</th>
      <th scope="col">Feedback</th>
    </tr>
  </thead>
  <tbody v-for="(purchase, index) in purchases" :key="index">
    <tr>
      <th scope="row">{{purchase.num}}</th>
      <td>{{purchase.viewer}}</td>
      <td>{{purchase.amount}}</td>
      <td>{{purchase.album}}</td>
      <td>{{purchase.date}}</td>
      <td>{{purchase.time}}</td>
      <td>{{purchase.category}}</td>
      <td>{{purchase.feedback}}</td>
    </tr>
  </tbody>
        </table>
      </div>
        </div>
      </div>
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
  name: "Earnings",
  name2: 'TableOfPurchases',
  data (){
    return {
      purchases: []
    };
  },

  mounted(){
    let testPurchase1 = {
      num: 1,
      viewer: "A Summer Spent Seaside",
      amount: 10,
      album: "A Summer Spent Seaside",
      date: "19/08/2021",
      time: "3 minutes ago",
      category: "3 minutes ago",
      feedback: 'Great job'
    };
      let testPurchase2 = {
      num: 2,
      viewer: "A Summer Spent Seaside",
      amount: 10,
      album: "A Summer Spent Seaside",
      date: "19/08/2021",
      time: "3 minutes ago",
      category: "3 minutes ago",
      feedback: 'Great job'
    };
      let testPurchase3 = {
      num: 3,
      viewer: "A Summer Spent Seaside",
      amount: 10,
      album: "A Summer Spent Seaside",
      date: "19/08/2021",
      time: "3 minutes ago",
      category: "3 minutes ago",
      feedback: 'Great job'
    };
      let testPurchase4 = {
      num: 4,
      viewer: "A Summer Spent Seaside",
      amount: 10,
      album: "A Summer Spent Seaside",
      date: "19/08/2021",
      time: "3 minutes ago",
      category: "3 minutes ago",
      feedback: 'Great job'
    };
      let testPurchase5 = {
      num: 5,
      viewer: "A Summer Spent Seaside",
      amount: 10,
      album: "A Summer Spent Seaside",
      date: "19/08/2021",
      time: "3 minutes ago",
      category: "3 minutes ago",
      feedback: 'Great job'
    };
      let testPurchase6 = {
      num: 6,
      viewer: "A Summer Spent Seaside",
      amount: 10,
      album: "A Summer Spent Seaside",
      date: "19/08/2021",
      time: "3 minutes ago",
      category: "3 minutes ago",
      feedback: 'Great job'
    };
      let testPurchase7 = {
      num: 7,
      viewer: "A Summer Spent Seaside",
      amount: 10,
      album: "A Summer Spent Seaside",
      date: "19/08/2021",
      time: "3 minutes ago",
      category: "3 minutes ago",
      feedback: 'Great job'
    };
      let testPurchase8 = {
      num: 8,
      viewer: "A Summer Spent Seaside",
      amount: 10,
      album: "A Summer Spent Seaside",
      date: "19/08/2021",
      time: "3 minutes ago",
      category: "3 minutes ago",
      feedback: 'Great job'
    };
      let testPurchase9 = {
      num: 9,
      viewer: "A Summer Spent Seaside",
      amount: 10,
      album: "A Summer Spent Seaside",
      date: "19/08/2021",
      time: "3 minutes ago",
      category: "3 minutes ago",
      feedback: 'Great job'
    };
      let testPurchase10 = {
      num: 10,        
      viewer: "A Summer Spent Seaside",
      amount: 10,
      album: "A Summer Spent Seaside",
      date: "19/08/2021",
      time: "3 minutes ago",
      category: "3 minutes ago",
      feedback: 'Great job'
    };


    this.purchases.push(testPurchase1);
    this.purchases.push(testPurchase2);
    this.purchases.push(testPurchase3);
    this.purchases.push(testPurchase4);
    this.purchases.push(testPurchase5);
    this.purchases.push(testPurchase6);
    this.purchases.push(testPurchase7);
    this.purchases.push(testPurchase8);
    this.purchases.push(testPurchase9);
    this.purchases.push(testPurchase10);

}
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
.borderDividerLeft{
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

  .earningweek{
    flex: 0 0 100%;
    max-width: 100%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
  }

  .filterbarTrans select{
    padding: 5px 3px;
  }
}
</style>