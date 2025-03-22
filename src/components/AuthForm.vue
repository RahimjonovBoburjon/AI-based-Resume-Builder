<template>
    <div class="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 class="text-2xl font-bold mb-4">{{ isLogin ? "Login" : "Sign Up" }}</h2>

        <input v-model="email" type="email" placeholder="Email" class="w-full p-2 border rounded mb-4" />
        <input v-model="password" type="password" placeholder="Password" class="w-full p-2 border rounded mb-4" />

        <button @click="handleAuth" class="w-full bg-blue-600 text-white p-2 rounded">
            {{ isLogin ? "Login" : "Sign Up" }}
        </button>

        <p class="mt-4 text-center">
            <a @click="isLogin = !isLogin" class="text-blue-500 cursor-pointer">
                {{ isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login" }}
            </a>
        </p>
    </div>
</template>

<script>
import { auth } from "../firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default {
    data() {
        return {
            email: "",
            password: "",
            isLogin: true
        };
    },
    methods: {
        async handleAuth() {
            try {
                if (this.isLogin) {
                    await signInWithEmailAndPassword(auth, this.email, this.password);
                } else {
                    await createUserWithEmailAndPassword(auth, this.email, this.password);
                }
                alert("Success!");
                this.$router.push("/dashboard");
            } catch (error) {
                alert(error.message);
            }
        }
    }
};
</script>

<style scoped></style>