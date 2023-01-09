import { User } from 'models/User'
import axios from 'axios'
import env from 'helpers/env'

const base = env.VITE_APP_BASE_URL

export async function loginTelegram(telegram: object) {
  return (
    await axios({
      method: 'post',
      url: `${base}/login/webapp`,
      data: telegram,
    })
  ).data as User
}

export async function createPayment(
  user: User,
  items: { name: string; amount: number }[]
) {
  return (
    await axios(`${base}/payment/telegram/`, {
      method: 'post',
      headers: {
        token: user.token,
      },
      data: { items: items },
    })
  ).data as string
}
