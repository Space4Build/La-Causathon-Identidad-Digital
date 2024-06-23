<script setup lang="ts"></script>

<template>
  <div class="grid layout min-h-dvh gap-3 bg-base-200" data-theme="light">
    <MainHeader class="main-header bg-base-100"/>
    <!-- <sidebar class="bg-base-100">

    </sidebar> -->
    <div class="drawer lg:drawer-open bg-base-100">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <!-- Page content here -->
        <label for="my-drawer-2" class="btn btn-square btn-ghost drawer-button lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label> 
        <ul class="menu p-4 w-80 min-h-full text-base-content bg-base-100">
          <!-- Sidebar content here -->
          <!-- <li><NuxtLink href="/">Credenciales</NuxtLink></li>
          <li><NuxtLink href="/profiles">Perfiles</NuxtLink></li> -->
          <template v-for="nav in navs">
            <li><NuxtLink :href="nav.href" class="text-lg">{{ nav.label }}</NuxtLink></li>
          </template>
        </ul>
      
      </div>
    </div>
    <main class="flex-1 flex flex-col bg-base-100">
      <slot />
    </main>
    <!-- <MainFooter class="bg-base-100" /> -->
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      navs: [
        {href: "/", label: "Crendenciales"},
        {href: "/profiles", label: "Perfiles"},
      ],
    }
  },
}
</script>

<style scoped>
.layout {
  grid-template-areas: "header header" "sidebar body";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
}
.main-header {
  grid-area: header;
}
</style>
