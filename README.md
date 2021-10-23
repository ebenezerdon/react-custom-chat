# react-custom-chat

react-custom-chat is a free and fully customizable chat window that can be easily included in any project.

![Demo gif of react-custom-chat being used](https://user-images.githubusercontent.com/43746609/116437983-ea2d9e00-a845-11eb-8297-272ee0eb00d2.gif)

### [Link to Repository](https://github.com/ebenezerdon/react-custom-chat.git)
## [Demo](https://github.com/ebenezerdon/react-custom-chat)

## Table of Contents
- [Installation](#installation)
- [Example](#example)
- [Components](#components)

## Installation

```
$ npm install react-custom-chat
```

## Example

``` javascript
import ChatBox from 'react-custom-chat'
import { useState } from 'react'

const App = () => {
  const [messageList, setMessageList] = useState([])

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
```

## Components

# ChatBox

### ChatBox props:

| prop | type | required | description |
|------------------|--------|----------|-------------|
| settings     | [object](#settings-properties) | no | You can use this prop to define custom settings for your chat window. |
| messageList      | array | yes | an array of objects for your messages. See message object [here](#message-object) |
| isOpen           | boolean | yes | Forces the open/close state of the chat window. If this is not set, it will be closed by default, and open when the chat icon is clicked. |
| onSendMessage    | function | yes | The function's first parameter will be the message from the input field. see [example](#example) for usage.


### Settings properties:

| property | type | description |
|------------------|--------|-------------|
| position | string | This indicates the position of your chat window. Value can be `left` or `right`. Default is `right`. |
| navColor | string | You can use this to customize your NavColor |
| primaryColor | string | Use this to define the primary user color. You can choose from 'green', 'red', 'blue', etc... |
| secondaryColor | string | Use this to define the secondary user color. You can choose from 'green', 'red', 'blue', etc... |
| navText | string | This is the text that shows up on the chat window header. The Default is 'Jane Doe'|


### Message Object

Each message is styled differently depending on its type. Currently, only text is supported.
Each message object has a `person` property which can have the value 'primary' or 'secondary',
and a `text` property which contains the message text.

``` javascript
{
  text: 'hello world!',
  person: 'primary',
}
```

## Using react-custom-chat? Let's talk

If you're using react-custom-chat, I'd love to see what you're building! Send me a mail <ebenezerdon.official@gmail.com>
