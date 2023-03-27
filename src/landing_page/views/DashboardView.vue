<template>
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
      <button class="btnSearch" id="btnSearch" @click="search()" v-bind="btnState">Search</button>
    </div>
    <div class="col-4">
      {{ responseData }}
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CallApiRepository from "@/landing_page/repositories/CallApiRepository";

@Options({
  components: {

  },
  methods: {

  },
  computed: {
    renderResponseData() {
      return this.responseData;
    }
  },
})

export default class DashboardView extends Vue {
  title?: string = "";
  author?: string = "";
  btnState?: string = "";
  responseData?: string = "";

  async search() {
    this.btnState = "disabled";
    const response = await CallApiRepository.find(this.title, this.author);
    this.btnState = "";
    // console.log(JSON.stringify(response));
    this.responseData = JSON.stringify(response);
  }
}
</script>