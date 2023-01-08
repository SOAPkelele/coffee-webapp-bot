import { Route, route } from 'preact-router'
import { useEffect } from 'preact/hooks'
import { useSnapshot } from 'valtio'
import UserStore from 'stores/UserStore'

export default function (props: any) {
  const { user } = useSnapshot(UserStore)

  // only redirect once we've cleared the screen:
  useEffect(() => {
    if (!user) {
      route('/login', true) // TODO CHECK
    }
  }, [user])

  // not logged in, render nothing:
  if (!user) return null

  return <Route {...props} />
}
