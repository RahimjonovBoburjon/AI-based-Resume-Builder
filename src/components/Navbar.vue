<template>
    <nav class="bg-blue-600 p-4 text-white flex justify-between">
        <a href="/" class="text-xl font-bold">AI Resume Builder</a>
        <div>
            <router-link to="/" class="mr-4 hover:underline">Home</router-link>
            <router-link to="/dashboard" class="mr-4 hover:underline">Dashboard</router-link>
            <router-link to="/auth" class="hover:underline">Login</router-link>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style></style>