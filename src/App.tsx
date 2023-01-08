import { useEffect } from 'preact/hooks'
import AuthenticatedRoute from 'components/AuthenticatedRoute'
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
      <AuthenticatedRoute path="/" component={Menu} />
      <AuthenticatedRoute path="/cart" component={Cart} />
    </Router>
  )
}
