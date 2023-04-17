import { FcPhone } from "react-icons/fc"
import { AiFillFacebook } from "react-icons/ai"

export default function Card({ item }) {

  const renderIcon = (icon) => {
    switch(icon) {
      case 'phone':
        return <FcPhone />
        break;
      case 'fb':
        return <AiFillFacebook />
        break;
      default:
        return null
    }
  }

  return (
    <div className='flex justify-center items-center'>
      {renderIcon(item.icon)}
      <span>
        {item.content}
      </span>
    </div>
  )
}