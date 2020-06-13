<template>
    <div>
        <h1>Tasks</h1>

        <hr>
        <table v-if="allTasks.length">
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Date</th>
                <th>Description</th>
                <th>Status</th>
                <th>Open</th>
            </tr>
            </thead>

            <tbody>
                <tr v-for="(task, index) in allTasks" :key="task.id">
                    <td>{{index + 1}}</td>
                    <td>{{task.title}}</td>
                    <td>{{new Date(task.date).toLocaleDateString() }}</td>
                    <td class="parent"><div class="text">{{task.description}}</div></td>

                    <td><span style="font-size: 18px;" :class="{'green-text text-darken-3': task.status === 'active', 'orange-text tex-darken-3': task.status === 'outdated', 'blue-text tex-darken-3': task.status === 'completed'}">{{task.status}}</span></td>

                    <td>
                        <router-link tag="button" class="btn btn-small" :to="'/task/' + task.id">Open</router-link>
                    </td>
                </tr>
            </tbody>
        </table>

        <p v-else>No Tasks</p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: mapGetters(['allTasks'])
}
</script>

<style lang="scss" scoped>
    .text {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .parent {
        max-width: 400px;
    }
</style>