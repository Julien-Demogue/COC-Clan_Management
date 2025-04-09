import HomeView from '@/views/HomeView.vue';
import DashboardView from '@/views/DashboardView.vue';
import MembersView from '@/views/MembersView.vue';
import WarView from '@/views/WarView.vue';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
  },
  {
    path: '/members',
    name: 'Members',
    component: MembersView,
  },
  {
    path: '/war',
    name: 'War',
    component: WarView,
  },
];