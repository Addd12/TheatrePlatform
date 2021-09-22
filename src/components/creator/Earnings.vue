<template>
  <div>
    <div class="container">
      <h3>Earnings</h3>
      <hr />
      <button class="btn fromSubmitBtnStyle mb-3">Add Bank</button>
      <span class="balanceHeadingStyle"
        >Balance: 30.00 <i class="fas fa-euro-sign"></i
      ></span>

      <div class="card text-center">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3 col-6 earningSumm-group noselect">
              <span class="earningSumm-style">Available for Withdrawal</span>
              <br />
              <i class="fas fa-euro-sign"></i> 30
            </div>
            <div
              class="col-sm-3 col-6 borderDivider earningSumm-group noselect"
            >
              <span class="earningSumm-style">Pending for Clearance</span>
              <br />
              <i class="fas fa-euro-sign"></i> 50
            </div>
            <div
              class="col-sm-3 col-6 borderDivider2 earningSumm-group noselect"
            >
              <span class="earningSumm-style">Withdrawn</span> <br />
              <i class="fas fa-euro-sign"></i> 100
            </div>
            <div
              class="col-sm-3 col-6 borderDivider1 earningSumm-group noselect"
            >
              <span class="earningSumm-style">Net Income</span> <br />
              <i class="fas fa-euro-sign"></i> 180
            </div>
          </div>
        </div>
      </div>

      <!-- <router-link :to="{name: 'crWithdrawal'}" tag="button" class="btn fromSubmitBtnStyle mt-4">Withdraw Now</router-link> -->
      <!-- <div>
     <transition name="modals">
      <div v-if="isOpen">
        <div class="overlay" @click.self="isOpen = false;">
          <div class = "modals">
          <h1>Modal heading</h1>
          <p>This my first modal using vue.js</p>
          </div>
        </div>
      </div>
    </transition>
      <button @click="isOpen=!isOpen">Open modal</button>
   </div>  -->
      <div id="app">
        <transition name="fade" appear>
          <div
            class="modal-overlay"
            v-if="showModal"
            @click="showModal = false"
          ></div>
        </transition>
        <transition name="slide" appear>
          <div class="modalss" v-if="showModal">

            <legend>Withdraw Money Now</legend>
            <hr>
            <fieldset disabled>
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">Balance</label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="€100"
              />
            </div>
          </fieldset>

        <div class="mb-3">
          <label class="my-1 mr-2" for="inlineFormCustomSelectPref">IBAN</label>
            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
              <option selected>Choose...</option>
              <option value="1">xxxx-xxxx-2345</option>
              <option value="2">xxxx-xxxx-5432</option>
              <option value="3">xxxx-xxxx-4354</option>
            </select>

        </div>


            <div class="mb-3">
              <label for="amount" class="form-label">Amount</label>
              <input
                type="text"
                id="amount"
                class="form-control"
                placeholder="€50"
              />
            </div>

          <div class="w3-container containerbox">
            <div style="overflow: hidden;">
              <p style="float: left;">Estimated Arrival Time</p>
              <b><p style="float: right;">2 Business Days</p></b>
            </div>
          </div>

          <div class= "buttonwithdraw">
            <button class="button btn closer fromSubmitBtnStyle mb-3" @click="showModal = false">Close</button>
            <button class="button btn fromSubmitBtnStyle mb-3" @click="showModal = false">Withdraw</button>
          </div>
          </div>
        </transition>
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
              <button
                  class="button withdrawnow btn fromSubmitBtnStyle mb-3"
                  @click="showModal = true"
              >
                Withdraw Now
              </button>
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
                  <td>
                    <a class="albuminTable" href="#"
                      ><img
                        src="https://i.ibb.co/sHjwTcF/albumcover.jpg"
                        alt="Cover"
                        width="70px;"
                      />
                      A Summer Spent Seaside</a
                    >
                  </td>
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
                  <td>
                    <a class="albuminTable" href="#"
                      ><img
                        src="https://i.ibb.co/sHjwTcF/albumcover.jpg"
                        alt="Cover"
                        width="70px;"
                      />
                      Album Title 2</a
                    >
                  </td>
                  <td>19 Feb, 2021</td>
                  <td>21 <i class="fas fa-euro-sign"></i></td>
                </tr>
                <tr>
                  <td>John Doe</td>
                  <td>Credited</td>
                  <td>
                    <a class="albuminTable" href="#"
                      ><img
                        src="https://i.ibb.co/sHjwTcF/albumcover.jpg"
                        alt="Cover"
                        width="70px;"
                      />
                      New Album Title</a
                    >
                  </td>
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
      isOpen: false,
      showModal: false,
      purchases: [],
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

legend {
  color: black;
  font-size: 30px;
  font-family: 'Signika', sans-serif;
  font-weight: bold;
  text-align: center;
  margin: auto;
  padding: 0;
  }

.containerbox{
  background-color:	#F5F5F5;
  margin: 0px auto;
  width: 100%;
  height: 35px;
  padding: 7px;
  border: none;
  position: relative;
  z-index: 10;
  border-radius: 3px;
}
.withdrawnow {
  margin-top: 20px;
}

.buttonwithdraw {

  margin-left: 80px;
  margin-top: 20px;
}

.closer{
  margin-right: 10px;
}

label {
  font-family: unset;
  font-size: 16px;
}

.modalss {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 16px;

  padding: 25px;
}



.modal-overlay {
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.6);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.1s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}

.albuminTable {
  color: black;
  text-decoration: none;
}
.albuminTable:hover {
  color: #9500ae;
}

#typeTrans {
  float: right;
}
.filterbarTrans select {
  border-radius: 10px;
  border: 1px solid #f7ebfa;
  font-size: 16px;
  padding: 5px;
  margin-right: 5px;
  cursor: pointer;
  outline: 0px;
  color: rgba(0, 0, 0, 0.7);
  background: white;
  box-shadow: 0px 0px 3px rgba(149, 0, 174, 0.7);
}
.filterbarTrans select:focus {
  border: 1px solid #9500ae;
}
.fromSubmitBtnStyle {
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
  box-shadow: 2px 1px 5px #bf66ce;
}

.fromSubmitBtnStyle:hover {
  color: #9500ae;
  background: #f7ebfa;
}
.balanceHeadingStyle {
  float: right;
  font-size: 16px;
}
.borderDivider {
  border-right: 2px solid rgba(0, 0, 0, 0.6);
  border-left: 2px solid rgba(0, 0, 0, 0.6);
}

.borderDividerLeft{
  border-left: 2px solid rgba(0, 0, 0, 0.6);
}
.borderDivider1{
  border-left: 2px solid rgba(0, 0, 0, 0.6);
}
.earningSumm-group .earningSumm-style {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.6);
}
.earningSumm-group {
  cursor: pointer;
}
.earningSumm-group:hover .earningSumm-style {
  color: #9500ae;
}
@media screen and (max-width: 576px) {
  .earningSumm-style {
    font-size: 16px;
  }
  .borderDivider {
    border-right: 0px;
    border-left: 2px solid rgba(0, 0, 0, 0.6);
  }
  .borderDivider1 {
    border-top: 2px solid rgba(0, 0, 0, 0.5);
    padding-top: 10px;
  }
  .borderDivider2 {
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
