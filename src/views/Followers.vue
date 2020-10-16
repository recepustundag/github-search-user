<template>
  <div class="bg-blue-100 min-h-screen">
    <Top />
    <div class="container mx-auto mt-20 max-w-4xl">
      <Search />
    </div>
    <div class="flex items-center justify-center py-6">
      <h3 class="font-sermibold text-2xl text-indigo-300"> {{ $store.state.user.name }} Followers</h3>
    </div>
    <div class="container mx-auto max-w-5xl">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-4 mt-4 md:mt-8" v-if="followers != null">
        <Usercard :user="item" v-for="item in followers" :key="item.id" />
      </div>
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top";
import Search from "@/components/Search";
import Usercard from "@/components/Usercard";

export default {
  name: "followers",
  components: {
    Top,
    Search,
    Usercard,
  },
  computed: {
    followers() {
      return this.$store.state.followers
    },
  }
};
</script>
