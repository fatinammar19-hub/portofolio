<script setup>
import SectionHeader from './SectionHeader.vue';

const project = {
    title: 'Website Portfolio',
    description: 'My personal portfolio website — built to showcase who I am, what I learn, and what I build as a software engineering student.',
    tags: ['HTML', 'CSS', 'PHP'],
};
</script>

<template>
    <section id="projects" class="section-padding">
        <div class="section-container">
            <SectionHeader title="Projects" subtitle="What I've built so far" />

            <article class="project-card mx-auto max-w-2xl">
                <div class="mb-4 flex items-start justify-between gap-2">
                    <h3 class="font-pixel text-[0.65rem] leading-relaxed" style="color: var(--pixel-text)">
                        {{ project.title }}
                    </h3>
                    <span class="pixel-badge shrink-0" style="background: var(--pixel-accent-2); color: #fff">
                        Live
                    </span>
                </div>
                <p class="mb-4 text-xl" style="color: var(--pixel-muted)">
                    {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                    <span v-for="tag in project.tags" :key="tag" class="pixel-tag">
                        {{ tag }}
                    </span>
                </div>
            </article>
        </div>
    </section>
</template>
