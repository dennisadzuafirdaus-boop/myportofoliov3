import { onMounted, onUnmounted } from 'vue'

/**
 * useScrollAnimation
 * Menambahkan class 'visible' ke elemen dengan class 'fade-up'
 * ketika elemen masuk ke viewport (scroll animation)
 */
export function useScrollAnimation() {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Stop observing setelah animasi jalan
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15, // Animasi mulai saat 15% elemen terlihat
      }
    )

    // Observe semua elemen dengan class fade-up
    document.querySelectorAll('.fade-up').forEach((el) => {
      observer.observe(el)
    })
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}