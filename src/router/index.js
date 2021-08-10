/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Characters from "@/components/pages/Characters";
import Quiz from "@/components/pages/Quiz";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/characters",
      name: "Characters",
      component: Characters
    },
    {
      path: "/quiz",
      name: "Quiz",
      component: Quiz
    }
  ]
});
