import { CartItem as ICartItem } from 'models/CartItem'

export default function CartItem({
  item: {
    item: { name, price, picture },
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
