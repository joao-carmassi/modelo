import HelloWord from "@/views/HelloWord.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HelloWord,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
