<template>
    <form @submit.prevent="generateResume" class="p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto">
        <h2 class="text-xl font-bold mb-4">Fill Your Details</h2>

        <label class="block mb-2">Full Name</label>
        <input v-model="name" type="text" class="w-full p-2 border rounded mb-4" required />

        <label class="block mb-2">Email</label>
        <input v-model="email" type="email" class="w-full p-2 border rounded mb-4" required />

        <label class="block mb-2">Experience</label>
        <textarea v-model="experience" class="w-full p-2 border rounded mb-4" required></textarea>

        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded">Generate Resume</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            experience: ''
        };
    },
    methods: {
        generateResume() {
            console.log("Resume Data:", this.name, this.email, this.experience);
        }
    }
};
</script>

<style></style>