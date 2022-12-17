//import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const userAdviceStore = defineStore("counter", {
  state: () => ({
    advice: "",
    nAdvice: "",
  }),
  actions: {
    async fetchAdvice() {
      try {
        const data = await axios.get("https://api.adviceslip.com/advice");
        const { id, advice } = data.data.slip;
        console.log(data.data.slip);
        this.advice = advice;
        this.nAdvice = id;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  getters: {
    getAdvice: (state) => {
      return `"${state.advice}"`;
    },
    getIdAdvice: (state) => {
      return `advice #${state.nAdvice}`;
    },
  },
});
