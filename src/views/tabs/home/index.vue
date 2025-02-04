<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@store/modules/user';

const userStore = useUserStore()
const { userInfo, token } = storeToRefs(userStore)
console.log('userInfo :>> ', userInfo);
console.log('token :>> ', token);
</script>

<template>
  <div>首页</div>
</template>

<style scoped lang="scss"></style>
