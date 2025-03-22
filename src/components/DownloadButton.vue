<template>
    <button @click="downloadPDF" class="w-full bg-green-600 text-white p-2 rounded mt-4">
        Download as PDF
    </button>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
    props: ["resumeData"],
    methods: {
        downloadPDF() {
            const element = document.getElementById("resume-preview");
            html2pdf().from(element).save("Resume.pdf");
        }
    }
};
</script>

<style></style>