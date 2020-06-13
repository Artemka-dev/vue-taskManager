import Vue from "vue";
import Router from "vue-router";

// import Home from "@/views/Home";
import TasksList from "@/views/TasksList";
import CreateTask from "@/views/CreateTask";
import Task from "@/views/Task";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "list",
            component: TasksList
        },
        {
            path: "/create-task",
            name: "create",
            component: CreateTask
        },
        {
            path: "/task/:id",
            name: "task",
            component: Task
        }
    ]
})