<script setup>
import { onMounted, ref } from 'vue';
import PixelBackground from './PixelBackground.vue';

const visible = ref(false);

function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

onMounted(() => {
    requestAnimationFrame(() => {
        visible.value = true;
    });
});
</script>

<template>
    <section id="hero" class="hero-section relative flex min-h-screen items-center overflow-hidden border-b-4 border-[var(--pixel-border)] pt-20">
        <PixelBackground dense />

        <div class="section-container relative z-10 w-full">
            <div
                class="mx-auto max-w-4xl text-center"
                :class="visible ? 'hero-content-visible' : 'hero-content-hidden'"
            >
                <p class="hero-item hero-kicker mb-6" style="--delay: 0ms">
                    <span class="hero-pulse-dot mr-2 inline-block bg-[var(--pixel-accent-3)]" />
                    ▶ START GAME
                </p>

                <h1 class="hero-item hero-title" style="--delay: 100ms">
                    <span class="hero-title-line">HI, I'M</span>
                    <span class="hero-gradient-text hero-title-name">AMMAR FATIN</span>
                </h1>

                <p class="hero-item mt-6" style="--delay: 200ms">
                    <span class="hero-role">Software Engineering_</span>
                </p>

                <p class="hero-item hero-intro mx-auto mt-6 max-w-2xl" style="--delay: 300ms">
                    Building my path in software development — focused on web technologies and growing toward professional engineering.
                </p>

                <div class="hero-item mt-10 flex flex-wrap justify-center gap-4" style="--delay: 400ms">
                    <button type="button" class="btn-primary pixel-btn" @click="scrollToSection('projects')">
                        ▶ Projects
                    </button>
                    <button type="button" class="btn-secondary pixel-btn" @click="scrollToSection('contact')">
                        Contact
                    </button>
                </div>

                <div class="hero-item mt-14 flex flex-wrap justify-center gap-3" style="--delay: 500ms">
                    <span
                        v-for="(tag, i) in ['HTML', 'CSS', 'PHP']"
                        :key="tag"
                        class="hero-tag-pixel"
                        :style="{ '--tag-delay': `${i * 120}ms` }"
                    >
                        {{ tag }}
                    </span>
                </div>
            </div>
        </div>

        <button
            type="button"
            class="hero-scroll absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[var(--pixel-accent-2)]"
            aria-label="Scroll down"
            @click="scrollToSection('about')"
        >
            <span class="font-pixel text-[0.45rem]">▼ SCROLL</span>
        </button>
    </section>
</template>
