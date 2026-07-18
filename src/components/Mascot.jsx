import { useEffect, useRef, useState } from 'react'

// Small mascot that leans toward the cursor and follows it with its eyes.
// Pure SVG + one mousemove listener — no dependencies.
function Mascot() {
  const ref = useRef(null)
  const [direction, setDirection] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function onMove(event) {
      const box = ref.current.getBoundingClientRect()
      const dx = event.clientX - (box.left + box.width / 2)
      const dy = event.clientY - (box.top + box.height / 2)
      const dist = Math.hypot(dx, dy) || 1
      // Unit direction, scaled down when the cursor is very close
      const reach = Math.min(dist / 60, 1)
      setDirection({ x: (dx / dist) * reach, y: (dy / dist) * reach })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const lean = { x: direction.x * 7, y: direction.y * 5 }
  const pupil = { x: direction.x * 5.5, y: direction.y * 5.5 }

  return (
    <svg
      ref={ref}
      viewBox="0 0 240 240"
      className="mascot-bob h-56 w-56 lg:h-72 lg:w-72"
      aria-hidden="true"
    >
      {/* ground shadow */}
      <ellipse cx="120" cy="212" rx="52" ry="9" className="fill-coffee-200 dark:fill-coffee-900" />

      <g
        style={{ transform: `translate(${lean.x}px, ${lean.y}px)`, transition: 'transform 0.15s ease-out' }}
      >
        {/* sprout on top */}
        <path
          d="M 120 48 Q 116 32 128 24"
          strokeWidth="3"
          strokeLinecap="round"
          className="fill-none stroke-coffee-600 dark:stroke-coffee-400"
        />
        <circle cx="130" cy="22" r="5" className="fill-coffee-400" />

        {/* body */}
        <path
          d="M 120 46
             C 172 46 196 88 196 132
             C 196 178 162 206 120 206
             C 78 206 44 178 44 132
             C 44 88 68 46 120 46 Z"
          strokeWidth="2.5"
          className="fill-coffee-200 stroke-coffee-600 dark:fill-coffee-800 dark:stroke-coffee-400"
        />

        {/* eyes (blink via CSS) */}
        <g className="mascot-eyes">
          <circle cx="94" cy="118" r="17" className="fill-paper stroke-coffee-600 dark:fill-night dark:stroke-coffee-400" strokeWidth="2" />
          <circle cx="146" cy="118" r="17" className="fill-paper stroke-coffee-600 dark:fill-night dark:stroke-coffee-400" strokeWidth="2" />
          <circle cx={94 + pupil.x} cy={118 + pupil.y} r="7" className="fill-stone-900 dark:fill-stone-100" />
          <circle cx={146 + pupil.x} cy={118 + pupil.y} r="7" className="fill-stone-900 dark:fill-stone-100" />
          <circle cx={91 + pupil.x} cy={115 + pupil.y} r="2.2" className="fill-paper dark:fill-night" />
          <circle cx={143 + pupil.x} cy={115 + pupil.y} r="2.2" className="fill-paper dark:fill-night" />
        </g>

        {/* blush */}
        <circle cx="74" cy="146" r="8" className="fill-coffee-400/40" />
        <circle cx="166" cy="146" r="8" className="fill-coffee-400/40" />

        {/* smile */}
        <path
          d="M 106 154 Q 120 166 134 154"
          strokeWidth="3"
          strokeLinecap="round"
          className="fill-none stroke-coffee-700 dark:stroke-coffee-300"
        />
      </g>
    </svg>
  )
}

export default Mascot
