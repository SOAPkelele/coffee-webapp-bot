import { CartItem } from 'models/CartItem'
import { MenuItem } from 'models/MenuItem'
import { derive } from 'valtio/utils'
import { proxy } from 'valtio'
import PersistableStore from 'stores/persistence/PersistableStore'

class CartStore extends PersistableStore {
  items: CartItem[] = []

  addItem(newItem: MenuItem) {
    const foundItem = this.items.find(
      ({ item: cartItem }) => cartItem.id === newItem.id
    )

    if (foundItem) {
      this.items = [
        ...this.items.filter(
          ({ item: cartItem }) => cartItem.id !== newItem.id
        ),
        {
          item: foundItem.item,
          quantity: foundItem.quantity + 1,
        },
      ]
    } else {
      this.items = [...this.items, { item: newItem, quantity: 1 }]
    }
  }

  removeItem(itemToBeRemoved: MenuItem) {
    const foundItem = this.items.find(
      ({ item: cartItem }) => cartItem.id === itemToBeRemoved.id
    )

    if (!foundItem) {
      return
    }

    const itemsWithoutFoundItem = this.items.filter(
      ({ item: cartItem }) => cartItem.id !== itemToBeRemoved.id
    )

    if (foundItem.quantity > 1) {
      this.items = [
        ...itemsWithoutFoundItem,
        {
          item: foundItem.item,
          quantity: foundItem.quantity - 1,
        },
      ]
    } else {
      this.items = itemsWithoutFoundItem
    }
  }
}

const cartProxy = proxy(new CartStore()).makePersistent()

export default cartProxy

const derivedState: Record<string, { quantity: number }> = {}

export const getItemQuantityState = (itemId: string) => {
  // If I haven't yet derived a state for the beer
  if (!derivedState[itemId]) {
    // I derive it
    const derivedBeerState = derive({
      quantity: (get) =>
        get(cartProxy).items.find(
          (b: { item: MenuItem; quantity: number }) => b.item.id === itemId
        )?.quantity || 0,
    })
    // Store it
    derivedState[itemId] = derivedBeerState
  }
  // And return the derived state of the beer
  return derivedState[itemId]
}

export const totalPrice = derive({
  total: (get) =>
    // I access the state with the get function provided by Valtio
    get(cartProxy).items.reduce((acc, item) => {
      acc += item.item.price * item.quantity
      return acc
    }, 0),
})
