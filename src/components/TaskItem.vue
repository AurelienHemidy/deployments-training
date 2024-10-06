<template>
  <div class="taskContainer">
    <h1>{{ text }}</h1>
  </div>
</template>

<script setup lang="ts">
interface TaskItemProps {
  text: string
}

defineProps<TaskItemProps>()
</script>
