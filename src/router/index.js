import { createRouter, createWebHistory } from 'vue-router'
import EventPromotion from '../views/EventPromotion.vue'
import AffilateProgram from '../views/AffilateProgram.vue'
import EventListingPlugin from '../views/EventListingPlugin.vue'
import TicketingForEvents from '../views/TicketingForEvents.vue'
import GoogleEventlisting from '../views/GoogleEventlisting.vue'
import FreeEventListing from '../views/FreeEventListing.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: EventPromotion,
  },
  {
    path: '/AffilateProgram',
    name: 'About',
    component: AffilateProgram,
  },
  {
    path: '/EventListingPlugin',
    name: 'Yours',
    component: EventListingPlugin,
  },
  {
    path: '/TicketingForEvents',
    name: 'Tickets',
    component: TicketingForEvents,
  },
  {
    path: '/GoogleEventlisting',
    name: 'eventlists',
    component:GoogleEventlisting,
  }, {
    path: '/FreeEventListing',
    name: 'MaximizedTickets',
    component: FreeEventListing,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
