<script setup>
import { onMounted, provide, ref, watch } from 'vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Education from './components/Education.vue';
import Experience from './components/Experience.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';

const isDark = ref(false);

provide('isDark', isDark);

function applyTheme(dark) {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
}

function toggleTheme() {
    isDark.value = !isDark.value;
}

provide('toggleTheme', toggleTheme);

watch(isDark, applyTheme);

onMounted(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'dark' || saved === 'light') {
        isDark.value = saved === 'dark';
    } else {
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    applyTheme(isDark.value);
});
</script>

<template>
    <div class="portfolio-root retro-pixel pixel-page-bg min-h-screen transition-colors duration-300">
        <div class="scanlines" aria-hidden="true" />
        <Navbar />
        <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Experience />
            <Contact />
        </main>
        <Footer />
    </div>
</template>
