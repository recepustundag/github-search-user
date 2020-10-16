<template>
  <div class="bg-white p-4 rounded">
    <div class="flex items-center justify-center mb-2">
      <img
        :src="user.avatar_url"
        class="w-24 rounded-full"
      />
    </div>

    <div class="flex items-center justify-center">
      <div class="flex flex-col items-start">
        <span class="font-semibold">{{ user.login }}</span>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-center">
      <a :href="user.html_url" target="_blank" class="bg-gray-200 text-gray-500 text-sm font-semibold rounded py-2 px-12 transition duration-150 ease-in hover:bg-gray-700 hover:text-white">View Profile</a>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>
