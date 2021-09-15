<template>
    <div class="container">
        <div class="row px-5 pt-0 pb-5 cover">
            <div class="media align-items-end profile-head">
                <div class="profile mr-3"><img src="https://via.placeholder.com/500" alt="Profile picture" width="150px" class="rounded-circle mb-2 img-thumbnail"></div>
            </div>
            <div class="dots">
                <i class="bi bi-three-dots fa-lg"></i>
            </div>
        </div>
        <div class="row mx-2 mt-5 user-name">
            <h4 class="col-xs-6">Ada Sulaj<i class="fa fa-check ml-1" aria-hidden="true"></i></h4>
            <div class="col-xs-6 ml-auto text-center">
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold d-block">21</h5><small class="text-muted">Posts</small>
                    </li>
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold d-block">75</h5><small class="text-muted">Followers</small>
                    </li>
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold d-block">30</h5><small class="text-muted">Following</small>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row pt-2 m-2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur, a, debitis vitae voluptatum hic 
            recusandae eum ex odit nesciunt sapiente quae ipsa eveniet sint, quibusdam similique nemo praesentium! Aspernatur 
            voluptas placeat a ratione, cumque, vitae quas quae minus odit, repudiandae exercitationem reiciendis velit quos et 
            consequuntur saepe commodi debitis?</p>
        </div>
        <div class="tab" role="tabpanel">
            <ul class="nav nav-tabs justify-content-center row text-center" id="profileTabs" role="tablist">
                <li class="nav-item col-xs-6">
                    <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true"><i class="tabIcon bi bi-card-image fa-2x"></i></a>
                </li>
                <li class="nav-item col-xs-6">
                    <a class="nav-link" id="albums-tab" data-toggle="tab" href="#albums" role="tab" aria-controls="albums" aria-selected="false"><i class="tabIcon bi bi-images fa-2x"></i></a>
                </li>
            </ul>
        </div>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                <div class="container-fluid">
                    <div class="row py-1 mx-auto text-center">
                        <div class="col-sm-6 col-md-3 px-2"><img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm">
                            <div class="icons">
                                <div class="actions">
                                    <i class="bi bi-trash fa-lg px-1"></i>
                                    <i class="bi bi-pencil fa-lg px-1"></i>
                                </div>
                                <div class="feedback">
                                    <i class="bi bi-suit-heart fa-lg pl-1"></i> 100
                                    <i class="bi bi-chat fa-lg pl-1"></i> 50
                                </div>
                            </div>
                            <div class="description shadow-sm">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae architecto. Unde, 
                                    atque. Voluptas cupiditate deserunt quidem nobis dolorem voluptatibus!</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3 px-2"><img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm">
                            <div class="icons">
                                <div class="actions">
                                    <i class="bi bi-trash fa-lg px-1"></i>
                                    <i class="bi bi-pencil fa-lg px-1"></i>
                                </div>
                                <div class="feedback">
                                    <i class="bi bi-suit-heart fa-lg pl-1"></i> 100
                                    <i class="bi bi-chat fa-lg pl-1"></i> 50
                                </div>
                            </div>
                            <div class="description shadow-sm">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae architecto. Unde, 
                                    atque. Voluptas cupiditate deserunt quidem nobis dolorem voluptatibus!</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3 px-2">
                            <img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm">
                            <div class="icons">
                                <div class="actions">
                                    <i class="bi bi-trash fa-lg px-1"></i>
                                    <i class="bi bi-pencil fa-lg px-1"></i>
                                </div>
                                <div class="feedback">
                                    <i class="bi bi-suit-heart fa-lg pl-1"></i> 100
                                    <i class="bi bi-chat fa-lg pl-1"></i> 50
                                </div>
                            </div>
                            <div class="description shadow-sm">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae architecto. Unde, 
                                    atque. Voluptas cupiditate deserunt quidem nobis dolorem voluptatibus!</p>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3 px-2">
                            <img id="imgPost" src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm">
                            <div class="icons">
                                <div class="actions">
                                    <i class="bi bi-trash fa-lg px-1"></i>
                                    <i class="bi bi-pencil fa-lg px-1"></i>
                                </div>
                                <div class="feedback">
                                    <i class="bi bi-suit-heart fa-lg pl-1"></i> 100
                                    <i class="bi bi-chat fa-lg pl-1"></i> 50
                                </div>
                            </div>
                            <div class="description shadow-sm">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, beatae architecto. Unde, 
                                    atque. Voluptas cupiditate deserunt quidem nobis dolorem voluptatibus!</p>
                            </div>
                        </div>
                    </div>
                    <div class="row py-2 mx-auto text-center">
                        <div class="col-sm-12 col-md-3 p-2"><img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm"></div>
                        <div class="col-sm-12 col-md-3 p-2"><img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm"></div>
                        <div class="col-sm-12 col-md-3 p-2"><img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm"></div>
                        <div class="col-sm-12 col-md-3 p-2"><img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm"></div>
                    </div>
                    <div class="row py-2 mx-auto text-center">
                        <div class="col-sm-12 col-md-3 p-2"><img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm"></div>
                        <div class="col-sm-12 col-md-3 p-2"><img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm"></div>
                        <div class="col-sm-12 col-md-3 p-2"><img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm"></div>
                        <div class="col-sm-12 col-md-3 p-2"><img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm"></div>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="albums" role="tabpanel" aria-labelledby="albums-tab">
                <div class="container-fluid">
                    <div class="row py-2 mx-auto text-center">
                        <div class="col-sm-12 col-md-3 p-2"><img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm"></div>
                        <div class="col-sm-12 col-md-3 p-2"><img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm"></div>
                        <div class="col-sm-12 col-md-3 p-2"><img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm"></div>
                        <div class="col-sm-12 col-md-3 p-2"><img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm"></div>
                    </div>
                    <div class="row py-2 mx-auto text-center">
                        <div class="col-sm-12 col-md-3 p-2"><img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm"></div>
                        <div class="col-sm-12 col-md-3 p-2"><img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm"></div>
                        <div class="col-sm-12 col-md-3 p-2"><img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm"></div>
                        <div class="col-sm-12 col-md-3 p-2"><img src="https://via.placeholder.com/300" class="image img-fluid rounded-top shadow-sm"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CcProfile",
    }
    
</script>

<style scoped>
.profile-head {
    transform: translateY(7em);
}
.cover {
    position: relative;
    height: 200px;
    background-image: url(https://via.placeholder.com/500);
    background-size: cover;
    background-repeat: no-repeat
}

.user-name {
    margin-top: 5em !important;
}

.description p {
    width: auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 5px;
}
.dots {
    position: absolute;
    top: 12%;
    right: 5%;
}
.col-sm:hover .image {
    opacity: 0.5;
    transition: .5s ease;
}
.image {
    position: relative;
    text-align: center;
}
.icons {
    opacity: 0;
    transition: .5s ease;
    display: inline;
}
.actions {
    position: absolute;
    bottom: 88%;
    right: 7%;
}
.feedback {
    position: absolute;
    bottom: 50%;
    right: 35%;
}
.col-sm-6:hover .icons {
    opacity: 1;
    transition: .5s ease;
}
a:hover,a:focus{
    outline: none;
    text-decoration: none;
}
.tabIcon {
    padding-inline: 50px;
}
.tab .nav-tabs a.active,
.tab .nav-tabs li a:hover{
    color: rgb(7, 25, 184);
    border: none;
    border-bottom: 3px solid rgb(7, 25, 184);
}
.tab .nav-tabs li a{
    color: rgb(91, 176, 233);
    overflow: hidden;
    transition: all 0.3s ease 0s;
}
</style>