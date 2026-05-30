<script setup>
import { GraduationCap } from 'lucide-vue-next';
import SectionHeader from './SectionHeader.vue';
</script>

<template>
    <section id="education" class="section-padding section-alt">
        <div class="section-container">
            <SectionHeader title="Education" subtitle="Academic background" />

            <div class="card max-w-2xl">
                <div class="flex items-start gap-4">
                    <div class="pixel-icon-box pixel-icon-box--php">
                        <GraduationCap class="h-6 w-6 stroke-[3]" aria-hidden="true" />
                    </div>
                    <div>
                        <h3 class="font-pixel text-[0.6rem] leading-relaxed" style="color: var(--pixel-text)">
                            Universitas Malikussaleh
                        </h3>
                        <p class="mt-2 text-xl" style="color: var(--pixel-accent-2)">
                            ▶ Informatics Engineering
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
