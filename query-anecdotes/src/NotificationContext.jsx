import { createContext, useReducer, useEffect } from "react"

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.payload
    case "CLEAR":
      return ''
    default: 
      return state
  }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(notificationReducer,'')

  console.log(notification)

  useEffect(() => {
    if (notification) {
      const timeout = setTimeout(() => {
        notificationDispatch({ type: 'CLEAR' })
      }, 5000)

      return () => clearTimeout(timeout)
    }
  }, [notification])

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext