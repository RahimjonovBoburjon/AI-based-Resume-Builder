<template>
    <div class="p-6">
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold">Welcome, {{ user?.email || "Guest" }}!</h2>
            <button @click="logout" class="bg-red-600 text-white px-4 py-2 rounded">Logout</button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResumeForm v-model:name="name" v-model:email="email" v-model:experience="experience" />
            <ResumePreview :name="name" :email="email" :experience="experience" />
        </div>
    </div>
</template>

<script>
import { auth, onAuthStateChanged, signOut } from "../firebase.js";
import ResumeForm from "../components/ResumeForm.vue";
import ResumePreview from "../components/ResumePreview.vue";

export default {
    components: { ResumeForm, ResumePreview },
    data() {
        return {
            user: null,
            name: "",
            email: "",
            experience: ""
        };
    },
    methods: {
        async logout() {
            await signOut(auth);
            this.$router.push("/auth");
        }
    },
    created() {
        onAuthStateChanged(auth, (user) => {
            this.user = user;
        });
    }
};
</script>

<style scoped></style>