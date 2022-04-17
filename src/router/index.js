import { createRouter, createWebHistory } from 'vue-router';
import LoadPage from '../views/loadPage.vue'
import HomePage from '../views/homePage.vue'
import LoginPage from '../views/loginPage.vue'
import SignUpPage from '../views/signUpPersonalInfo.vue'
import AccountDetails from'../views/accountDetails.vue'
import TermsAndConditions from '../views/termsAndConditions.vue'
import VerifyAccount from '../views/verify.vue'
import DashHome from '../views/dashHome.vue'
import PurchasePass from '../views/purchasePass.vue'
import PlaceOrder from'../views/placeOrder.vue'
import BookClass from '../views/bookClass.vue'
import SelectBook from '../views/selectBook.vue'
import BookSummary from '../views/bookSummary.vue'
import Classes from '../views/classes.vue'
const routes = [
  {
    path: '/',
    redirect: '/loadPage'
  },
  {
    path: '/loadPage',
    name: 'loadPage',
    component: LoadPage
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: HomePage
  },
  {
    path: '/loginPage',
    name: 'loginPage',
    component: LoginPage
  },
  {
    path: '/signUpPage',
    name: 'signUpPage',
    component: SignUpPage
  },
  {
    path: '/accountDetails',
    name: 'accountDetails',
    component: AccountDetails
  },
  {
    path: '/termsAndConditions',
    name: 'TermsAndConditions',
    component: TermsAndConditions
  },
  {
    path: '/verifyAccount',
    name: 'VerifyAccount',
    component: VerifyAccount
  },
  {
    path: '/home',
    name: 'Home',
    component: DashHome 
  },
  {
    path: '/purchasePasses',
    name: 'PurchasePasses',
    component: PurchasePass
  },
  {
    path: '/placeOrder',
    name: 'PlaceOrder',
    component: PlaceOrder
  },
  {
    path: '/bookClass',
    name: 'BookClass',
    component: BookClass
  },
  {
    path: '/selectBook',
    name: 'SelectBook',
    component: SelectBook
  },
  {
    path: '/bookSummary',
    name: 'BookSummary',
    component: BookSummary
  },
  {
    path: '/classes',
    name: 'Classes',
    component: Classes
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
