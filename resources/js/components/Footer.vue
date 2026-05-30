<script setup>
const year = new Date().getFullYear();
</script>

<template>
    <footer class="pixel-footer py-8">
        <div class="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p class="pixel-footer-text font-pixel text-[0.45rem]">
                © {{ year }} AMMAR FATIN
            </p>
            <p class="pixel-footer-text">
                Built with Laravel & Vue 3 ■
            </p>
        </div>
    </footer>
</template>
