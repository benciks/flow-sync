import { createRouter, createWebHistory } from "vue-router/auto"
import type { RouteRecordName } from "vue-router/auto"

const router = createRouter({
  history: createWebHistory()
})

router.beforeEach(async (to) => {
  const token = localStorage.getItem("authorization")
  const loggedIn = token && token !== "null" && token !== "undefined"

  if (!loggedIn && to.path !== "/login") {
    return { name: "/login" }
  }

})

export default router