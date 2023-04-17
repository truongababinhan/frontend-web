import Card from "./components/card"
import Avatar from "./components/avatar"


const listItems = {
  phone: {
    icon: 'phone',
    content: '0703400444'
  },
  fb: {
    icon: 'fb',
    content: 'Trương Bá Bình An'
  }
}

export default function User() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Avatar />
      {Object.keys(listItems).map((key) => {
        return (
          <Card key={key} item={listItems[key]}/>
        )
      })}
    </div>
  )
}