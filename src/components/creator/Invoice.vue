<template>
  <div class="container contains">
    <h3>Invoice History</h3>
    <hr />


  <div class="container payment">

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Reference</th>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>$1000</td>
          <td>Payment for Album 1</td>
          <td>
          <div class="action-buttons">
            <button class="btn fromSubmitBtnStyle mt-4 view">View</button>
            <button class="btn fromSubmitBtnStyle mt-4 download">Download</button>
          </div>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>$50</td>
          <td>Payment for Album 2</td>
          <td>
            <div class="action-buttons">
            <button class="btn fromSubmitBtnStyle mt-4 view">View</button>
            <button class="btn fromSubmitBtnStyle mt-4 download">Download</button>
          </div>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>$300</td>
          <td>Payment for Album 3</td>
          <td>
          <div class="action-buttons">
            <button class="btn fromSubmitBtnStyle mt-4 view">View</button>
            <button class="btn fromSubmitBtnStyle mt-4 download">Download</button>
          </div>
          </td>

        </tr>
      </tbody>
    </table>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

.view{
margin-right:10px;
}

.download{
margin-right:10px;
}

.action-buttons {
display: block;
margin: auto;
justify-content:center;
margin-top:-25px;

}

.fromSubmitBtnStyle{
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
  box-shadow: 2px 1px 5px #bf66ce;
}

.fromSubmitBtnStyle:hover{
  color: #9500ae;
  background: #f7ebfa;
  margin:auto;
  margin-right:10px;
}

.payment{
  margin-top:50px;
}

@media screen and (max-width: 768px) {
.fromSubmitBtnStyle{
 width: 100px;
 display: block;
}

  .contains{
  text-align: center;
  }
  }

</style>