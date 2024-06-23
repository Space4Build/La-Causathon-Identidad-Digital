<script setup lang="ts">
import type { LocalSS58Account } from '~/utils/accounts';
</script>

<template>
  <GeneralSimplePage title="Perfiles" class="">
    <div class="flex flex-col mt-4 px-4 gap-3">
      <div class="flex justify-end">
        <button class="btn btn-primary btn-outline" onclick="my_modal_2.showModal()">Nuevo perfil</button>
      </div>
      <dialog id="my_modal_2" class="modal" ref="my_modal_2">
        <div class="modal-box">
          <h3 class="text-lg font-bold">¿Qué nombre le pondrás a tu nuevo perfil?</h3>
          <label class="form-control w-full my-3">
          <div class="label">
            <span class="label-text">Nombre del perfil</span>
          </div>
          <input type="text" v-model="acc" placeholder="Nombre" class="input input-bordered w-full" />
        </label>
          <div class="flex justify-end gap-3">
            <button class="btn btn-ghost" onclick="my_modal_2.close()">Cerrar</button>
            <button class="btn btn-primary" @click="crear">Crear</button>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    <div v-for="cuenta in accounts">
      <div role="alert" class="alert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="stroke-info h-6 w-6 shrink-0">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div class="flex flex-col">
          <span class="font-bold">{{ cuenta.name }}</span>
          <span>Address: {{ cuenta.acc.address }}</span>
          <span>Public Key: {{ cuenta.acc.publicKey }}</span>
          <span>{{ cuenta.issuer.did }}</span>
        </div>
      </div>
    </div>
    </div>
  </GeneralSimplePage>
</template>

<script lang="ts">
// const bip39 = require('bip39');
import {generateMnemonic} from 'bip39';

export default {
  data() {
    const accounts = getLocalStoreAccounts()
    console.log("accounts", accounts);
    return {
      acc: "",
      accounts: accounts,
    }
  },
  methods: {
    crear() {
      if (this.acc.trim()) {
        const key = generateMnemonic();
        this.accounts = setLocalStoreAccount(key, this.acc.trim())
        // console.log("accounts", this.accounts)
        this.acc = "";
        (this.$refs.my_modal_2 as any)?.close()
      }
    }
  },
}
</script>

<style scoped></style>
