import { useEffect } from 'preact/hooks'
import Cart from 'pages/Cart'
import Menu from 'pages/Menu'
import Root from 'components/Root'
import Router, { Route } from 'preact-router'

export default function () {
  useEffect(() => {
    Telegram.WebApp.ready()
    Telegram.WebApp.expand()
  })

  return (
    <Router>
      <Route path="/" component={Menu} />
      <Route path="/cart" component={Cart} />
    </Router>
  )
}
