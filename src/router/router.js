import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("@/views/Home")
        },
        {
            path: "/faceit",
            name: "FaceIt",
            component: () => import("@/views/FACEIT")
        }
    ]
})

export default router