import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: [
        'index.html',
        'a-propos.html',
        'activites.html',
        'detail-activite.html',
        'detaille_arte/kayak.html',
        'detaille_arte/quad.html',
        'detaille_arte/bateau.html',
        'detaille_arte/oiseaux.html',
        'detaille_arte/paddle.html',
        'detaille_arte/equitation.html',
        'detaille_arte/randonnee.html',
        'detaille_arte/plage.html',
        'contact.html',
        'faq.html',
      ],
    },
  },
})