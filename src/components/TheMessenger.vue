<script lang="ts">
import { messengerSocketController } from '../controllers/messenger-socket'

import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "TheMessenger",
  setup() {
    const messages = reactive(['1', '2']);
    const inputModel = ref('');

    const handleSubmit = () => {
      console.log("submit");
      messengerSocketController.sendMessage(inputModel.value)
    };

    return {
      messages,
      inputModel,
      handleSubmit,
    };
  },
});
</script>

<template>
  <div class="messenger">
    <div class="messages">
        <ul>
            <li 
                v-for="(message, index) in messages" 
                :key="index"
            >
                {{ message }}
            </li>
        </ul>
    </div>
    <form @submit.prevent="handleSubmit" action="" class="messenger-form">
      <input type="text" v-model="inputModel" />
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
      background-color: #ffee00;
      color: #000;
      cursor: pointer;
    }
  }
}

.messages {
  ul {
    list-style: none;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
}
</style>
