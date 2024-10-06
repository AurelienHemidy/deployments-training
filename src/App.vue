<template>
  <h1 class="title">This is a test for CI/CD training</h1>
  <button class="add" @click="() => addTask(`Task number ${tasks.length + 1}`)">Add +</button>
  <div v-for="(task, index) in tasks" :key="index">
    <TaskItem :text="task" />
  </div>

  <p class="success">{{ successMessage('this is a success') }}</p>
</template>

<style scoped>
.add {
  position: absolute;
  top: 20px;
  left: 20px;
}

.title {
  position: absolute;
  text-align: center;
  top: 20px;
}
.success {
  position: absolute;
  text-align: center;
  bottom: 20px;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import TaskItem from './components/TaskItem.vue'
import { successMessage } from '@/utils/successMessage'

const tasks = ref<string[]>(['My first task', 'my second task'])

function addTask(text: string) {
  tasks.value.push(text)
}
</script>
