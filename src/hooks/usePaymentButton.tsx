import { CartItem } from 'models/CartItem'
import { createPayment } from 'helpers/api'
import { useEffect } from 'preact/hooks'
import CartStore from 'stores/CartStore'
import UserStore from 'stores/UserStore'

const itemModiy = ({ item: { name, price }, quantity }: CartItem) => ({
  name: `${name} ${quantity}x`,
  amount: price * quantity * 100,
})

export default function usePaymentButton(total: number) {
  function payCallback() {
    if (!UserStore.user) {
      return Telegram.WebApp.showAlert('Произошла ошибка')
    }
    void createPayment(UserStore.user, CartStore.items.map(itemModiy)).then(
      (link) => Telegram.WebApp.openInvoice(link)
    )
  }

  useEffect(() => {
    Telegram.WebApp.MainButton.setText(`Оплатить ${total}₽`)
    Telegram.WebApp.MainButton.onClick(payCallback)
    Telegram.WebApp.MainButton.color = '#32CD32'
    Telegram.WebApp.MainButton.show()

    return () => Telegram.WebApp.MainButton.offClick(payCallback)
  }, [total])
}
