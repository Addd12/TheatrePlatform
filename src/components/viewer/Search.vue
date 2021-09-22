<template>
    <div>
      <h3 class="ml-1">Search</h3><hr>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-9">
            <form class="form" action="">
              <div class="form-group ml-sm-5">
                <input type="text" class="form-control" id="searchQry" placeholder="e.g. username, album title, category" name="searchQry">
              </div>
              <button type="submit" class="float-right btn btn-info shadow ml-2">Search</button>
            </form>
          </div>
          <div class="col-sm-3">
            <div class="card mt-3">
              <div class="card-body filtersStyle">
                  <strong>Filters</strong><hr>
                  <a href="#">People</a>
                  <hr>
                  <a href="#">Albums</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Search",
  mounted() {
    document.getElementById("searchQry").focus();
    document.getElementById("searchQry").style.width = "100%";
  }
}
</script>

<style scoped>
    #searchQry{
      width: 130px;
      -webkit-transition: width 0.4s ease-in-out;
      transition: width 0.4s ease-in-out;
    }
    #searchQry:focus{
      width: 100%;
    }
    .filtersStyle a{
      width: 100%;
      display: block;
    }
</style>