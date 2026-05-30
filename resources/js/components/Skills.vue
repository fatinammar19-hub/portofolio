<script setup>
import { Braces, Code2, HelpCircle, Palette } from 'lucide-vue-next';
import SectionHeader from './SectionHeader.vue';

const roadmap = [
    {
        step: 1,
        name: 'HTML',
        description: 'Learning structure & semantics',
        icon: Code2,
        boxClass: 'pixel-icon-box--html',
        status: 'active',
    },
    {
        step: 2,
        name: 'CSS',
        description: 'Learning layout & styling',
        icon: Palette,
        boxClass: 'pixel-icon-box--css',
        status: 'active',
    },
    {
        step: 3,
        name: 'PHP',
        description: 'Learning server-side logic',
        icon: Braces,
        boxClass: 'pixel-icon-box--php',
        status: 'active',
    },
    {
        step: 4,
        name: 'Coming Soon',
        description: 'More skills on the way',
        icon: HelpCircle,
        boxClass: 'pixel-icon-box--soon',
        status: 'soon',
    },
];
</script>

<template>
    <section id="skills" class="section-padding section-alt">
        <div class="section-container">
            <SectionHeader title="Skills" subtitle="My learning roadmap" />

            <div class="skill-roadmap">
                <div
                    v-for="(item, index) in roadmap"
                    :key="item.step"
                    class="skill-roadmap-item"
                    :class="{
                        'skill-roadmap-item--soon': item.status === 'soon',
                        'skill-roadmap-item--last': index === roadmap.length - 1,
                    }"
                >
                    <!-- connector line (not on last item before end dot handled separately) -->
                    <div v-if="index < roadmap.length - 1" class="skill-roadmap-line" aria-hidden="true" />

                    <div class="skill-roadmap-node">
                        <div
                            class="pixel-icon-box skill-roadmap-icon"
                            :class="[item.boxClass, item.status === 'soon' ? 'skill-roadmap-icon--soon' : '']"
                        >
                            <component :is="item.icon" class="h-6 w-6 stroke-[3]" aria-hidden="true" />
                        </div>
                        <span class="skill-roadmap-step font-pixel">LV {{ item.step }}</span>
                    </div>

                    <div class="skill-roadmap-card card" :class="{ 'skill-roadmap-card--soon': item.status === 'soon' }">
                        <p class="font-pixel text-[0.55rem]" style="color: var(--pixel-text)">
                            {{ item.name }}
                        </p>
                        <p class="mt-1 text-lg" style="color: var(--pixel-muted)">
                            {{ item.description }}
                        </p>
                        <span v-if="item.status === 'soon'" class="pixel-badge mt-3 inline-block">
                            Coming Soon
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
