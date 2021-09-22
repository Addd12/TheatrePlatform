<template>
  <div>
    <form action="#" class="addpostform">
      <div class="row">
        <div class="col-sm-8">
          <div class="form-group">
            <textarea name="postTitle" class="form-control" placeholder="What's on your mind ?" id="postTitle" cols="30" rows="3"></textarea>
          </div>

          <div class="mt-5 mb-3" id="customupload">
            <div class="form-group position-relative">
              <label class="custom-file-label mt-3" for="customFile" v-text="fileName"></label>
              <input type="file" class="custom-file-input" id="customFile" @change="displayFile"  accept=".jpg,.jpeg.,.gif,.png,.mov,.mp4" />
              <!-- <input type="file" class="btn btn-primary" id="myfile" accept=".jpg,.jpeg.,.gif,.png,.mov,.mp4">Upload -->
            </div>
          </div>

        </div>
        <div class="col-sm-4">
          <img v-if="isImg" :src="fileData" alt="logo" width="300" class="postuploadImgStyle" />
          <div class="postVideoStyle">
            <video class="postuploadImgStyle" width="300" v-if="isVideo" controls>
              <source :src="fileData" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <button type="submit" class="mt-4 mr-2 btn fromSubmitBtnStyle">Post</button>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      fileName: null,
      fileData: null,
      isImg: false,
      isVideo: false,
    };
  },

  mounted() {
    this.fileName = "Choose Picture or Video";
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
        this.isVideo = /video/.test(img["type"]);

        this.fileData = event.target.result;
      };
    },
  },
};
</script>



<style scoped>
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
</style>