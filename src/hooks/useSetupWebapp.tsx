import { route } from 'preact-router'
import { useEffect } from 'preact/hooks'
import CartStore from 'stores/CartStore'

export default function () {
  useEffect(() => {
    Telegram.WebApp.ready()
    Telegram.WebApp.expand()
    Telegram.WebApp.onEvent(
      'invoiceClosed',
      ({
        status,
      }: {
        url: string
        status: 'paid' | 'cancelled' | 'failed' | 'pending'
      }) => {
        switch (status) {
          case 'paid':
            Telegram.WebApp.close()
            CartStore.items = []
            break
          default:
            Telegram.WebApp.showAlert('Ты не оплатил, заказ отменен :(')
            CartStore.items = []
            route('/')
        }
      }
    )
  })
}
