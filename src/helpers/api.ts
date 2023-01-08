import { User } from 'models/User'
import axios from 'axios'
import env from 'helpers/env'

const base = env.VITE_APP_BASE_URL

export default async function loginTelegram(telegram: object) {
  return (
    await axios({
      method: 'post',
      url: `${base}/login/webapp`,
      data: telegram,
    })
  ).data as User
}
