
import styled from 'styled-components';

const MyClose = () => {
  return (
    <StyledWrapper>
      <button className="noselect">
        <span className="text">Close</span>
        <span className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    width: 150px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e62222;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
    position: relative;
    overflow: hidden;
  }

  button, button span {
    transition: all 0.3s ease-in-out;
  }

  button .text {
    color: white;
    font-weight: bold;
    flex-grow: 1;
    text-align: center;
    transition: opacity 0.3s ease-in-out;
  }

  button .icon {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #c41b1b;
  }

  button svg {
    width: 20px;
    fill: #eee;
  }

  button:hover {
    background: #ff3636;
  }

  button:hover .text {
    opacity: 0;
  }

  button:hover .icon {
    width: 100%;
    border-left: none;
  }

  button:focus {
    outline: none;
  }

  button:active .icon svg {
    transform: scale(0.8);
  }

    button .text {
    white-space: nowrap;
  }
`;

export default MyClose;