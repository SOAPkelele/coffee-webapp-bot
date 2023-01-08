import { route } from 'preact-router'
import UserStore from 'stores/UserStore'
import loginTelegram from 'helpers/api'

export default function () {
  loginTelegram(Telegram.WebApp.initDataUnsafe)
    .then((user) => {
      UserStore.user = user
      route('/')
    })
    .catch(() => <div>error</div>)

  return null
}
