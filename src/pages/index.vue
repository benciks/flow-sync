<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="w-xl bg-gray-100 rounded-lg p-8">
      <div>
        <h1 class="text-3xl font-bold">Flow Sync</h1>
        <p class="mt-1 text-sm text-gray-600">
          Welcome to Flow Sync
        </p>
      </div>

        <div class="mt-8">
          <div class="font-semibold">Taskd Certificate</div >
          <div class="text-sm text-gray-600 max-w-sm">In order to setup a sync on your machine, you need to download the CA certificate of the taskd server. This certificate is used to verify the identity of the server and ensure that the connection is secure.</div>

          <button @click="downloadTaskwarriorKeys" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">Download</button>
        </div>

        <div class="mt-8">
          <div class="font-semibold">Add timewarrior key</div>
          <div class="text-sm text-gray-600 max-w-sm">Insert your timewarrior key below to add it to your account, after that you can start syncing your tasks using <a href="https://github.com/timewarrior-synchronize/timew-sync-client" class="text-blue-500 underline">timew-sync-client</a></div>
          <textarea class="w-full mt-2 h-24 bg-gray-200 rounded-lg p-4 text-sm" placeholder="Paste your public key here" v-model="timewarriorKey">
          </textarea>
          <button @click="uploadKey" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">Add</button>
        </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDownloadKeysMutation } from '@/gql/mutations/DownloadKeys';
import { useUploadKeyMutation } from '@/gql/mutations/UploadKey';

const timewarriorKey = ref('');

const { executeMutation: downloadKeysMutation } = useDownloadKeysMutation();
const { executeMutation: uploadKeyMutation } = useUploadKeyMutation();

const downloadTaskwarriorKeys = async () => {
  const {data, error} = await downloadKeysMutation({});
  if (error) {
    alert(error.message);
  }

  if (data) {
    // Decode the base64 string into a byte array
    const byteCharacters = atob(data.downloadTaskKeys);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    // Create a Blob from the byte array
    const blob = new Blob([byteArray], { type: 'application/zip' });

    // Create a link to download the file
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'flow_taskd_ca.zip';
    link.click();
  }
}

const uploadKey = async () => {
  const {data, error} = await uploadKeyMutation({
    key: timewarriorKey.value
  });

  if (error) {
    alert(error.message);
  }

  if (data) {
    alert('Key uploaded');
  }

  timewarriorKey.value = '';
}
</script>
