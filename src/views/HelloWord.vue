<template>
  <div class="h-screen flex justify-center items-center flex-col gap-5">
    <h1 class="text-5xl text-primary">Hello world</h1>
    <button @click="trocaTema" class="btn btn-primary text-base-100">
      Troca tema {{ contador.count }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounterStore } from "../store/count";

export default defineComponent({
  data() {
    return {
      html: null as HTMLElement | null,
      tema: "dark",
      contador: useCounterStore(),
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
      this.contador.increment();
    },
  },
});
</script>
