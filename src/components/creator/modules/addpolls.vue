<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-body">
        <h5 id="addPollTitleStyle">Add Poll</h5>
        <form action="#">
          <div class="row">
            <div class="col-sm-10 offset-sm-1">
              <div class="form-group">
                <label for="albumtitle">Poll Question:</label>
                <input type="text" class="form-control">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8 offset-sm-2">
              <div class="input-group mb-3" v-for="(polloption, index) in pollModel" :key="index">
                <div class="input-group-prepend">
                  <span class="input-group-text">Poll {{ index+1 }}:</span>
                </div>
                <input type="text" class="form-control" v-model="polloption.option" placeholder="Your Option">
                <div class="input-group-append">
                  <span class="input-group-text rmvBtnStyle" v-on:click="removeOptionFld(index)"><i class="fas fa-times"></i></span>
                </div>
              </div>

              <a class="mt-3 ml-1 btn fromSubmitBtnStyle" v-on:click="addOptionfld"><i class="fas fa-plus"></i> Add Option</a>
            </div>
          </div>
        </form>
      </div>
    </div>
    <button class="mt-3 mr-1 btn fromSubmitBtnStyle" style="float:right;">Make Poll</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      pollModel: [],
    };
  },
  mounted(){
    this.pollModel.push({'option': ""});
  },
  methods :{
    addOptionfld: function(){
      if(this.pollModel.length<7)
        this.pollModel.push({'option': ""});
    },
    removeOptionFld: function(index){
      if(this.pollModel.length>1)
        this.pollModel.splice(index, 1);
    },
  },

}
</script>

<style scoped>

.input-group-text{
  cursor: default;
}

.rmvBtnStyle{
  cursor: pointer;
}

.rmvBtnStyle:hover{
  color: #9500ae;
  background: #f7ebfa;
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

#addPollTitleStyle{
  font-weight: bold;
  color: rgba(0, 0, 0, 0.5);
}

 /*mobile style responsive*/
@media screen and (max-width: 576px) {
  .container-fluid, .container{
    padding-right: 2px;
    padding-left: 2px;
  }

  .input-group-text{
    padding: 0.375rem 0.45rem;
  }
}
</style>