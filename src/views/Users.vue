<template>
  <div class="bg-blue-100 min-h-screen">
    <Top />
    <div class="container mx-auto mt-20 max-w-4xl">
      <Search />
    </div>
    <div class="container mx-auto mt-20 max-w-5xl">
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
  name: "users",
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
