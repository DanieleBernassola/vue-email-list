const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
    };
  },
  created() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        console.log(response.data);
        this.emails = response.data;
        console.log(this.emails);
      });
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        console.log(response.data);
        this.emails = response.data;
        console.log(this.emails);
      });
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        console.log(response.data);
        this.emails = response.data;
        console.log(this.emails);
      });
  },
}).mount("#app");
