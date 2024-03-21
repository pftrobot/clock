import { useEffect, useState } from 'react'

export const useMounted = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}

export const getHourFromSeconds = (time) => Math.floor(time / 60 / 60)
export const getMinuteFromSeconds = (time) =>
  Math.floor(time / 60 - Math.floor(time / 60 / 60) * 60)
export const getSecondFromSeconds = (time) => time - Math.floor(time / 60) * 60
