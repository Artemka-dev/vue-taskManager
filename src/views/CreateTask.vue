<template>
    <div class="row">
        <div class="col s7 offset-s3">
            <h1>Create Task</h1>

            <form @submit.prevent="submitHandler">
                <div class="input-field">
                    <input v-model="title" id="title" type="text" class="validate" required>
                    <label for="title">Title</label>
                    <small>Title is not updated!!!</small>
                    <span class="helper-text" data-error="Title is required"></span>
                </div>
                <div class="chips" ref="chips"></div><br>
                <div class="input-field">
                    <textarea v-model="description" id="textarea" class="materialize-textarea"></textarea>
                    <label for="textarea">Description</label>
                    <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
                </div>
                <input type="text" ref="datepicker">
                <button class="btn" type="submit">Create Task</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "create",
    data() {
        return {
            description: "",
            title: "",
            chips: null,
            date: null
        }
    },
    mounted() {
        this.chips = M.Chips.init(this.$refs.chips, {
            placeholder: "Task Tags"
        });
        this.date = M.Datepicker.init(this.$refs.datepicker, {
            format: "dd.mm.yyyy",
            defaultDate: new Date(),
            setDefaultDate: true
        });
    },
    methods: {
        ...mapMutations(['createTask']),
        submitHandler() {
            const task = {
                id: Date.now(),
                title: this.title,
                description: this.description,
                status: "active",
                tags: this.chips.chipsData,
                date: this.date.date
            }

            this.createTask(task);
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