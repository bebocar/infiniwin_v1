<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const submit = async () => {
      const response = await axios.post('/login', {
        email: email.value,
        password: password.value,
      });
      localStorage.setItem('token', response.data.token);
      await router.push({ path: '/' });
    };

    return {
      email,
      password,
      submit,
    };
  },
};
</script>

<template>
<div class="container">
  <p style="color:red">About us</p>
</div>
</template>