<template>

  <div class="container" id="newContentUploaderStyle">
    <h3>New Content</h3>
    <ul class="nav nav-tabs tabBtns" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" href="#addPost" role="tab" data-toggle="tab"><i class="far fa-image"></i> Post</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#addAlbum" role="tab" data-toggle="tab"><i class="fas fa-photo-video"></i> Album</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#addPoll" role="tab" data-toggle="tab"><i class="fas fa-poll-h"></i> Poll</a>
      </li>
    </ul>
    <br>
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane active" id="addPost">
        <addpost-secreter></addpost-secreter>
      </div>
      <div role="tabpanel" class="tab-pane fade" id="addAlbum">
        <addalbum-secreter></addalbum-secreter>
      </div>
      <div role="tabpanel" class="tab-pane fade" id="addPoll">
        <addpool-secreter></addpool-secreter>
      </div>
    </div>
  </div>
</template>

<script>
//  import components module Addpostsc from modules
import Addpostsc from './modules/addpost';
import Addalbumsc from './modules/addalbum';
import Addpollsc from './modules/addpolls';
//
//
//
//
export default {
  name: 'AddContent',

  components: {
    'addpost-secreter': Addpostsc,
    'addalbum-secreter' : Addalbumsc,
    'addpool-secreter' : Addpollsc,
  },
}
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
</style>