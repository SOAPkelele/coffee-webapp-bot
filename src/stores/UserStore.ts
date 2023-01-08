import { User } from 'models/User'
import { proxy } from 'valtio'
import PersistableStore from 'stores/persistence/PersistableStore'

class UserStore extends PersistableStore {
  user: User | null = null
}

export default proxy(new UserStore()).makePersistent()
