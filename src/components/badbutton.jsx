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
            backgroundColor: '#FF17E4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                 background: '#000000',
                 color: '#06E8C4',
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
  const [question, setQuestion] = useState({ num1: 0, num2: 0, num3: 0, answer: 0 });
  const [userAnswer, setUserAnswer] = useState('');
  const [error, setError] = useState('');

  const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const num3 = Math.floor(Math.random() * 20) + 1;
    setQuestion({ num1, num2, num3, answer: num1 + num2 - num3 });
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
       Do Not Click Here
      </button>

      <Modal isOpen={isOpen}>
      <div className="badbuttonopen">
        <h2>Why did you click the button that said "DO NOT CLICK Here"?</h2>
        <p>You just can't leave this portal. You have to pass a test to go back. So, to contijue, you will have to answer a math question...</p>
        <div style={{ marginTop: '20px' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>
            What is {question.num1} + {question.num2} - {question.num3}?
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
        </div>
      </Modal>
        </div>
    );
}

export default BadButton;