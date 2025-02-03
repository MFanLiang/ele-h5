<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter, RouterView } from 'vue-router';
import { Tabbar, TabbarItem } from 'vant';

const route = useRoute();
const router = useRouter();

const active = ref(route.name as string);

watch(active, newVal => router.push({ name: newVal }));
</script>

<template>
  <div>
    <router-view />

    <Tabbar v-model="active">
      <TabbarItem name="home" icon="home-o">首页</TabbarItem>
      <TabbarItem name="order" icon="bars">订单</TabbarItem>
      <TabbarItem name="me" icon="contact">我的</TabbarItem>
    </Tabbar>
  </div>
</template>

<style scoped lang="scss"></style>
