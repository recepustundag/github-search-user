<template>
  <div class="bg-blue-100 min-h-screen">
    <Top />
    <div class="container mx-auto mt-20 max-w-4xl">
      <Search />
    </div>
    <div class="flex items-center justify-center py-6">
      <h3 class="font-sermibold text-2xl text-indigo-300" v-if="$store.state.user != null"> {{ $store.state.user.name }} Repos</h3>
    </div>
    <div class="container mx-auto max-w-5xl pb-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-4 mt-4 md:mt-8" v-if="repos != null">
        <Repocard :repo="item" v-for="item in repos" :key="item.id" />
      </div>
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top";
import Search from "@/components/Search";
import Repocard from "@/components/Repocard";

export default {
  name: "repos",
  components: {
    Top,
    Search,
    Repocard,
  },
  computed: {
    repos() {
      return this.$store.state.repos
    },
  }
};
</script>
