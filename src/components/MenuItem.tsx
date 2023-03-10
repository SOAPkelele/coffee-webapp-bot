import { MenuItem } from 'models/MenuItem'
import { useSnapshot } from 'valtio'
import CartStore, { getItemQuantityState } from 'stores/CartStore'

export default function Item({ item }: { item: MenuItem }) {
  const { quantity } = useSnapshot<{ quantity: number }>(
    getItemQuantityState(item.id)
  )

  console.log(`rerender item ${item.id} qnt ${quantity}`)

  return (
    <div class="relative flex flex-col items-center justify-evenly bg-white rounded-lg gap-1 p-2 shadow-md">
      {quantity > 0 && (
        <div class="absolute top-2 right-2 py-1 px-2 bg-orange-400 rounded-full text-xs font-bold text-white">
          <span>{quantity}</span>
        </div>
      )}
      <div class="h-20 flex flex-col my-auto items-center justify-center">
        <h2 class="text-6xl">{item.picture}</h2>
      </div>
      <div class="h-10 flex flex-col items-center justify-center">
        <h3 class="text-sm font-medium text-center">{`${item.name} ${item.price}₽`}</h3>
      </div>
      {quantity === 0 ? (
        <button
          class="px-2 py-1 bg-orange-500 rounded-lg font-bold text-white"
          onClick={() => CartStore.addItem(item)}
        >
          Заказать
        </button>
      ) : (
        <div class="grid grid-cols-2 gap-1 align-middle">
          <button
            class="font-bold text-2xl px-2 rounded-lg bg-red-600 text-white"
            onClick={() => CartStore.removeItem(item)}
          >
            -
          </button>
          <button
            class="font-bold text-2xl px-2 rounded-lg bg-orange-500 text-white"
            onClick={() => CartStore.addItem(item)}
          >
            +
          </button>
        </div>
      )}
    </div>
  )
}
