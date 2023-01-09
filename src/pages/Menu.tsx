import { CartItem } from 'models/CartItem'
import { MenuItem } from 'models/MenuItem'
import { useSnapshot } from 'valtio'
import CartStore from 'stores/CartStore'
import Item from 'components/MenuItem'
import Root from 'components/Root'
import items from 'items.json'
import useCartButton from 'hooks/useCartButton'

function MainButton() {
  const { items } = useSnapshot(CartStore)
  useCartButton(items as CartItem[])
  return null
}

export default function () {
  return (
    <Root>
      <div class="grid grid-cols-3 gap-2">
        {items.map((item: MenuItem) => (
          <Item item={item} />
        ))}
      </div>
      <MainButton />
    </Root>
  )
}
