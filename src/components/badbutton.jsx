import { useState } from 'react';
import { createPortal } from 'react-dom';
import './badbutton.css'

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return createPortal(
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(203, 18, 181)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                 background: 'rgba(0, 0, 0)',
                 color: 'rgba(203, 18, 181)',
        padding: '20px',
        borderRadius: '8px'
      }}>
        {children}
      </div>
    </div>,
    document.body
  );
}

function BadButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState({ num1: 0, num2: 0, answer: 0 });
  const [userAnswer, setUserAnswer] = useState('');
  const [error, setError] = useState('');

  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    setQuestion({ num1, num2, answer: num1 + num2 });
    setUserAnswer('');
    setError('');
  };

  const handleOpen = () => {
    generateQuestion();
    setIsOpen(true);
  };

  const handleSubmit = () => {
    if (parseInt(userAnswer) === question.answer) {
      setIsOpen(false);
      setError('');
    } else {
      setError('Wrong answer! Try again.');
      setUserAnswer('');
    }
  };

  return (
    <div>
      <button className="redbutton" onClick={handleOpen}>
       Do Not Click
      </button>

      <Modal isOpen={isOpen}>
        <h2>Well Well, You had to click it</h2>
        <p>To continue, you will have to answer a question...</p>
        <div style={{ marginTop: '20px' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
            What is {question.num1} + {question.num2}?
          </p>
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            style={{ padding: '8px', marginRight: '10px' }}
          />
          <button onClick={handleSubmit}>Submit</button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </div>
      </Modal>
        </div>
    );
}

export default BadButton;