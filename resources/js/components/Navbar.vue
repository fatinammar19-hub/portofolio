<script setup>
import { inject, onMounted, onUnmounted, ref } from 'vue';

const isDark = inject('isDark');
const toggleTheme = inject('toggleTheme');

const isScrolled = ref(false);
const isMobileOpen = ref(false);

const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
];

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    isMobileOpen.value = false;
}

function onScroll() {
    isScrolled.value = window.scrollY > 20;
}

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
});
</script>

<template>
    <header
        class="fixed inset-x-0 top-0 z-50 transition-all duration-100"
        :class="isScrolled ? 'pixel-nav' : 'pixel-nav pixel-nav--transparent'"
    >
        <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <button type="button" class="pixel-nav-logo" @click="scrollToSection('hero')">
                AF<span style="color: var(--pixel-accent)">.</span>
            </button>

            <ul class="hidden items-center gap-6 md:flex">
                <li v-for="link in navLinks" :key="link.id">
                    <button
                        type="button"
                        class="pixel-nav-link"
                        @click="scrollToSection(link.id)"
                    >
                        {{ link.label }}
                    </button>
                </li>
            </ul>

            <div class="flex items-center gap-2">
                <button
                    type="button"
                    class="pixel-nav-btn"
                    :aria-label="isDark ? 'Light mode' : 'Dark mode'"
                    @click="toggleTheme"
                >
                    <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </button>

                <button
                    type="button"
                    class="pixel-nav-btn md:hidden"
                    aria-label="Menu"
                    @click="isMobileOpen = !isMobileOpen"
                >
                    <svg v-if="!isMobileOpen" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                        <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                        <path stroke-linecap="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </nav>

        <div
            v-show="isMobileOpen"
            class="border-t-4 border-[var(--pixel-border)] bg-[var(--pixel-surface)] px-4 py-4 md:hidden"
        >
            <ul class="flex flex-col gap-2">
                <li v-for="link in navLinks" :key="link.id">
                    <button
                        type="button"
                        class="pixel-nav-link w-full border-2 border-[var(--pixel-border)] bg-[var(--pixel-surface-2)] px-3 py-2 text-left"
                        @click="scrollToSection(link.id)"
                    >
                        ▶ {{ link.label }}
                    </button>
                </li>
            </ul>
        </div>
    </header>
</template>
