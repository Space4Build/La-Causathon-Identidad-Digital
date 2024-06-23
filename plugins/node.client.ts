import { Buffer } from 'node:buffer'
import process from 'node:process'

globalThis.Buffer = Buffer

export default defineNuxtPlugin((nuxtApp) => {})
