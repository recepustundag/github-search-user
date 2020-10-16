<template>
  <div class="bg-blue-100 min-h-screen">
    <Top />
    <div class="container mx-auto mt-20 max-w-4xl">
      <Search />
    </div>
    <div class="flex items-center justify-center py-6">
      <h3 class="font-sermibold text-2xl text-indigo-300"> {{ $store.state.user.name }} Following</h3>
    </div>
    <div class="container mx-auto max-w-5xl">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-4 mt-4 md:mt-8" v-if="following != null">
        <Usercard :user="item" v-for="item in following" :key="item.id" />
      </div>
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top";
import Search from "@/components/Search";
import Usercard from "@/components/Usercard";

export default {
  name: "following",
  components: {
    Top,
    Search,
    Usercard,
  },
  computed: {
    following() {
      return this.$store.state.following
    },
  }
};
</script>
