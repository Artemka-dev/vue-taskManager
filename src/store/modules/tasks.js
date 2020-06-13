export default {
    actions: {
        updateTask({commit}, task) {
            commit("updateTask", task)
        },
        completeTask({commit}, id) {
            commit("completeTask", id)
        },
        deleteTask({commit}, id) {
            commit("deleteTask", id)
        },
        uncompleteTask({commit}, id) {
            commit("unompleteTask", id)
        }
    },
    state: {
        tasks: JSON.parse(localStorage.getItem("tasks") || "[]")
    },
    mutations: {
        createTask(state, task) {
            state.tasks.push(task);

            localStorage.setItem("tasks", JSON.stringify(state.tasks))
        },
        updateTask(state, {id, description, date}) {
            const task = state.tasks.find(task => task.id === id)

            task.id = id
            task.description = description
            task.date = date
            task.status = new Date(date) > new Date() ? "active" : "outdated"

            localStorage.setItem("tasks", JSON.stringify(state.tasks))
        },
        completeTask(state, id) {
            const task = state.tasks.find(task => task.id === id)

            task.status = "completed"
            localStorage.setItem("tasks", JSON.stringify(state.tasks))   
        },
        deleteTask(state, id) {
            state.tasks = state.tasks.filter(task => task.id !== id)
            
            localStorage.setItem("tasks", JSON.stringify(state.tasks))  
        },
        unompleteTask(state, id) {
            let task = state.tasks.find(task => task.id === id)
            task.status = new Date(task.date) > new Date() ? "active" : "outdated"

            localStorage.setItem("tasks", JSON.stringify(state.tasks))  
        }
    },
    getters: {
        allTasks(state) {
            return state.tasks;
        },
        taskDetail(state, id) {
            return function(id) {
                return state.tasks.find(task => task.id === id);
            }
        }
    }
}