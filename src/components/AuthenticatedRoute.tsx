import { Route, route } from 'preact-router'
import { useEffect } from 'preact/hooks'
import { useSnapshot } from 'valtio'
import UserStore from 'stores/UserStore'

export default function (props: any) {
  const { user } = useSnapshot(UserStore)

  useEffect(() => {
    if (!user) {
      route('/login/webapp', true)
    }
  }, [user])

  if (!user) return null

  return <Route {...props} />
}
