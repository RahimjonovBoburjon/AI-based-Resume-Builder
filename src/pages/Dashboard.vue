<template>
    <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ResumeForm v-model:name="name" v-model:email="email" v-model:experience="experience" />
        <ResumePreview :name="name" :email="email" :experience="experience" />
    </div>
</template>

<script>
import ResumeForm from "../components/ResumeForm.vue";
import ResumePreview from "../components/ResumePreview.vue";

export default {
    components: { ResumeForm, ResumePreview },
    data() {
        return {
            name: "",
            email: "",
            experience: ""
        };
    }
};
</script>

<style></style>