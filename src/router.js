import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Offerts from './components/Offerts';
import ClientLogin from './login/Client-Login';
import AdminLogin from './login/Admin-Login';
import AdminDashboard from './login/AdminDashboard';
import CustomerDashboard from './login/Customer-Dashboard';
import FlatForSale from './components/FlatForSale';
import FlatForLease from './components/FlatForLease';


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {

      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/flat-for-lease/:flatId',
      name: 'Flat For Lease',
      component:FlatForLease

    },

      {
          path:'/flat-for-sale/:flatId',
          name: 'Flat For Sale',
          component: FlatForSale

      },
      {
          path:'/client-login',
          name: 'Client Login',
          component:ClientLogin

      },
      {
          path:'/admin-login',
          name: 'Admin Login',
          component:AdminLogin

      },
      {
          path:'/admin-dashboard',
          name: 'Admin Dashboard',
          component:AdminDashboard

      },
      {
          path:'/customer-dashboard',
          name: 'Customer Dashboard',
          component:CustomerDashboard

      }
  ]
})
