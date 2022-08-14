import avatarChatBot from '../../../../../../../public/assets/chatbot/avatar.png'
import { ContainerUser } from './styles'
function UserAvatar() {
  return (
    <ContainerUser>
      <img src={avatarChatBot} className="user-avatar" alt="avatar" />
    </ContainerUser>
  )
}
export default UserAvatar
