import React, { useState, useEffect } from 'react'

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hover, setHover] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Only enable custom cursor on devices with mouse pointer
    if (window.matchMedia('(pointer: fine)').matches) {
      setEnabled(true)
    }

    const moveCursor = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.project-card') ||
        target.closest('.capability-card') ||
        target.closest('.channel-card') ||
        target.closest('.skill-pill') ||
        target.closest('.theme-toggle')
      ) {
        setHover(true)
      } else {
        setHover(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`
        }}
      />
      <div
        className={`cursor-ring ${hover ? 'hover' : ''}`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`
        }}
      />
    </>
  )
}
