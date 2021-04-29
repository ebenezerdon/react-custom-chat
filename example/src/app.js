import React from 'react'
import { render } from 'react-dom'
import ChatBox from '../../src'

const App = () => {
  const [messageList, setMessageList] = React.useState([])

  const handleSendMessage = newMessage => {
    setMessageList([
      ...messageList,
      {text: newMessage, person: 'primary'}
    ])
  }

  return (
    <div>
      <ChatBox
        settings={{
          position: 'right',
          navColor: 'green',
          navText: 'Jane Doe',
        }}
        messageList={messageList}
        onSendMessage={handleSendMessage}
      />
    </div>
  )
}

render(<App />, document.getElementById('root'))
