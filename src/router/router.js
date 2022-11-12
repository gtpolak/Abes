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
        },
        {
            path: "/rank",
            name: "Rank",
            component: () => import("@/views/RANK")
        },
        {
            path: "/esportal",
            name: "Esportal",
            component: () => import("@/views/Esportal")
        },
        {
            path: "/esea",
            name: "ESEA",
            component: () => import("@/views/ESEA")
        },
        {
            path: "/:catchAll(.*)",
            component: () => import("@/views/NotFound"),
            name: "NotFound"
        }
    ],

    // eslint-disable-next-line no-unused-vars
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router