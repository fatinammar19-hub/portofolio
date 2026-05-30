<script setup>
defineProps({
    dense: {
        type: Boolean,
        default: false,
    },
});

const floatingPixels = [
    { left: '8%', top: '12%', size: 12, hue: 'indigo', delay: '0s', duration: '4s' },
    { left: '85%', top: '18%', size: 8, hue: 'violet', delay: '0.5s', duration: '5s' },
    { left: '72%', top: '65%', size: 16, hue: 'orange', delay: '1s', duration: '6s' },
    { left: '15%', top: '70%', size: 8, hue: 'indigo', delay: '1.5s', duration: '4.5s' },
    { left: '45%', top: '8%', size: 8, hue: 'violet', delay: '0.2s', duration: '5.5s' },
    { left: '92%', top: '45%', size: 12, hue: 'orange', delay: '0.8s', duration: '4s' },
    { left: '5%', top: '42%', size: 16, hue: 'violet', delay: '1.2s', duration: '6s' },
    { left: '55%', top: '78%', size: 8, hue: 'indigo', delay: '0.3s', duration: '5s' },
    { left: '38%', top: '55%', size: 8, hue: 'orange', delay: '1.8s', duration: '4.2s' },
    { left: '68%', top: '28%', size: 12, hue: 'indigo', delay: '0.6s', duration: '5.8s' },
    { left: '25%', top: '32%', size: 8, hue: 'violet', delay: '2s', duration: '4.8s' },
    { left: '78%', top: '82%', size: 8, hue: 'indigo', delay: '0.4s', duration: '5.2s' },
];

const stars = Array.from({ length: 14 }, (_, i) => ({
    left: `${(i * 17 + 7) % 95}%`,
    top: `${(i * 23 + 11) % 88}%`,
    delay: `${(i * 0.35) % 4}s`,
    duration: `${2 + (i % 3)}s`,
    size: i % 3 === 0 ? 4 : 3,
}));

const fallingPixels = Array.from({ length: 6 }, (_, i) => ({
    left: `${(i * 11 + 5) % 90}%`,
    delay: `${i * 1.4}s`,
    duration: `${6 + (i % 4)}s`,
    hue: ['indigo', 'violet', 'orange', 'green'][i % 4],
}));
</script>

<template>
    <div class="pixel-background" :class="{ 'pixel-background--dense': dense }" aria-hidden="true">
        <!-- Pulsing color washes -->
        <div class="hero-bg-glow hero-bg-glow--1" />
        <div class="hero-bg-glow hero-bg-glow--2" />
        <div class="hero-bg-glow hero-bg-glow--3" />

        <!-- Scrolling grid layers -->
        <div class="pixel-grid-layer pixel-grid-layer--fine" />
        <div class="pixel-grid-layer pixel-grid-layer--accent" />
        <div class="pixel-grid-layer pixel-grid-layer--coarse" />

        <!-- Large drifting pixel orbs -->
        <div class="pixel-orb pixel-orb--1" />
        <div class="pixel-orb pixel-orb--2" />
        <div class="pixel-orb pixel-orb--3" />

        <!-- Twinkling star pixels -->
        <span
            v-for="(s, i) in stars"
            :key="`star-${i}`"
            class="pixel-star"
            :style="{
                left: s.left,
                top: s.top,
                width: `${s.size}px`,
                height: `${s.size}px`,
                animationDelay: s.delay,
                animationDuration: s.duration,
            }"
        />

        <!-- Falling pixel rain -->
        <span
            v-for="(f, i) in fallingPixels"
            :key="`fall-${i}`"
            class="pixel-fall"
            :class="`pixel-block--${f.hue}`"
            :style="{
                left: f.left,
                animationDelay: f.delay,
                animationDuration: f.duration,
            }"
        />

        <!-- Floating blocks -->
        <span
            v-for="(p, i) in floatingPixels"
            :key="`block-${i}`"
            class="pixel-block"
            :class="`pixel-block--${p.hue}`"
            :style="{
                left: p.left,
                top: p.top,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDelay: p.delay,
                animationDuration: p.duration,
            }"
        />

        <!-- Horizontal scan beam -->
        <div class="hero-scanline" />
    </div>
</template>
