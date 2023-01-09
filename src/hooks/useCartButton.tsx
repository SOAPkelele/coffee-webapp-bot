import { CartItem } from 'models/CartItem'
import { route } from 'preact-router'
import { useEffect } from 'preact/hooks'

export default function (items: CartItem[]) {
  function goToCartCallback() {
    route('/cart')
  }

  useEffect(() => {
    if (items.length > 0) {
      Telegram.WebApp.MainButton.setText(`Посмотреть заказ`)
      Telegram.WebApp.MainButton.onClick(goToCartCallback)
      Telegram.WebApp.MainButton.color =
        Telegram.WebApp.themeParams.button_color ?? '#3390ec'
      Telegram.WebApp.MainButton.show()
    } else {
      Telegram.WebApp.MainButton.hide()
    }

    return () => Telegram.WebApp.MainButton.offClick(goToCartCallback)
  }, [items])
}
