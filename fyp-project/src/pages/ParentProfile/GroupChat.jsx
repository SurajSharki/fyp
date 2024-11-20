import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const GroupChat = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [userData, setUserData] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Initialize socket connection
    const newSocket = io('http://localhost:8000', {
      withCredentials: true
    });
    setSocket(newSocket);

    // Get user data
    fetch('http://localhost:8000/verifyAll', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'ok') {
          setUserData({
            id: data.id,
            usertype: data.usertype
          });
        }
      });

    // Fetch existing messages
    fetch('http://localhost:8000/messages')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setMessages(data.data);
        }
      });

    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('message', (message) => {
        setMessages(prevMessages => [...prevMessages, message]);
      });
    }
  }, [socket]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageInput.trim() && socket && userData) {
      socket.emit('sendMessage', {
        userId: userData.id,
        senderName: userData.usertype === 'student' ? 'Student' : 'Academy',
        userType: userData.usertype,
        message: messageInput.trim()
      });
      setMessageInput('');
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Global Chat Room</h5>
            </div>
            
            <div className="card-body" style={{ height: '400px', overflowY: 'auto' }}>
              {messages.map((msg, index) => (
                <div
                  key={msg._id || index}
                  className={`d-flex ${msg.sender === userData?.id ? 'justify-content-end' : 'justify-content-start'} mb-3`}
                >
                  <div
                    className={`${
                      msg.sender === userData?.id ? 'bg-primary text-white' : 'bg-light'
                    } rounded p-3 max-width-75`}
                    style={{ maxWidth: '75%' }}
                  >
                    <div className="small mb-1">
                      {msg.senderName} ({msg.userType})
                    </div>
                    <div>{msg.message}</div>
                    <div className="small mt-1 opacity-75">
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="card-footer">
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type your message..."
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!messageInput.trim()}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupChat;