<template>
  <div class="container">
    <form action="#">
      <div class="form-group">
        <label for="albumtitle">Album Title:</label>
        <input type="text" name="albumtitle" id="albumtitle" class="form-control">
      </div>
      <div class="row">

        <div class="col-sm-8">
          <div class="form-group">
            <label for="albumdescription">Album Description:</label>
            <textarea name="albumdescription" class="form-control" id="albumdescription"></textarea>
          </div>
        </div>

        <div class="col-sm-4">
          <label for="featurefile">Thumbnail image: </label><br>
          <div class="text-center">
            <img v-if="featurefile" :src="featurefile" class="img-thumbnail thumbnail-uploaded-style">
            <div class="form-group mt-2 mb-1">
              <label for="uploadfeatureimg" class="thubmnailUpload-style">
                                <span class="singleImguploderBtn-Style">
                                    <span v-if="featurefile">Change: </span>
                                    <span v-else>Choose...</span>
                                </span> {{ featurefileName }}
              </label>
              <input type="file" id="uploadfeatureimg" @change="featureImgdisplay" accept="image/*" />

            </div>
          </div>
        </div>
      </div>

      <label for="imagesfile">Album images: </label>
      <div class="row">
        <div class="col-sm-3 col-6 mb-2 imgBox-style" v-for="(imagefile, index) in imgsfilesdata" :key="index">
          <img :src="imagefile" alt="" class="rounded image-uploaded-style">
          <div class="imgOverlay">
            <div class="text" v-on:click="removeSingleImg(index)">&times;</div>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="uploadalbumimg" class="thubmnailUpload-style">
                            <span class="singleImguploderBtn-Style">
                                    Choose...
                                </span> {{ imagesfileName }}
            </label>
            <input type="file" id="uploadalbumimg" @change="imagesImgdisplay" accept="image/*" multiple/>
          </div>
        </div>
      </div>

      <!-- for videos upload and previews -->
      <label for="imagesfile">Album Videos: </label>
      <div class="card mb-2" v-if="numOfvdo">
        <div class="card-body">
          <span class="albmVdiRmvBtn shadow" v-on:click="removeAllVdos">&times;</span>
          <div class="row js-videoshow mr-2 mt-3">
            <div class="col-sm-3 col-6 mb-2 imgBox-style" v-for="(videofile, indexVd) in vdosfilesdata" :key="indexVd">
              <video preload="metadata" class="rounded image-uploaded-style">
                <source :src="videofile" type="video/mp4">
              </video>
              <div class="imgOverlay">
                <div class="textVio"><i class="fas fa-play-circle"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-2">
        <div class="col-sm-6">
          <label for="uploadalbumvdo" class="thubmnailUpload-style">
                            <span class="singleImguploderBtn-Style">
                                    Choose...
                                </span> Album Videos
          </label>
          <input type="file" id="uploadalbumvdo" @change="videosImgdisplay" accept="video/*" />
        </div>
      </div>
      <div class="row ml-1 mt-2">
        <label for="">Category Tags:  </label>
        <label class="checkbox-inline paymentRadio-style mb-2 mb-sm-0" v-for="(catTag, indexVd) in categoryTags" :key="indexVd">
          <input type="checkbox" value=""> {{ catTag }}
        </label>

      </div>
      <div class="row mt-4">
        <div class="col-sm-7">
          <label for="paymentType">Payment Type:</label>

          <label class="radio-inline paymentRadio-style">
            <input type="radio" name="optradio" v-model="paymentType" value="paid"> Paid
          </label>
          <label class="radio-inline paymentRadio-style">
            <input type="radio" name="optradio" v-model="paymentType" value="free"> Free
          </label>
        </div>
        <div class="col-sm-5">
          <div class="form-group" v-if="paymentType=='paid'">
            <label for="contentPrice">Price: </label>
            <input type="text" class="form-control" style="width:70%;" placeholder="       €" v-model="contentPrice">
          </div>
          <br v-if="paymentType=='free'"> <br v-if="paymentType=='free'">
          <button class="btn fromSubmitBtnStyle mt-2">Publish</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      featurefileName: null,
      featurefile: null,
      imagesfileName: null,
      imagesfileallNames: [],
      videofileallNames: [],
      imgsfilesdata: [],
      vdosfilesdata: [],
      numOfimg: null,
      numOfvdo: null,
      paymentType: null,
      contentPrice: null,
      categoryTags: null,
    };
  },
  mounted(){
    this.featurefileName = "Thumbnail";
    this.imagesfileName = "Album pictures";
    this.numOfimg = 0;
    this.numOfvdo = 0;
    this.paymentType = "paid";
    this.categoryTags =['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
  },
  methods: {
    uploaderNameShortener: function (fullStr, strLen, separator) {
      if (fullStr.length <= strLen) return fullStr;

      separator = separator || "...";

      var sepLen = separator.length,
          charsToShow = strLen - sepLen,
          frontChars = Math.ceil(charsToShow / 2),
          backChars = Math.floor(charsToShow / 2);

      return (fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars));
    },

    featureImgdisplay: function(event){
      this.featurefileName = this.uploaderNameShortener(event.target.files[0].name, 20, '...');
      let featureimg = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(featureimg);
      reader.onload = (event) => {
        this.featurefile = event.target.result;
      };
    },
    imagesImgdisplay: function(event){

      for (let index = 0; index < event.target.files.length; index++) {
        this.imagesfileallNames.push(this.uploaderNameShortener(event.target.files[index].name, 20, '...'));
        let albumimg = event.target.files[index];
        let reader = new FileReader();
        reader.readAsDataURL(albumimg);
        reader.onload = (event) => {
          this.imgsfilesdata.push(event.target.result);
        };
        this.imagesfileName = "More pictures";
        this.numOfimg+=1;
      }
    },
    removeSingleImg: function(id){
      this.imgsfilesdata.splice(id, 1);
      this.imagesfileallNames.splice(id, 1);
      this.numOfimg-=1;
      if (this.numOfimg<1) {
        this.imagesfileName = "Album pictures";
      }
    },
    videosImgdisplay: function(event){
      this.videofileallNames.push(this.uploaderNameShortener(event.target.files[0].name, 20, '...'));
      let albumvdo = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(albumvdo);
      reader.onload = (event) => {
        this.vdosfilesdata.push(event.target.result);
      };
      this.numOfvdo+=1;
    },
    removeAllVdos: function(){
      this.vdosfilesdata = [];
      this.videofileallNames = [];
      this.numOfvdo = 0;
    },
  },
}
</script>

<style scoped>

.fromSubmitBtnStyle{
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
  box-shadow: 2px 1px 5px #bf66ce;
  width: 80px;
}

.fromSubmitBtnStyle:hover{
  color: #9500ae;
  background: #f7ebfa;
}

.thumbnail-uploaded-style{
  width: 250px;
  height: 150px;
  object-fit: cover;
}

.thubmnailUpload-style{
  cursor: pointer;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 4px 10px 3px 0px;
  background: white;
}

#uploadalbumimg, #uploadfeatureimg, #uploadalbumvdo{
  display: none;
}
#albumdescription{
  height: 170px;
}
.singleImguploderBtn-Style{
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
  background: #e9ecef;
  padding:5px 10px 5px 10px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  margin-right: 10px;
}
.singleImguploderBtn-Style:hover{
  color: #9500ae;
  background: #f7ebfa;
}

.image-uploaded-style{
  width:  100%;
  height: 120px;
  object-fit: cover;
}
.imgBox-style{
  position: relative;
}
.imgBox-style:hover .imgOverlay{
  opacity: 1;

}

.imgOverlay{
  position: absolute;
  top: 0;
  left: 5%;
  bottom: 0;
  right: 5%;
  opacity: 0;
  transition: .5s ease;
  background-color: rgba(0, 0, 0, 0.6);
}
.text {
  color: white;
  font-size: 28px;
  position: absolute;
  top: 15%;
  right: 3%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  cursor: pointer;
  font-weight: bold;
}
.text:hover, .textVio:hover{
  color: #f7ebfa;

}

.textVio{
  color: white;
  font-size: 70px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  cursor: pointer;
  font-weight: bold;
}

.albmVdiRmvBtn{
  font-size: 25px;
  border-radius: 50px;
  padding: 0px 10px;
  right: 1%;
  position: absolute;
  z-index: 10;
  background: white;
}

.albmVdiRmvBtn:hover{
  background: #f7ebfa;
  color: #9500ae;
  cursor: pointer;
}
.card-body {
  padding: 5px 15px;
  position: relative;
}


/*content price type style*/

.paymentRadio-style{
  /*border: 1px solid black;*/
  padding: 5px 10px;
  margin: 0px 5px;
  background: white;
  box-shadow: 1px 1px 5px silver;
  border-radius: 5px;
  user-select: none;
}
.paymentRadio-style:hover{
  background: #f7ebfa;
  cursor: pointer;

}

 /*mobile screen responsive*/
@media screen and (max-width: 576px) {
  .thumbnail-uploaded-style{
    width:  100%;
  }
  #albumdescription{
    height: 80px;
  }
  .col-6{
    padding: 0px 8px;
  }
  .fromSubmitBtnStyle{
    float: right;
  }

}
</style>