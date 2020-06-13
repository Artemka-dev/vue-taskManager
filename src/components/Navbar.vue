<template>
    <nav class="teal lighten-1">
        <div class="nav-wrapper ">
            <router-link to="/" class="brand-logo">Tasks</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">

                <router-link tag="li" to="/">
                    <a href="#">Tasks</a>
                </router-link>

                <router-link tag="li" to="/create-task" active-class="active" exact>
                    <a href="#">Create</a>
                </router-link>
            
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    nav {
        padding: 0 2rem;
    }
</style>