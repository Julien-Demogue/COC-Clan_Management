import HomeView from '@/views/HomeView.vue';
import DashboardView from '@/views/DashboardView.vue';
import MembersView from '@/views/MembersView.vue';
import WarView from '@/views/WarView.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
  },
  {
    path: '/members',
    name: 'members',
    component: MembersView,
  },
  {
    path: '/war',
    name: 'war',
    component: WarView,
  },
];