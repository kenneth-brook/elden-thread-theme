import { gsap } from 'gsap'

export function floatCard(element) {
  gsap.to(element, {
    y: -8,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: 'sine.inOut'
  })
}
