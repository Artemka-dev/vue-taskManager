<template>
    <div>
        <div v-if="task" class="col s6 offset-s3">
           <h1>{{task.title}}</h1> 

           <form @submit.prevent="submitHandler">
                <div ref="chips"></div><br>

                <div class="input-field">
                    <textarea :readonly="task.status === 'completed' ? true : false" style="min-height: 150px;" v-model="description" id="textarea" class="materialize-textarea"></textarea>
                    <label for="textarea">Description</label>
                    <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
                </div>
                <input :disabled="task.status === 'completed' ? 'disabled' : null" type="text" ref="datepicker">

                <div v-if="task.status !== 'completed'">
                    <button class="btn" type="submit" style="margin-right: 1rem;">Update Task</button>
                    <button class="btn blue" type="button" @click="completeTask">Complete Task</button>
                </div>
                <div v-else>
                    <button class="btn red" type="button" @click="deleteTask" style="margin-right: 1rem;">Delete Task</button>
                    <button class="btn purple darken-1" type="button" @click="uncompleteTask">Uncomplete Task</button>
                </div>
            </form>
        </div>
        <p v-else>Task not found</p>
    </div>
</template>

<script>
export default {
    computed: {
        task() {
            return this.$store.getters.taskDetail(+this.$route.params.id)
        }
    },
    data: () => ({
        description: '',
        chips: null,
        date: null
    }),
    mounted() {
        this.description = this.task.description
        this.chips = M.Chips.init(this.$refs.chips, {
            placeholder: "Task Tags",
            data: this.task.tags
        });
        this.date = M.Datepicker.init(this.$refs.datepicker, {
            format: "dd.mm.yyyy",
            defaultDate: new Date(this.task.date),
            setDefaultDate: true
        });
        setTimeout(() => {
            M.updateTextFields()
        }, 0)
    },
    methods: {
        submitHandler() {
            this.$store.dispatch("updateTask", {
                id: this.task.id,
                description: this.description,
                date: this.date.date
            })
            this.$router.push("/")
        },
        completeTask() {
            this.$store.dispatch("completeTask", this.task.id)
            this.$router.push("/")
        },
        deleteTask() {
            this.$store.dispatch("deleteTask", this.task.id)
            this.$router.push("/")
        },
        uncompleteTask() {
            this.$store.dispatch("uncompleteTask", this.task.id)
            this.$router.push("/")
        }
    },
    destroyed() {
        if (this.date && this.date.destroy) {
            this.date.destroy
        }
        if (this.chips && this.chips.destroy) {
            this.chips.destroy
        }
    }
}
</script>