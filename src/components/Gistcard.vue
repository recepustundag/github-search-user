<template>
  <div class="bg-white p-4 rounded">
    <div class="flex items-center justify-center mb-2">
      <img
        :src="gist.owner.avatar_url"
        class="w-24 rounded-full"
      />
    </div>

    <div class="flex items-center justify-center">
      <div class="flex flex-col items-start justify-center h-10">
        <span class="text-gray-500 text-sm" v-if="gist.description != '' && typeof gist.description != 'object'">{{ gist.description }}</span>
        <span class="text-gray-500 text-sm" v-else>No Comment</span>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-center">
      <a :href="gist.html_url" target="_blank" class="bg-gray-200 text-gray-500 text-sm font-semibold rounded py-2 px-12 transition duration-150 ease-in hover:bg-gray-700 hover:text-white">View Details</a>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    gist: {
      type: Object,
      required: true
    }
  }
};
</script>
