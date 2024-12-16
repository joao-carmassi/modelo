<template>
  <div class="h-screen flex justify-center items-center flex-col gap-5">
    <h1 class="text-5xl text-primary">Hello world</h1>
    <button @click="trocaTema" class="btn btn-primary text-base-100">
      Troca tema
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      html: null as HTMLElement | null,
      tema: "light",
    };
  },
  mounted() {
    this.html = document.querySelector("html");
  },
  methods: {
    trocaTema() {
      if (this.tema === "light") {
        this.tema = "dark";
      } else {
        this.tema = "light";
      }
      this.html?.setAttribute("data-theme", this.tema);
    },
  },
});
</script>
