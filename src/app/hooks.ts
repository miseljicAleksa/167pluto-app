import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "./store"
import { useEffect } from "react"

type GetDataFnType = () => Promise<any>

export const useAutoRefreshData = (
  getDataFn: GetDataFnType,
  refreshInterval: number,
  shouldStop: boolean,
) => {
  useEffect(() => {
    if (!shouldStop) {
      getDataFn()

      const intervalId = setInterval(getDataFn, refreshInterval)

      return () => {
        clearInterval(intervalId)
      }
    }
  }, [refreshInterval, shouldStop])
}

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
