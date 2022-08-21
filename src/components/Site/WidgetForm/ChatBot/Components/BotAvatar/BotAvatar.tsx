import botAvatar from '/assets/chatbot/bot.png'
import { ContainerAvatar } from './styles'
function BotAvatar() {
  return (
    <ContainerAvatar>
      <img src={botAvatar} alt="Avatar" />
    </ContainerAvatar>
  )
}
export default BotAvatar
