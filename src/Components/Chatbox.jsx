import React from 'react';
import Message from './Message';

const Chatbox = () => {

  const messages =[
    {
      id:1,
      text:"Hello there",
      name: 'Ada'
    },
    {
      id:2,
      text:"Hi",
      name: 'Eze'
    }
  ]
  return (
    <div className='pb-44 pt-20 containerWrap '>
          {messages.map(message => (
            <Message  key={message.id}     message ={message}/>
          ))}
    </div>
  )
}

export default Chatbox