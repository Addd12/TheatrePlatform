<template>
  <div class="container">
  <div class="container-fluid">
    <div>
      <h3>Profile</h3>
      <div class="mb-2 totalprofile">
      <img src="https://images.unsplash.com/photo-1608408843596-b3119736057c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2095&q=80" class="img-fluid" id="cover" alt="Cover">
      
      <button type="button" class="btn changecover" id="changecoverid" data-toggle="modal" data-target="#coverPhoto"><i class="fa fa-camera"></i></button>
      <div class="dropleft">
      <button type="button" class="dropdown-toggle settingaccount" id="settingaccountid" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fa fa-ellipsis-h"></i>
      </button>
      <div class="dropdown-menu ">
         <button class="dropdown-item" data-toggle="modal" data-target="#reportAccount"><i class="fa fa-flag" aria-hidden="true"></i>Report Account</button>
         <button class="dropdown-item" data-toggle="modal" data-target="#rateComment"><i class="fa fa-star" aria-hidden="true"></i>Rate & Comment</button>
      </div>
      </div>
        <!-- Modal for Report Account -->
        <div class="modal fade" id="reportAccount" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Report Account</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form>
              <div class="modal-body">
              <div id="reporttitle">
               Help us understand the problem. What issue with ⁦this account are you reporting?
              </div>
              <br>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                  It’s suspicious or spam
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  It appears their account is hacked
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">                 
                Their profile info and/or images include abusive or hateful content
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  It appears their account is hacked
                </label>
              </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" style="background:#bf66ce">Done</button>
              </div>
              </form>
            </div>
          </div>
        </div> 

           <!-- Modal for Rate Comment -->
        <div class="modal fade" id="rateComment" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Rate & Comment</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form>
              <div class="modal-body">
              <div id="coverphotoupload">
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon3">Rate</span>
                </div>
                <input type="number" class="form-control" id="basic-url" aria-describedby="basic-addon3" name="no_of_day" placeholder="4" min="1" max="5">
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon3">Title</span>
                </div>
                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
              </div>
              <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">Comment</span>
              </div>
              <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
              </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" style="background:#bf66ce">Done</button>
              </div>
              </form>
            </div>
          </div>
        </div> 
      <i class="fa fa-certificate certificate" aria-hidden="true"></i>
      <i class="fa fa-check certificatetick" aria-hidden="true"></i>
      <!-- Modal for Profile Picture -->
        <div class="modal fade" id="coverPhoto" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Cover Photo</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form>
              <div class="modal-body">
              <div id="coverphotoupload">
                <input type="file" @change="onFileChange" accept="image/*"/>
                <div id="preview">
                  <img v-if="url" :src="url" class="preview"/>
                </div>
              </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" style="background:#bf66ce">Save</button>
              </div>
              </form>
            </div>
          </div>
        </div>       
      <div class="profile">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="rounded-circle profilephoto" alt="Profile Photo">
      <button type="button" class="btn changecamera" data-toggle="modal" data-target="#profilePhoto"><i class="fa fa-camera"></i></button>

        <!-- Modal for Profile Picture -->
        <div class="modal fade" id="profilePhoto" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Profile Photo</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form>
              <div class="modal-body">
               <div id="profilephotoupload">
                <input type="file" @change="onFileChangeProfile" accept="image/*"/>
                <div id="preview">
                  <img v-if="urlprofile" :src="urlprofile" class="rounded-circle profilepreview"/>
                </div>
              </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" style="background:#bf66ce">Save</button>
              </div>
              </form>
            </div>
          </div>
        </div>       
      <ul class="nav">
        <li>Albums</li>
        <li>Posts</li>
        <li>Videos</li>
        <li>Feedbacks</li>
      </ul>
      <div id="username"><h5 class="username">Natalia Nowe</h5></div>
      </div>
      <div> 
        <div class="row">
          <div class="col bio" style="margin-left:5px">Actor from Roma</div>
        </div>
        <div class="row">
        <div class="col"><i class="fa fa-map-marker" aria-hidden="true" style="float:left;margin-left: 5px;"></i><span style="margin-left: 5px;">Istanbul</span></div>
        <div class="col"><i class="fa fa-calendar biocal" aria-hidden="true" style="float:right;margin-right: 2px;"></i><span style="float:right; margin-right: 9px;">Joined 03/05/2021</span></div>
      </div>
      </div>
      </div>
    </div>
    <hr>
    <div>
   <div class="container posts-content">
    <div class="row">
        <div class="col-lg-3" v-for="(post, index) in posts" :key="index">
            <div class="card mb-4">
              <div class="card-body">
                <div class="media mb-3">
                  <img :src="post.imgsrc" class="d-block ui-w-40 rounded-circle" alt="">
                  <div class="media-body ml-3">
                    {{ post.name }}
                    <div class="text-muted small">{{ post.time }}</div>
                  </div>
                </div>
            
                <p>
                  {{ post.content }}
                </p>
                <a href="javascript:void(0)" class="ui-rect ui-bg-cover" style="background-image: url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');"></a>
              </div>
              <div class="card-footer">
                <a href="javascript:void(0)" class="d-inline-block text-muted">
                    <strong>{{ post.numOfLikes }}</strong><small> Likes</small>
                </a>
                <a href="javascript:void(0)" class="d-inline-block text-muted ml-3">
                   <strong>{{ post.numOfCom }}</strong> <small> Comments</small>
                </a>
                <a href="javascript:void(0)" class="d-inline-block text-muted ml-3">
                  <small class="align-middle">Repost</small>
                </a>
                 <a href="javascript:void(0)" class="d-inline-block text-muted ml-3">
                  <i class="ion ion-md-share align-middle"></i>&nbsp;
                  <small class="align-middle">Update</small>
                </a>
                <a href="javascript:void(0)" class="d-inline-block text-muted ml-3">
                  <i class="ion ion-md-share align-middle"></i>&nbsp;
                  <small class="align-middle">Delete</small>
                </a>
              </div>
            </div>
        </div>
        
    </div>
</div>
    </div>
    <div class="text-center mt-2">
      <button class="btn fromSubmitBtnStyle">Show More...</button>
    </div>
    <br>

    <div class="row">
      <div class="col-sm-4" v-for="(album, index) in albumModel" :key="index">
        <div class="card">
          <div class="card-body">
            <div class="overlayAlbumstyle">
              <img :src="album.imgsrc" class="img-thumbnail" alt="Cinque Terre">
              <span class="albumTitle-style">{{ album.title }}</span><br>
              <span class="albumTitle-style">{{ album.description }}</span><br>
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
                    <a href="#"><i class="far fa-edit"></i> Edit</a>
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
  <hr>
   <div>
      <h4>Albums Bought</h4>
    </div>
    <br>
     <div class="row">
      <div class="col-sm-4" v-for="(album, index) in albumModelBought" :key="index">
        <div class="card">
          <div class="card-body">
            <div class="overlayAlbumstyle">
              <img :src="album.imgsrc" class="img-thumbnail" alt="Cinque Terre">
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
                    <a href="#"><i class="far fa-edit"></i> Edit</a>
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
    <br>
    <hr>
    <div>
      <h4>Feedbacks</h4>
      <br>
     <div class="card cardcertificate" v-for="(feedback, index) in feedbacks" :key="index">
      <div class="card-header">
        <img :src="feedback.imgsrc" alt="Avatar" class="avatar"> {{ feedback.name }}
        <div class="rate" v-if="feedback.rate == 1">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
        <div class="rate" v-else-if="feedback.rate == 2">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          </div>
        <div class="rate" v-else-if="feedback.rate == 3">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          </div>
        <div class="rate" v-else-if="feedback.rate == 4">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          </div>
        <div class="rate" v-else>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          </div>
           
      <div class="card-body">
        <h5 class="card-title">{{ feedback.title }}</h5>
        <p class="card-text">{{ feedback.content }}</p>
      </div>
    </div>
     </div>
  <div class="text-center mt-2">
      <button class="btn fromSubmitBtnStyle">Show More...</button>
    </div>
    <hr>
    <br>
    <br>
</div>
</div>
</div>
</template>

<script>
export default {

  name: 'AllContents',
  name1: 'AllContentsBought',
  el: '#coverphotoupload',
  el1: '#profilephotoupload',
  
  data (){
    return {
      albumModel: [],
      albumModelBought: [],
      posts: [],
      feedbacks: [],
      url: null,
      urlprofile: null,
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
      imgsrc: 'http://sl.agilab.io/modules/demoimg/albumcover.jpg'
    };
    let testAlbum2 = {
      title: "Album Title 2",
      noOfpic: 3,
      noOfvid: 8,
      noOfrct: 3,
      albumPrice: 10,
      crateTime: "43 minutes ago",
      imgsrc: 'http://sl.agilab.io/modules/demoimg/albumcover.jpg'
    };
    let testAlbum3 = {
      title: "New Album Title 3",
      noOfpic: 25,
      noOfvid: 15,
      noOfrct: 33,
      albumPrice: 40,
      crateTime: "3 hours ago",
      imgsrc: 'http://sl.agilab.io/modules/demoimg/albumcover.jpg'
    };

    let testAlbum1Bought = {
      title: "A Summer Spent Seaside",
      noOfpic: 10,
      noOfvid: 5,
      noOfrct: 1,
      albumPrice: 20,
      crateTime: "3 minutes ago",
      imgsrc: 'http://sl.agilab.io/modules/demoimg/albumcover.jpg'
    };
    let testAlbum2Bought = {
      title: "Album Title 2",
      noOfpic: 3,
      noOfvid: 8,
      noOfrct: 3,
      albumPrice: 10,
      crateTime: "43 minutes ago",
      imgsrc: 'http://sl.agilab.io/modules/demoimg/albumcover.jpg'
    };
    let testAlbum3Bought = {
      title: "New Album Title 3",
      noOfpic: 25,
      noOfvid: 15,
      noOfrct: 33,
      albumPrice: 40,
      crateTime: "3 hours ago",
      imgsrc: 'http://sl.agilab.io/modules/demoimg/albumcover.jpg'
    };

    let testPost1 = {
      name:"Natalia Nowe",
      time:"3 days ago",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus commodo bibendum. Vivamus laoreet blandit odio, vel finibus quam dictum ut.",
      imgsrc:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      numOfLikes:123,
      numOfCom:5
    };

    let testPost2 = {
      name:"Natalia Nowe",
      time:"2 days ago",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus commodo bibendum. Vivamus laoreet blandit odio, vel finibus quam dictum ut.",
      imgsrc:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      numOfLikes:12,
      numOfCom:2
    };

    let testPost3 = {
      name:"Natalia Nowe",
      time:"4 days ago",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus commodo bibendum. Vivamus laoreet blandit odio, vel finibus quam dictum ut.",
      imgsrc:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      numOfLikes:123,
      numOfCom:5
    };

    let testPost4 = {
      name:"Natalia Nowe",
      time:"5 days ago",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus commodo bibendum. Vivamus laoreet blandit odio, vel finibus quam dictum ut.",
      imgsrc:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      numOfLikes:35,
      numOfCom:4
    };

    let testFeedback1 = {
      imgsrc: "data:image/png;base64,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",
      name: "Sampe Name 1",
      title: "Special title treatment",
      content: "With supporting text below as a natural lead-in to additional content.",
      rate: 2
    };

    let testFeedback2 = {
      imgsrc: "data:image/png;base64,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",
      name: "Sampe Name 2",
      title: "Special title treatment",
      content: "With supporting text below as a natural lead-in to additional content.",
      rate: 5
    };

    let testFeedback3 = {
      imgsrc: "data:image/png;base64,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",
      name: "Sampe Name 3",
      title: "Special title treatment",
      content: "With supporting text below as a natural lead-in to additional content.",
      rate: 4
    };

    this.albumModel.push(testAlbum1);
    this.albumModel.push(testAlbum2);
    this.albumModel.push(testAlbum3);
    this.albumModelBought.push(testAlbum1Bought);
    this.albumModelBought.push(testAlbum2Bought);
    this.albumModelBought.push(testAlbum3Bought);
    this.posts.push(testPost1);
    this.posts.push(testPost2);
    this.posts.push(testPost3);
    this.posts.push(testPost4);
    this.feedbacks.push(testFeedback1);
    this.feedbacks.push(testFeedback2);
    this.feedbacks.push(testFeedback3);
  },

  
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },

    onFileChangeProfile(e) {
      const file = e.target.files[0];
      this.urlprofile = URL.createObjectURL(file);
    }
  }
}
</script>




<style scoped>
#reporttitle{
    color: #7a8994;
    font-size: 21px;
    line-height: 27px;
    font-family: "HelveticaNeueLight","HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 300;
}
.dropdown-item::after {
  background-color: #bf66ce;
}
.settingaccount{
     margin-top: -308px;
    float: right;
    position: relative;
    border: none;
    color: white;
    padding: 7px 12px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 25px;
    background-color: #bf66ce;
}
.preview{
    padding: 10px;
    border-radius: 3px;
    border-style: groove;
    margin: 13px;
}

.profilepreview{
    width: 177px;
  height: 177px;
  border: 6px;
  border-color:#bf66ce;
  border-style: solid;
}
.rate{
  float: right;
}
.checked{
  color:orange;
}
.avatar{
   vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

#coverphotoupload {
  padding: 20px;
}

#profilephotoupload {
  padding: 20px;
}

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}
.certificate{
      margin-top: -308px;
    /* float: right; */
    position: relative;
    border: none;
    color: white;
    padding: 7px 12px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 25px;
    background-color: #bf66ce;
    float: left;
}

.certificatetick{
        margin-top: -308px;
    /* float: right; */
    position: relative;
    border: none;
    color: rgb(15 189 15);
    padding: 7px 12px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 25px;
    float: left;
}

.totalprofile{
  border-style: groove;
    border-radius: 6px;
    box-shadow: 0px 0px 10px;
    border: aliceblue;
}
.posts-content{
    margin-top:20px;    
}
.ui-w-40 {
    width: 40px !important;
    height: auto;
}
.default-style .ui-bordered {
    border: 1px solid rgba(24,28,33,0.06);
}
.ui-bg-cover {
    background-color: transparent;
    background-position: center center;
    background-size: cover;
}
.ui-rect {
    padding-top: 50% !important;
}
.ui-rect, .ui-rect-30, .ui-rect-60, .ui-rect-67, .ui-rect-75 {
    position: relative !important;
    display: block !important;
    padding-top: 100% !important;
    width: 100% !important;
}
.d-flex, .d-inline-flex, .media, .media>:not(.media-body), .jumbotron, .card {
    -ms-flex-negative: 1;
    flex-shrink: 1;
}
.bg-dark {
    background-color: rgba(24,28,33,0.9) !important;
}
.card-footer, .card hr {
    border-color: rgba(24,28,33,0.06);
}
.ui-rect-content {
    position: absolute !important;
    top: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    left: 0 !important;
}
.default-style .ui-bordered {
    border: 1px solid rgba(24,28,33,0.06);
}
.cardcertificate{
    padding: 17px;
    margin: 11px;
}
h4{
font-size:1.4vw;
}
.card{
  box-shadow: 0px 0px 30px grey;
  border-radius: 21px;
}
.nav{
  float: right;
  margin-top: -20px;
  font-size: 20px;
      border-style: groove;
    border: outset;
    border-top: hidden;
    border-radius: 13px;
}
ul li{
  margin-right: 15px;
}

ul li:hover{
  box-shadow: 2px 1px 5px #bf66ce;
}

.username{
  margin-left: 35px;
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

#cover{
  width: 1920px;
  height: 312px;
  border-radius: 7px;
}

.profilephoto{
  width: 177px;
  height: 177px;
  border: 6px;
  border-color: white;
  border-style: solid;
}
.profile{
  margin-top: -130px;
  margin-left: 29px;
}

.changecamera{
    margin-top: 131px;
    margin-left: -45px;
    border: none;
    color: white;
    padding: 7px 12px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 25px;
    background-color: #bf66ce;
}

.changecover{
    margin-right: 52px;
    margin-top: -308px;
    float: right;
    position: relative;
    border: none;
    color: white;
    padding: 7px 12px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 25px;
    background-color: #bf66ce;
}


@media only screen and (max-width: 396px) {

.bio[data-v-848c9c74] {
    margin-top: -11px;
}

.username[data-v-848c9c74][data-v-848c9c74][data-v-848c9c74] {
    font-size: 14px;
    margin-top: -47px;
    margin-bottom: 53px;
    margin-left: 45px;
}

.profile{
    margin-left: 0px;
    text-align: center;
}

#settingaccountid{
    width: 27px;
    height: 27px;
    padding: 1px;
}

#changecoverid{
    width: 27px;
    height: 27px;
    padding: 0px;
    margin-right: 28px;
}
#username{
  margin-left: -37px;
}
.nav{
  display: inline-flex;
}

.biocal{
  margin-left: -9px;
}

}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 546px) {

  .bio{
        margin-top: 15px;
  }
  h4{
  font-size: 3.4vw;
}
  .changecover[data-v-848c9c74] {
    margin-top: -204px;
    float: right;
    position: relative;
    border: none;
    color: white;
    padding: 7px 12px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 25px;
    background-color: #bf66ce;
}

  .settingaccount {
    margin-top: -204px;
    float: right;
    position: relative;
    border: none;
    color: white;
    padding: 7px 12px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 25px;
    background-color: #bf66ce;
}

.certificate{
      margin-top: -204px;
    /* float: right; */
    position: relative;
    border: none;
    color: white;
    padding: 7px 12px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 25px;
    background-color: #bf66ce;
    float: left;
}

.certificatetick{
        margin-top: -204px;
    /* float: right; */
    position: relative;
    border: none;
    color: rgb(15 189 15);
    padding: 7px 12px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 25px;
    float: left;
}

.nav[data-v-848c9c74][data-v-848c9c74] {
    float: revert;
    margin-left: 3px;
    margin-top: 19px;
    font-size: 14px;
    border-style: groove;
    border: outset;
    border-top: hidden;
    border-radius: 13px;
}

#cover[data-v-848c9c74] {
    width: 1920px;
    height: 205px;
    border-radius: 7px;
}


.username{
    text-align: center;
    font-size: 12px;
    margin-top: -44px;
}

#username{
  margin-left: -38px;
}

.profile{
    margin-left: 0px;
    text-align: center;
}
  

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 768px) {

h4{
      font-size: 2.4vw;
}

.changecamera{
    margin-top: 87px;
    margin-left: -45px;
    border: none;
    color: white;
    padding: 3px 8px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 25px;
    background-color: #bf66ce;
}
.username{
    font-size: 16px;
    margin-left: 11px;
}
  

  .nav{
    float: right;
    margin-top: -20px;
    font-size: 14px;
    border-style: groove;
    border: outset;
    border-top: hidden;
    border-radius: 13px;
}
.profilephoto[data-v-848c9c74] {
    width: 119px;
    height: 119px;
    border: 6px;
    border-color: white;
    border-style: solid;
}

.profile[data-v-848c9c74] {
    margin-top: -80px;
}

.username[data-v-848c9c74] {
    font-size: 16px;
}
  
  

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {


}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  #username{
    font-size: 2px;
  }
  
}


</style>