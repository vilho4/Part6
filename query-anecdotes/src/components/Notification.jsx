import { useContext } from "react"
import NotificationContext from "../NotificationContext"

const Notification = () => {
  const [notification, dispatch] = useContext(NotificationContext)

  if (!notification){
    return null
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
    backgroundColor: notification.type === 'success' ? '#d4edda' : '#f8d7da',
    color: notification.type === 'success' ? '#155724' : '#721c24',
    borderColor: notification.type === 'success' ? '#c3e6cb' : '#f5c6cb',
  }
  
  // if (true) return null

  return (
    <div style={style}>
      {notification.message}
    </div>
  )
}

export default Notification
