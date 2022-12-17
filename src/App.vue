<script setup>
import { userAdviceStore } from "@/stores/counter";
import { mapActions, mapState } from "pinia";
import dividerDesk from "./assets/pattern-divider-desktop.svg";
import dividerMob from "./assets/pattern-divider-mobile.svg";
import dice from "./assets/icon-dice.svg";
</script>

<script>
export default {
  computed: {
    ...mapState(userAdviceStore, ["advice", "nAdvice"]),
  },
  methods: {
    ...mapActions(userAdviceStore, ["fetchAdvice", "reloadAdvice"]),
    newAdvice() {
      this.fetchAdvice();
      console.log("generate advice");
    },
  },
  mounted() {
    this.fetchAdvice();
  },
};
</script>

<template>
  <main class="w-screen h-screen bg-dark-blue flex justify-center items-center">
    <section
      class="bg-dark-grayish-blue min-w-[538px] max-w-[538px] rounded-lg flex flex-col items-center px-[3rem] pt-[3rem] pb-[5rem] relative"
    >
      <h4
        class="uppercase text-neon-green tracking-[.25em] text-[13px] text-center mb-[1rem]"
      >
        {{ nAdvice }}
      </h4>
      <h1 class="text-[28px] text-center text-white font-[800] mb-[3rem]">
        {{ advice }}
      </h1>
      <img :src="dividerDesk" alt="divider-desk" class="hidden lg:block" />
      <img :src="dividerMob" alt="divider-mob" class="lg:hidden" />

      <div
        class="w-[65px] h-[65px] absolute bottom-0 left-[50%] translate-y-[50%] translate-x-[-50%] flex justify-center items-center z-10 bg-neon-green rounded-full"
        @click="this.newAdvice()"
      >
        <img :src="dice" alt="dice" />
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import "./src/assets/main.scss";
</style>
