import AuthenticatedRoute from 'components/AuthenticatedRoute'
import Cart from 'pages/Cart'
import Login from 'pages/Login'
import Menu from 'pages/Menu'
import Router, { Route } from 'preact-router'
import useSetupWebapp from 'hooks/useSetupWebapp'

export default function () {
  useSetupWebapp()

  return (
    <Router>
      <Route path="/login/webapp" component={Login} />
      <AuthenticatedRoute path="/" component={Menu} />
      <AuthenticatedRoute path="/cart" component={Cart} />
    </Router>
  )
}
