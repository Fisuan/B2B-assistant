
import styled from 'styled-components';

const MyButton = () => {
  return (
    <StyledWrapper>
      <button className="button">Начать сейчас</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    padding: 1em 2em;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
    cursor: pointer;
    color:rgb(255, 255, 255);
    transition: all 1000ms;
    font-size: 15px;
    position: relative;
    overflow: hidden;
    outline: 2px solid rgb(43, 79, 170);
  }

  button:hover {
    color: #ffffff;
    transform: scale(1.1);
    outline: 2px solid rgb(11, 59, 122);
    box-shadow: 4px 5px 17px -4px rgb(12, 55, 104);
  }

  button::before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color:rgb(27, 109, 211);
    transform: skewX(45deg);
    z-index: -1;
    transition: width 1000ms;
  }

  button:hover::before {
    width: 250%;
  }`;

export default MyButton;
