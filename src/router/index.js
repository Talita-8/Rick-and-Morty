/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Characters from "@/components/Characters";
import Quiz from "@/components/Quiz";

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
