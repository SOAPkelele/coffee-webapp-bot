import { route } from 'preact-router'
import { useSnapshot } from 'valtio'
import CartItem from 'components/CartItem'
import CartStore from 'stores/CartStore'
import useBackButton from 'hooks/useBackButton'
import usePaymentButton from 'hooks/usePaymentButton'

export default function () {
  const { items } = useSnapshot(CartStore)

  const total = items.reduce((acc, item) => {
    acc += item.item.price * item.quantity
    return acc
  }, 0)

  const routeToMenu = () => route('/')

  usePaymentButton(total)
  useBackButton(routeToMenu)

  return (
    <>
      <div class="bg-white mb-4 px-3 py-2">
        <div class="flex flex-row items-baseline justify-between">
          <h1 class="font-bold text-xl">ЗАКАЗ</h1>
          <h3
            class="text-sm font-semibold text-lime-500 hover:cursor-pointer"
            onClick={routeToMenu}
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
