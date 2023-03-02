<template>
  <MasterLayout msg="My Dashboard"/>
  <div class="row">
    <div class="col-4">
      <label for="title">Title</label>
      <input type="text" v-model="title" placeholder="Title of book">
    </div>
    <div class="col-4">
      <label for="author">Author</label>
      <input type="text" v-model="author" placeholder="Author's name">
    </div>
    <div class="col-4">
      <button class="btnSearch" @click="search()">Search</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CallApiRepository from "@/repositories/CallApiRepository";

@Options({
  components: {

  },
})

export default class DashboardView extends Vue {
  title?: string = "";
  author?: string = "";
  async search() {
    const response = await CallApiRepository.find(this.title, this.author);
    console.log(JSON.stringify(response));
  }

}
</script>