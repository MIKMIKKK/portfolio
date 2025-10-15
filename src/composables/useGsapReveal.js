import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export function useGsapReveal(el){
  if(!el) return
  gsap.from(el.querySelectorAll('h1,h2,h3,p,li'), {
    opacity:0,
    y:46,
    stagger:0.11,
    duration:1.25,
    ease:'power3.out',
    scrollTrigger:{
      trigger: el,
      start: 'top 75%'
    }
  })
}

export function useGsapFadeStagger(elements){
  if(!elements || !elements.length) return
  const valid = elements
    .map(el => {
      // If it's a Vue component proxy with $el, use that
      if(el && el.$el) return el.$el
      return el
    })
    .filter(el => el instanceof Element)
  if(!valid.length) return
  valid.forEach((el)=>{
    gsap.from(el, {
      opacity:0,
      y:70,
      duration:1.25,
      ease:'power3.out',
      scrollTrigger:{
        trigger: el,
        start: 'top 70%'
      }
    })
  })
}
