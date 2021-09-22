import { createApp } from 'vue'

// for login app
import UserLogin from './UserLogin.vue'
import router3 from './router/routerlogin'


// for content creator app
import App from './App.vue'
import router from './router/index.js'




// for content viewer app
import AppViewer from "./AppViewers"
import router2 from "./router/routerviewers"


let userTypes = localStorage.getItem("username");

// lood the suitable application based on user type
//         // if user is not authenticated go to login page

//         // if user is content creator go to views/HomeCreators
if(userTypes == 'creator'){
    const appCreator = createApp(App).use(router)
    appCreator.config.globalProperties.userType = 'creator'
    appCreator.mount('#app')
}else if(userTypes == 'viewer'){
    // if user is viewer go to views/HomeViewers
    const appViewer = createApp(AppViewer).use(router2)
    appViewer.config.globalProperties.userType = 'viewer'
    appViewer.mount('#appviewers')

}else{
    // not logged in stuffs
    const appLogin = createApp(UserLogin).use(router3)
    appLogin.config.globalProperties.userType = 'viewer'
    appLogin.mount('#userlogin')
}



// export default {
//
//     data (){
//         return {
//             userTypes: 'viewer',
//             // userType: 'creator',
//         }
//     },
//     mounted (){
//         // lood the suitable application based on user type
//         // if user is not authenticated go to login page
//
//         // if user is content creator go to views/HomeCreators
//         if(this.userTypes == 'creator'){
//             appCreator.config.globalProperties.userType = 'creator'
//             appCreator.mount('#app')
//         }
//         // if user is viewer go to views/HomeViewers
//         if(this.userTypes == 'viewer'){
//             appViewer.config.globalProperties.userType = 'viewer'
//             appViewer.mount('#appviewers')
//         }
//
//     }
//
// }