<template>
  <div
    class="card-swap-container"
    :style="{ width: width + 'px', height: height + 'px' }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div
      v-for="(slotName, index) in slotNames"
      :key="slotName"
      class="swap-card"
      :ref="el => setCardRef(el, index)"
    >
      <slot :name="slotName" />
    </div>
  </div>
</template>

<script setup>
import { ref, useSlots, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  width:            { type: Number,  default: 300 },
  height:           { type: Number,  default: 200 },
  cardDistance:     { type: Number,  default: 60 },
  verticalDistance: { type: Number,  default: 70 },
  delay:            { type: Number,  default: 5000 },
  pauseOnHover:     { type: Boolean, default: false },
})

// ── Event ke parent: kartu mana yang sekarang paling depan ──
const emit = defineEmits(['change'])

const slots = useSlots()
const slotNames = Object.keys(slots)
  .filter((name) => name.startsWith('card-'))
  .sort((a, b) => {
    const numA = parseInt(a.replace('card-', ''))
    const numB = parseInt(b.replace('card-', ''))
    return numA - numB
  })

const cardEls = ref([])
let order  = []
let timer  = null
let paused = false

function setCardRef(el, index) {
  if (el) cardEls.value[index] = el
}

function layoutCards(animate = false) {
  order.forEach((cardIndex, stackPos) => {
    const el = cardEls.value[cardIndex]
    if (!el) return

    const target = {
      x:        stackPos * props.cardDistance,
      y:        stackPos * props.verticalDistance,
      rotation: stackPos === 0 ? 0 : stackPos * 2,
      scale:    1 - stackPos * 0.05,
      zIndex:   slotNames.length - stackPos,
      opacity:  1,
    }

    if (animate) {
      gsap.to(el, { ...target, duration: 0.6, ease: 'power3.out' })
    } else {
      gsap.set(el, target)
    }
  })
}

function swapCards() {
  if (paused) return

  const frontIndex = order[0]
  const frontEl     = cardEls.value[frontIndex]
  if (!frontEl) return

  gsap.timeline({
    onComplete: () => {
      order.push(order.shift())
      layoutCards(true)
      // ── Beri tahu parent: kartu depan yang baru ──
      emit('change', order[0])
    },
  })
    .to(frontEl, {
      x:        props.width * 0.45,
      y:        props.height * 0.4,
      rotation: 14,
      opacity:  0,
      duration: 0.45,
      ease:     'power2.in',
    })
    .set(frontEl, {
      x:        (slotNames.length - 1) * props.cardDistance,
      y:        (slotNames.length - 1) * props.verticalDistance,
      rotation: (slotNames.length - 1) * 2,
      zIndex:   1,
    })
}

function onMouseEnter() {
  if (props.pauseOnHover) paused = true
}

function onMouseLeave() {
  if (props.pauseOnHover) paused = false
}

onMounted(() => {
  order = slotNames.map((_, i) => i)
  layoutCards(false)
  emit('change', order[0])   // ── Kirim kartu pertama saat mount ──
  timer = setInterval(swapCards, props.delay)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.card-swap-container {
  position: relative;
}

.swap-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid #FFFFFF;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  transform-origin: bottom left;
}

.swap-card :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>