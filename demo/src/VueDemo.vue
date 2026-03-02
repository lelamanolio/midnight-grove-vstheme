<template>
  <section class="card" :class="props.styleModifier" :style="cssProps" data-test="vue-demo">
    <h2>{{ title }}</h2>

    <button
      class="btn"
      :disabled="uiState === 'listening'"
      @click="getNewIntent"
    >
      {{ uiState }}
    </button>

    <svg class="icon" :class="props.styleModifier" :style="cssProps" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path fill="currentColor" d="M4 6h16v12H4z"/>
    </svg>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

type Props = {
  styleModifier?: string;
};

const props = defineProps<Props>();

const uiState = ref<"idle" | "listening">("idle");
const title = computed(() => `Vue SFC: ${uiState.value}`);

const cssProps = computed(() => ({
  "--accent": uiState.value === "listening" ? "#00C48C" : "#5BD6D6",
}));

function getNewIntent() {
  uiState.value = uiState.value === "idle" ? "listening" : "idle";
}
</script>

<style scoped>
.card {
  padding: 16px;
  border-radius: 12px;
  border: 1px solid color-mix(in srgb, var(--accent) 40%, transparent);
}

.btn {
  border-radius: 999px;
  background: var(--accent);
  color: #07130f;
  padding: 8px 12px;
}
</style>
