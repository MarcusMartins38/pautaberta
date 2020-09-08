import { useState, useEffect } from 'react'

export function usePositionY(): number {
  const [positionY, setPositionY] = useState(0)

  useEffect(() => {
    const onScroll = (e: any) => {
      setPositionY(window.pageYOffset)
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [positionY])

  return positionY
}

export function usePositionX(): number {
  const [positionX, setPositionX] = useState(0)

  useEffect(() => {
    const resize = (e: any) => {
      setPositionX(window.innerWidth)
    }
    window.addEventListener('resize', resize)

    return () => window.removeEventListener('resize', resize)
  }, [positionX])

  return positionX || window.innerWidth
}
