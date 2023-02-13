<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "TheMessenger",
  setup() {
    const messages = reactive(['1', '2']);

    const handleSubmit = () => {
      console.log("submit");
    };

    return {
      messages,
      handleSubmit,
    };
  },
});
</script>

<template>
  <div class="messenger">
    <div class="messages">
        <ul>
            <li v-for="message in messages">
                {{ message }}
            </li>
        </ul>
    </div>
    <form @submit.prevent="handleSubmit" action="" class="messenger-form">
      <input type="text" />
      <button>Send</button>
    </form>
  </div>
</template>

<style lang="scss">
.messenger {
  &-form {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: grid;
    grid-template-columns: 80% 1fr;
    column-gap: 30px;
    background-color: #eee;
    padding: 10px;

    input {
      background-color: #fff;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }

    button {
      outline: none;
      border: 0;
      background-color: #000;
      color: blue;
    }
  }
}
</style>
