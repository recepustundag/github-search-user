<template>
  <div class="bg-white py-2">
    <div class="container mx-auto">
      <div class="flex items-center justify-center">
        <div class="flex items-center justify-center uppercase text-white bg-indigo-900 w-8 h-8 rounded-full">
          <template v-if="user && typeof user.message == 'undefined'">
          {{ user.name.substring(0,1) }}
          </template>
          <template v-else>
            W
          </template>
        </div>
        <span class="mx-2">Welcome</span>
        <span class="font-semibold uppercase" v-if="user">, {{ user.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
