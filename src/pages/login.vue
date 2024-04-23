<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="w-96 h-96 bg-gray-100 rounded-lg p-8">
      <form class="flex flex-col items-center justify-center gap-4" @submit.prevent="signIn">
        <div class="mt-4 text-center">
          <h1 class="text-3xl font-bold">Flow Sync</h1>
          <p class="mt-1 text-sm text-gray-600">
            Login to your account
          </p>
        </div>
        <div class="w-full">
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <input v-model="username" required type="text" placeholder="Username"  class="mt-1 p-2 block w-full shadow-sm rounded-md border-gray-300 focus:border-blue-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 sm:text-sm" />
        </div>
        <div class="w-full">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input v-model="password" required type="password" placeholder="Password"  class="mt-1 p-2 block w-full shadow-sm rounded-md border-gray-300 focus:border-blue-300 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 sm:text-sm" />
        </div>

        <div class="mt-5 flex items-center justify-center gap-4">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSignInMutation } from '@/gql/mutations/SignIn';
import { useRouter } from 'vue-router';

const router = useRouter();
const { executeMutation: signInMutation } = useSignInMutation();

const username = ref('');
const password = ref('');

const signIn = async () => {
  const {data, error} = await signInMutation({
    username: username.value,
    password: password.value
  });
  if (error) {
    alert(error.message);
  }

  if (data) {
    localStorage.setItem("authorization", data.signIn.token);
    localStorage.setItem("user", JSON.stringify(data.signIn.user));
    await router.push({ name: "/" });
  }
}
</script>
