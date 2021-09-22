<template>
<div class="container">
    <h3 style="text-align: center;">Content Creator Verification Page</h3>

    <br>
    <form action="#" class="addpostform">
      <div class="row" style="margin:auto">
        <div class="col-6">
          <div class="form-group">
            <input name="name" class="form-control" placeholder="Name" id="name" cols="6" rows="1"/>

          </div>

        </div>
        <div class="col-6">
          <div class="form-group">
            <input name="surName" class="form-control" placeholder="Surname" id="surName" cols="6" rows="1"/>
          </div>

        </div>
      </div>
      <div class="container">
        <div class="row g-2">
          <div class="col-6">
            <div class="p-3 border bg-light" style="border-bottom-right-radius: 20px;box-shadow: 5px 5px 5px grey;">
              <div class="mt-5 mb-3" id="customupload">
                <p style="text-align:center;">Front ID Card</p>
                <div class="form-group position-relative">
                  <label class="custom-file-label mt-3" for="customFile" v-text="fileFrontID"></label>
                  <input type="file" class="custom-file-input" id="customFile" @change="verificationStatusFrontID"  accept=".jpg,.jpeg.,.png,.pdf" />
                  <!-- <input type="file" class="btn btn-primary" id="myfile" accept=".jpg,.jpeg.,.gif,.png,.mov,.mp4">Upload -->
                </div>
              </div>
              <div class="row">
                <div class="col-sm-8">
                  <button type="submit" id="frontID" class="mt-4 mr-2 btn fromSubmitBtnStyle">Upload</button>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-8">
                  <p v-if="frontIDStatus === null">Not uploaded</p>
                  <p v-else-if="frontIDStatus === 'uploaded'">Waiting for approval</p>
                  <p v-else>Upload Again</p>
                </div>
              </div>
            </div> <br>  
          </div>
          <div class="col-6">
            <div class="p-3 border bg-light" style="border-bottom-left-radius: 20px;box-shadow: 5px 5px 5px grey;">
              <div class="mt-5 mb-3" id="customupload">
                <p style="text-align:center;">Back ID Card</p>
                <div class="form-group position-relative">
                  <label class="custom-file-label mt-3" for="customFile" v-text="fileBackID"></label>
                  <input type="file" class="custom-file-input" id="customFile" @change="verificationStatusBackID"  accept=".jpg,.jpeg.,.png,.pdf" />
                  <!-- <input type="file" class="btn btn-primary" id="myfile" accept=".jpg,.jpeg.,.gif,.png,.mov,.mp4">Upload -->
                </div>
              </div>
              <div class="row">
                <div class="col-sm-8">
                  <button type="submit" class="mt-4 mr-2 btn fromSubmitBtnStyle">Upload</button>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-8">
                  <p v-if="backIDStatus === null">Not uploaded</p>
                </div>
              </div>
            </div> <br>
          </div>
          <div class="col-6">
            <div class="p-3 border bg-light" style="border-top-right-radius: 20px;box-shadow: 5px 5px 5px grey;">
              <div class="mt-5 mb-3" id="customupload">
                <p style="text-align:center;">Selfie with ID</p>
                <div class="form-group position-relative">
                  <label class="custom-file-label mt-3" for="customFile" v-text="fileSelfie"></label>
                  <input type="file" class="custom-file-input" id="customFile" @change="verificationStatusSelfie"  accept=".jpg,.jpeg.,.png,.pdf" />
                  <!-- <input type="file" class="btn btn-primary" id="myfile" accept=".jpg,.jpeg.,.gif,.png,.mov,.mp4">Upload -->
                </div>
              </div>
              <div class="row">
                <div class="col-sm-8">
                  <button type="submit" class="mt-4 mr-2 btn fromSubmitBtnStyle">Upload</button>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-8">
                  <p v-if="selfieStatus === null">Not uploaded</p>
                </div>
              </div>
            </div> <br>
          </div>
          <div class="col-6">
            <div class="p-3 border bg-light" style="border-top-left-radius: 20px;box-shadow: 5px 5px 5px grey;">
              <div class="mt-5 mb-3" id="customupload">
                <p style="text-align: center">Mobile Phone</p>
                <div class="form-group position-relative">
                  <!-- <label class="custom-file-label mt-3" for="customFile" v-text="fileName"></label> -->
                  <textarea name="mobilePhone" class="form-control" placeholder="Mobile Phone" id="mobilePhone" rows="1"></textarea>
                  <!-- <input type="file" class="btn btn-primary" id="myfile" accept=".jpg,.jpeg.,.gif,.png,.mov,.mp4">Upload -->
                </div>
              </div>
              <div class="row">
                <div class="col-sm-8">
                  <button type="submit" class="mt-4 mr-2 btn fromSubmitBtnStyle">Upload</button>
                  <br>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-8">
                  <p v-if="phoneStatus === null">Not uploaded</p>
                </div>
              </div>
            </div> <br>
          </div>
        </div>
        <br>
      </div>

    </form>
  </div>
</template>

<script>

export default {
  name: 'Verification',

  data() {
    return {
      fileName: null,
      fileFrontID: null,
      fileBackID: null,
      fileSelfie: null,
      fileData: null,
      isImg: false,
      isVideo: false,
      verificationFrontID: null,
      verificationBackID: null,
      verificationSelfie: null,
      verificationPhoneNumber: null,
      file: '',
      frontIDStatus: null,
      backIDStatus: null,
      selfieStatus: null,
      phoneStatus: null,
    };
  },

  mounted() {
    this.fileName = "Upload the document";
    this.fileFrontID = "Upload the front ID";
    this.fileBackID = "Upload the Back ID";
    this.fileSelfie = "Upload the Selfie" ;
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

    displayFile: function (event) {
      this.fileName = this.uploaderNameShortener(event.target.files[0].name, 28, '...');
      let img = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(img);  
      reader.onload = (event) => {  
        // check if the data is video or image  
        this.isImg = /image/.test(img["type"]); 
  
        this.fileData = event.target.result;  
      };  
    },
    verificationStatusFrontID: function (event) {
      this.fileFrontID = this.uploaderNameShortener(event.target.files[0].name, 28, '...');
      let img = event.target.files[0];
      let reader = new FileReader();

      reader.readAsDataUrl(img);
      reader.onLoad = (event) => {
        this.isImg = /image/.test(img["type"]);

        this.fileData = event.target.result;
        this.frontIDStatus == 'uploaded';
      }
    },
    verificationStatusBackID: function (event) {
      this.fileBackID = this.uploaderNameShortener(event.target.files[0].name, 28, '...');
      let img = event.target.files[0];
      let reader = new FileReader();

      reader.readAsDataUrl(img);
      reader.onLoad = (event) => {
        this.isImg = /image/.test(img["type"]);

        this.FileData = event.target.result;
      }
    },
    verificationStatusSelfie: function (event) {
      this.fileSelfie = this.uploaderNameShortener(event.target.files[0].name, 28, '...');
      let img = event.target.files[0];
      let reader = new FileReader();

      reader.readAsDataUrl(img);
      reader.onLoad = (event) => {
        this.isImg = /image/.test(img["type"]);

        this.FileData = event.target.result;
      }
    },
    handleFileUpload: function (){
      this.file = this.$refs.file.files[0];
    },
    submitFile: function() {
      let formData = new FormData();
      formData.append('file', this.file);
    },

  },  
};  
</script>

<style scoped>
#newContentUploaderStyle .tabBtns a{
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
}
#newContentUploaderStyle .tabBtns .active{
  color: #9500ae;
}

 /*mobile style responsive*/
@media screen and (max-width: 576px) {
  .container-fluid, .container{
    padding-right: 5px;
    padding-left: 5px;
  }
}

.postVideoStyle{
  overflow: hidden;
}

.fromSubmitBtnStyle{
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
  box-shadow: 2px 1px 5px #bf66ce;
  float: right;
  width: 80px;
}

.fromSubmitBtnStyle:hover{
  color: #9500ae;
  background: #f7ebfa;
}

.addpostform #postTitle{
  font-size: large;
}

.addpostform #postTitle:focus{
  border:1px solid #9500ae;
  box-shadow: 0px 0px 3px rgba(149, 0, 174, 0.7);
}
.postuploadImgStyle{
  max-height: 160px;
}

@media screen and (max-width: 576px) {
  .postuploadImgStyle{
    margin-top: 20px;
  }
}

@media screen and (max-width: 431px) {
  .col-6{
    flex:1 1 51%;
    max-width: 95%;
  }
}
</style>



