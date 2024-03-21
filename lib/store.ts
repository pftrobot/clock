import { create } from 'zustand'

interface IPosition {
  x: number
  y: number
}

interface IClockStore {
  currentTime: number
  position: IPosition
  isHover: boolean
  isAnimating: boolean
  setCurrentTime: (time: number) => void
  setPosition: (position: IPosition) => void
  setIsHover: (isHover: boolean) => void
  setIsAnimating: (isAnimation: boolean) => void
}

export const useClockStore = create<IClockStore>((set) => ({
  currentTime: 0,
  position: { x: 0, y: 0 },
  isHover: false,
  isAnimating: false,
  setCurrentTime: (currentTime) => set({ currentTime }),
  setPosition: (position) => set({ position }),
  setIsHover: (isHover) => set({ isHover }),
  setIsAnimating: (isAnimating) => set({ isAnimating }),
}))
