import { cleanEnv, str } from 'envalid'

export default cleanEnv(import.meta.env, {
  VITE_APP_BASE_URL: str(),
})
