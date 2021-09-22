<template>

  <div class="container">

    <h3>My Albums</h3>
    <hr>

    <div class="row">
      <div class="col-sm-4" v-for="(album, index) in albumModel" :key="index">
        <div class="card">
          <div class="card-body">
            <div class="overlayAlbumstyle">
              <img :src="album.imgsrc" class="img-thumbnail" alt="Cinque Terre" @click="goToDetails">
              <span class="albumTitle-style">{{ album.title }}</span><br>

              <div class="justify-content-center contentDetails-style">
                <span><i class="fas fa-image"></i> {{ album.noOfpic }}</span>
                <span><i class="fas fa-film"></i> {{ album.noOfvid }}</span>
                <span><i class="fas fa-heart"></i> {{ album.noOfrct }}</span>
                <span><i class="fas fa-euro-sign"></i> {{ album.albumPrice }}</span>
              </div>
              <div class="text-right mr-2 noselect">
                <div class="dropdown">
                  <span class="dropdown-toggle" type="button" data-toggle="dropdown"><span>{{ album.crateTime }}</span> <i class="fas fa-ellipsis-h"></i></span>
                  <ul class="dropdown-menu">
                    <a href="#"><i class="fas fa-link"></i> Copy Link</a>
                    <hr style="margin:0px;">
                    <a href="#" @click="goToEdit"><i class="far fa-edit"></i> Edit</a>
                    <!-- <button class="far fa-edit" @click="goToEdit">Edit</button> -->
                    <!-- <router-link :to="{name: 'crInvoice'}" @click="closeUsermenu"><i class="fas fa-file-invoice"></i>  Invoice</router-link> -->
                    <hr style="margin:0px;">
                    <a href="#"><i class="far fa-trash-alt"></i> Delete</a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-2">
      <button class="btn fromSubmitBtnStyle">Load More</button>
    </div>

    <!-- next row of recent contents -->
    <h3>Recent Contents</h3>
    <div class="col-sm-10">
      <div class="card">
        <div class="card-body">
          No Contents Found.
        </div>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: 'AllContents',
  data (){
    return {
      albumModel: [],
    };
  },
  mounted(){
    let testAlbum1 = {
      title: "A Summer Spent Seaside",
      noOfpic: 10,
      noOfvid: 5,
      noOfrct: 1,
      albumPrice: 20,
      crateTime: "3 minutes ago",
      imgsrc: 'https://i.ibb.co/sHjwTcF/albumcover.jpg'
    };
    let testAlbum2 = {
      title: "Album Title 2",
      noOfpic: 3,
      noOfvid: 8,
      noOfrct: 3,
      albumPrice: 10,
      crateTime: "43 minutes ago",
      imgsrc: 'https://i.ibb.co/sHjwTcF/albumcover.jpg'
    };
    let testAlbum3 = {
      title: "New Album Title 3",
      noOfpic: 25,
      noOfvid: 15,
      noOfrct: 33,
      albumPrice: 40,
      crateTime: "3 hours ago",
      imgsrc: 'https://i.ibb.co/sHjwTcF/albumcover.jpg'
    };
    this.albumModel.push(testAlbum1);
    this.albumModel.push(testAlbum2);
    this.albumModel.push(testAlbum3);
  },
   methods:{
   goToEdit(){
   this.$router.push('../modules/editalbum'); 
      },

   goToDetails(){
    this.$router.push('../modules/detailsPage'); 
   }
  }
}
</script>

<style scoped>

.img-thumbnail{
  cursor: pointer;
}

.card{
  border: 0px;

}
.card-body{
  padding: 10px 5px;
}
.albumTitle-style{
  font-size: 18px;
  text-align: justify;
  font-weight: bold;
  text-justify: inter-word;
}
.justify-content-center{
  display: flex;
  justify-content: space-around !important;
}
.contentDetails-style{
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
}
.dropdown-toggle::after {
  display: inline-block;
  content: none;
}
.dropdown a{
  display:inline-block;
  width: 100%;
  font-size: 15px;
  padding-left: 20px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.9);
}

.dropdown a:hover{
  background: #f7ebfa;
  color: #9500ae;
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
</style>