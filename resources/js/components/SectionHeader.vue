<script setup>
defineProps({
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
});
</script>

<template>
    <div class="section-header">
        <p class="pixel-label">◆ {{ title }} ◆</p>
        <h2 class="section-title">{{ title }}</h2>
        <p v-if="subtitle" class="section-subtitle">
            {{ subtitle }}
        </p>
    </div>
</template>
