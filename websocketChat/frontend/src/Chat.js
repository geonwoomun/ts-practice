import React, { useEffect, useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

const URL = "ws://localhost:3030";

const Chat = () => {
    const [name, setName] = useState('bob');
    const [messages, setMessages] = useState([]);
    const [ws, setWs] = useState(new WebSocket(URL))

    const addMessage = message => {
        setMessages(prev => [message, ...prev])
    }

    const submitMessage = messageString => {
        const message = {name, message : messageString};
        ws.send(JSON.stringify(message));
        addMessage(message);
    }

    useEffect(()=> {
        ws.onopen = () => {
            console.log('connected');
        }
        ws.onmessage = evt => {
            const message = JSON.parse(evt.data);
            addMessage(message);
        }
        ws.onclose = () => {
            console.log('disconnected');
            setWs(new WebSocket(URL));
        }
    });
    return (
      <div>
        <label htmlFor='name'>
          Name: &nbsp;
          <input
            type='text'
            id={'name'}
            placeholder={'Enter your name...'}
            value={name}
            onChange={e => setName(e.target.value)}
          ></input>
        </label>
        <ChatInput
            ws={ws}
            onSubmitMessage={messageString => submitMessage(messageString)}/>
            {messages.map((message, index) => <ChatMessage key={index} message={message.message} name={message.name}/>)}

      </div>
    );
};

export default Chat;