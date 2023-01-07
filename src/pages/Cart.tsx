import { CartItem as ICartItem } from 'models/CartItem'
import { route } from 'preact-router'
import { useEffect } from 'preact/hooks'
import { useSnapshot } from 'valtio'
import CartStore from 'stores/CartStore'

function CartItem({
  item: {
    item: { id, name, price, picture },
    quantity,
  },
}: {
  item: ICartItem
}) {
  return (
    <div class="flex flex-row items-center justify-start">
      <div class="flex items-center w-12 h-10 text-3xl p-2">{picture}</div>
      <h2 class="font-semibold">
        {name} <span class="font-bold text-orange-500">{`${quantity}x`}</span>
      </h2>
      <div class="w-max ml-auto text-end">
        <h3 class="font-semibold">{price * quantity}₽</h3>
      </div>
    </div>
  )
}

export default function () {
  const { items } = useSnapshot(CartStore)

  const total = items.reduce((acc, item) => {
    acc += item.item.price * item.quantity
    return acc
  }, 0)

  useEffect(() => {
    // Telegram.WebApp.MainButton.onClick(() => {
    //   route('/cart')
    // })
    Telegram.WebApp.MainButton.setText(`Оплатить ${total}₽`)
    Telegram.WebApp.MainButton.color = '#32CD32'
    Telegram.WebApp.BackButton.show()
    Telegram.WebApp.BackButton.onClick(() => route('/'))

    return () => {
      Telegram.WebApp.BackButton.hide()
      Telegram.WebApp.MainButton.color =
        Telegram.WebApp.themeParams.button_color ?? '#3390ec'
    }
  }, [total])

  return (
    <>
      <div class="bg-white mb-4 px-3 py-2">
        <div class="flex flex-row items-baseline justify-between">
          <h1 class="font-bold text-xl">ЗАКАЗ</h1>
          <h3
            class="text-sm font-semibold text-lime-500 hover:cursor-pointer"
            onClick={() => route('/')}
          >
            Изменить
          </h3>
        </div>
        <div class="flex flex-col mt-2 gap-2">
          {items.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
      </div>

      <input
        type="text"
        name=""
        id=""
        placeholder="Комментарий, если нужно"
        class="w-full px-3 py-1"
      />
    </>
  )
}
