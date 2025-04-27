import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector(state => state.notification)
  if (notification==='NOT_SET' || notification===''){
    return
  }
  const style = {
    border: '1px solid #4CAF50',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '15px',
    backgroundColor: '#d4edda',
    color: '#155724',
    maxWidth: '50vw',
    wordWrap: 'break-word',
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification