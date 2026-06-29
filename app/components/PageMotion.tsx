'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { animate } from 'motion'

const textSelector = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'li',
  'blockquote',
  'section > div > span',
  'article span',
  'a',
  'button',
].join(',')

const cardSelector = [
  'article',
  '.grid > div',
].join(',')

function isVisibleElement(element: HTMLElement) {
  return Boolean(
    element.getClientRects().length &&
      !element.closest('[aria-hidden="true"]')
  )
}

function textElementsIn(container: HTMLElement) {
  const elements = Array.from(container.querySelectorAll<HTMLElement>(textSelector))
    .filter((element) => element.textContent?.trim())
    .filter(isVisibleElement)

  return elements.filter((element, index) => elements.indexOf(element) === index)
}

function cardElementsIn(container: HTMLElement) {
  const elements = Array.from(container.querySelectorAll<HTMLElement>(cardSelector))
    .filter(isVisibleElement)

  return elements.filter((element, index) => elements.indexOf(element) === index)
}

function prepareElements(elements: HTMLElement[], type: 'text' | 'card') {
  elements.forEach((element) => {
    if (element.dataset.motionReady === 'true') {
      return
    }

    element.dataset.motionReady = 'true'
    element.style.opacity = '0'
    element.style.transform =
      type === 'card'
        ? 'translateY(36px) scale(0.975)'
        : 'translateY(24px)'
  })
}

function clearTransforms(elements: HTMLElement[]) {
  elements.forEach((element) => {
    element.style.transform = ''
  })
}

export default function PageMotion() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section, footer'))
      .filter(isVisibleElement)

    const cleanups: Array<() => void> = []

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          const section = entry.target as HTMLElement
          const textElements = textElementsIn(section)
          const cardElements = cardElementsIn(section)

          if (textElements.length) {
            const textAnimation = animate(
              textElements,
              { opacity: [0, 1], y: [24, 0] },
              {
                duration: 0.9,
                delay: (index) => Math.min(index * 0.04, 0.5),
                ease: [0.16, 1, 0.3, 1],
              }
            )

            textAnimation.finished.then(() => clearTransforms(textElements))
            cleanups.push(() => textAnimation.stop())
          }

          if (cardElements.length) {
            const cardAnimation = animate(
              cardElements,
              { opacity: [0, 1], y: [36, 0], scale: [0.975, 1] },
              {
                duration: 1.05,
                delay: (index) => Math.min(index * 0.06, 0.65),
                ease: [0.16, 1, 0.3, 1],
              }
            )

            cardAnimation.finished.then(() => clearTransforms(cardElements))
            cleanups.push(() => cardAnimation.stop())
          }
          observer.unobserve(section)
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
      }
    )

    const frame = window.requestAnimationFrame(() => {
      sections.forEach((section) => {
        prepareElements(textElementsIn(section), 'text')
        prepareElements(cardElementsIn(section), 'card')
        observer.observe(section)
      })
    })

    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [pathname])

  return null
}
