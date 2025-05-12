import Alpine from 'alpinejs'
import { floatCard } from './animations.js'

window.Alpine = Alpine
Alpine.start()

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-float-card]').forEach(floatCard)
})
