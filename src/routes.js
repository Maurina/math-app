// import CRM from '.components/CRM';
// import Parents from '.components/Parents';
// import Students from '.components/Students';

// export const routes = [
//     { path: '', component: CRM},
//     { path: '/parents', component: Parents}
// ]
// change this to Parents Teachers once that's added
// this may be my error onc place has ./folder/name/vue

import Home from './views/Home.vue'
import Admin from './views/Admin.vue'

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path:'/admin',
        component: Admin
    },
  
]

