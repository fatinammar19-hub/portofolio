<script setup>
import SectionHeader from './SectionHeader.vue';

const linkedInUrl = 'https://www.linkedin.com/in/ammar-fatin-646815381';
</script>

<template>
    <section id="contact" class="section-padding section-alt">
        <div class="section-container">
            <SectionHeader title="Contact" subtitle="Let's connect" />

            <div class="card max-w-xl text-center sm:text-left">
                <p class="mb-6 text-xl" style="color: var(--pixel-muted)">
                    Open to learning opportunities, collaboration, and professional networking.
                </p>
                <a
                    :href="linkedInUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-primary pixel-btn inline-flex items-center gap-2"
                >
                    ▶ LinkedIn
                </a>
            </div>
        </div>
    </section>
</template>
