import { useEffect } from 'preact/hooks'
import Cart from 'pages/Cart'
import Menu from 'pages/Menu'
import Router, { Route } from 'preact-router'
import WebApp from 'pages/WebApp'

export default function () {
  useEffect(() => {
    Telegram.WebApp.ready()
    Telegram.WebApp.expand()
  })

  return (
    <Router>
      <Route path="/login/webapp" component={WebApp} />
      <Route path="/" component={Menu} />
      <Route path="/cart" component={Cart} />
    </Router>
  )
}
