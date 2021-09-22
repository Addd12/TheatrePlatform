<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-8 mx-auto">
            <h2 class="h3 mb-4 page-title">Edit your profile</h2>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Profile</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="bank-tab" data-toggle="tab" href="#bank" role="tab" aria-controls="bank" aria-selected="false">Bank account</a>
                </li>
            </ul>
            <div class="my-4">
                <form>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="row mt-5 align-items-center">
                                <div class="col-md-3 text-center mb-5">
                                    <div class="avatar avatar-xl">
                                        <img src="https://via.placeholder.com/150" alt="Profile picture" class="avatar-img rounded-circle" />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row align-items-center">
                                        <div class="col-md-7">
                                            <h4 class="mb-1">John Doe</h4>
                                        </div>
                                    </div>
                                    <div class="row mb-4">
                                        <div class="col-md-12">
                                            <p class="text-muted" contentEditable="true">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus. In hac habitasse platea dictumst. Cras urna quam, malesuada vitae risus at,
                                                pretium blandit sapien.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="my-4" />
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <input type="text" id="firstname" v-model="first_name" class="form-control" placeholder="First name" required/>
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="text" id="lastname" v-model="last_name" class="form-control" placeholder="Last name" required/>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <input type="email" class="form-control" id="inputEmail" placeholder="email@example.com" />
                                </div>
                                <div class="form-group col-md-6">
                                    <button type="button" class="btn fromSubmitBtnStyle">Verify</button>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <input class="form-control" id="username" placeholder="Username" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="privateAccount" class="privateAccount">Profile Visibility(Public): </label>
                                    <label class="switch">
                                        <input id="privateAccount" type="checkbox">
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <input v-model="phone" class="form-control" placeholder="Phone number" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="showOnProfile">Show on profile(Public): </label>
                                    <label class="switch">
                                        <input type="checkbox" checked>
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="dObInput">Date of birth: </label>
                                    <input type="date" id="dObInput" name="birthday" class="form-control inlineInput">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <input type="email" class="form-control" id="iviteEmail" placeholder="Enter friend's email" />
                                </div>
                                <div class="form-group col-md-6">
                                    <button type="button" class="btn fromSubmitBtnStyle">Invite</button>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <input type="url" class="form-control" id="social" placeholder="Social media link" />
                                </div>
                                <div class="form-group col-md-6">
                                    <button type="button" class="btn fromSubmitBtnStyle">Add +</button>
                                </div>
                            </div>
                            <a class="password" href="#passwordSection" data-toggle="collapse">Change password</a>
                            <div id="passwordSection" class="collapse">
                                <div class="form-group">
                                    <label for="inputPassword4">Current Password</label>
                                    <input type="password" class="form-control" id="inputPassword4" autocomplete="off" />
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword5">New Password</label>
                                    <input type="password" class="form-control" id="inputPassword5" autocomplete="off" />
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword6">Confirm Password</label>
                                    <input type="password" class="form-control" id="inputPassword6" autocomplete="off" />
                                </div>
                            </div>
                            <br>
                            <a class="delete" href="#delPopUp" data-toggle="modal" data-target="#delModal">Delete account</a>
                            <div id="delModal" class="modal fade" role="dialog">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h3>Please carefully check the options below before choosing!</h3>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <h4>Temporarily disable your account</h4>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, quasi? Eos eligendi 
                                                explicabo nemo porro ipsam possimus laboriosam labore facilis expedita molestiae quibusdam 
                                                quos earum voluptate, atque culpa, consectetur distinctio.</p>
                                            <button type="submit" class="btn fromSubmitBtnStyle">Disable</button>
                                        </div>
                                        <div class="modal-body">
                                            <h4>Permanently delete your account</h4>
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, quasi? Eos eligendi 
                                                explicabo nemo porro ipsam possimus laboriosam labore facilis expedita molestiae quibusdam 
                                                quos earum voluptate, atque culpa, consectetur distinctio.</p>
                                            <button type="submit" class="btn fromSubmitBtnStyle">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="bank" role="tabpanel" aria-labelledby="bank-tab">
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <input type="text" id="firstname_bnk" class="form-control" placeholder="First name" required/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input type="text" id="lastname_bnk" class="form-control" placeholder="Last name" required/>
                                    </div>
                                </div>
                                <input type="text" id="iban" class="form-control" placeholder="IBAN" required/>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <select id="country" name="country" class="form-control">
                                            <option value="Afganistan">Afghanistan</option>
                                            <option value="Albania">Albania</option>
                                            <option value="Algeria">Algeria</option>
                                            <option value="American Samoa">American Samoa</option>
                                            <option value="Andorra">Andorra</option>
                                            <option value="Angola">Angola</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input type="text" id="swift" class="form-control" placeholder="SWIFT/BIC" required/>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                    <hr>
                    <div class="form-row text-center">
                        <button type="submit" class="btn fromSubmitBtnStyle">Save</button>
                        <button type="submit" class="btn fromSubmitBtnStyle">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>

</template>

<script>
export default {
  name: "Settings",
  data (){
    return {
      first_name: 'Jhon',
      last_name: 'Doe',
      phone: '23564565545',
      showModal: false,
      purchases: [],
    };
  },
}
</script>

<style scoped>
body{
    color: #8e9194;
    background-color: #f4f6f9;
}
.avatar-xl img {
    width: 110px;
}
.rounded-circle {
    border-radius: 50% !important;
}
img {
    vertical-align: middle;
    border-style: none;
}
.text-muted {
    color: #aeb0b4 !important;
}
.text-muted {
    font-weight: 300;
}
.text-center{
    margin: 0 auto;
    display: block;
}
.btn{
    width: 130px;
    height: 33px;
    margin-right: 10px;
    margin-top: 3px;
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
.page-title{
    text-align: center;
}
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}
.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.inlineInput{
  display:inline-block !important;
  margin-left: 10px;
  width: 70% !important;
}

.form-group{
    padding: 10px;
}
.form-row{
    white-space: nowrap;
}
.privateAccount {
    padding: 7px;
}
.showOnProfile {
    padding: 7px;
}
.password {
   padding: 7px; 
}
.delete {
   padding: 7px; 
   margin-bottom: 5px;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #4d5154;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 1px solid #eef0f3;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>