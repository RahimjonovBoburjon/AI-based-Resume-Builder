<template>
    <div class="p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4">Resume Preview</h2>
        <div v-if="name || email || experience">
            <p><strong>Name:</strong> {{ name }}</p>
            <p><strong>Email:</strong> {{ email }}</p>
            <p><strong>Experience:</strong> {{ experience }}</p>
        </div>
        <p v-else class="text-gray-500">No data entered yet.</p>
    </div>
</template>

<script>
export default {
    props: ["name", "email", "experience"]
};
</script>


<style></style>