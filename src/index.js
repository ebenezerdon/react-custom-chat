import React from 'react'
import { useEffect, useState } from 'react'
import sendIcon from './send-icon.svg'
import './index.css'

const ChatBox = ( { settings, messageList, onSendMessage } ) => {
  const { position, navColor, secondaryColor, primaryColor, navText, isOpen } = settings || {}
  const uniqueId = 'id' + Math.random().toString(36).substr(2, 5)
  const [chatBoxIsActive, setChatBoxIsActive] = useState(isOpen || false)

  const styles = {
    wrapper: `fade-in absolute rounded-lg h-4/6 w-96 shadow-2xl bottom-32 ${position === 'left' ? 'left' : 'right'}-5`,
    nav: `h-16 w-full bg-${navColor || 'blue'}-500 text-white pt-4 rounded-t-lg`,
    navText: `text-center text-2xl`,
    messages: `p-4 h-5/6 overflow-auto text-white`,
    personLeft: `fade-in bg-${secondaryColor || 'gray'}-600 p-2 w-max max-w-xs rounded-lg clear-both mb-2`,
    personRight: `fade-in bg-${primaryColor || 'red'}-600 p-2 w-max max-w-xs rounded-lg clear-both float-right mb-2`,
    formWrapper: `h-12 bg-gray-200`,
    form: `grid grid-cols-6`,
    inputField: `bg-gray-200 h-12 shadow-inner w-full p-4 col-span-5`,
    toggleButton: `absolute bottom-8 ${position === 'left' ? 'left' : 'right'}-5`,
    sendIcon: `transform scale-150 text-align mx-auto`,
    chatIcon: `h-16 w-16 text-${navColor || 'blue'}-800`
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    const chatInput = document.getElementById(uniqueId)
    onSendMessage?.(chatInput.value)
    event.target.reset()
  }

  useEffect(() => {
    // scroll to last message
    const messageSection = document.getElementById('msg' + uniqueId)
    messageSection?.scrollTo(0, messageSection.scrollHeight)
  }, [uniqueId])

  return (
    <>
      {chatBoxIsActive && <div className={styles.wrapper}>
        <section className={styles.nav}>
          <h1 className={styles.navText}>{navText || 'Jane Doe'}</h1>
        </section>
        <section id={'msg' + uniqueId} className={styles.messages}>
          {messageList?.map((message, index) => (
            <p
              key={index}
              className={message.person === 'secondary' ? styles.personLeft : styles.personRight }>
              {message.text}
            </p>
          ))}
        </section>
        <section className={styles.formWrapper}>
          <form className={styles.form} onSubmit={event => handleFormSubmit(event)}>
            <input id={uniqueId} type="text" placeholder="type here..." className={styles.inputField} />
            <button type="submit">
              <img src={sendIcon} className={styles.sendIcon} alt='send' />
            </button>
          </form>
        </section>
      </div>}
      <button
        className={styles.toggleButton}
        onClick={() => setChatBoxIsActive(!chatBoxIsActive)}
      >
        {!chatBoxIsActive && <svg xmlns="http://www.w3.org/2000/svg" className={styles.chatIcon} fill="none" viewBox="0 0 24 24"
                                  stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>}
        {chatBoxIsActive && <svg xmlns="http://www.w3.org/2000/svg" className={styles.chatIcon} fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>}
      </button>
    </>
  )
}

export default ChatBox;
