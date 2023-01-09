import { useEffect } from 'preact/hooks'

export default function useBackButton(callback: (args: any) => void) {
  useEffect(() => {
    Telegram.WebApp.BackButton.show()
    Telegram.WebApp.BackButton.onClick(callback)
    return () => {
      Telegram.WebApp.BackButton.offClick(callback)
      Telegram.WebApp.BackButton.hide()
    }
  }, [callback])
}
