import MainBlock from 'components/MainBlock'
import Root from 'components/Root'

export default function () {
  return (
    <Root>
      <MainBlock />
      <div class="bg-telegram-bg overflow-auto">
        {JSON.stringify(Telegram.WebApp)}
      </div>
    </Root>
  )
}
