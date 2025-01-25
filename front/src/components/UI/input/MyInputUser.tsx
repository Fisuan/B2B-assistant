import React from 'react';
import styled from 'styled-components';

const MyInputUser = () => {
  return (
    <StyledWrapper>
      <div className="group">
      <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className='icon'>
      <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" strokeLinejoin="round" strokeLinecap="round"></path>
      </svg>
        <input className="input" type="text" placeholder="Username" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .group {
    display: flex;
    line-height: 40px;
    align-items: center;
    position: relative;
    max-width: 100%;
  }

  .input {
    width: 450px;
    height: 55px;
    line-height: 40px;
    padding: 0 5rem;
    padding-left: 3rem;
    border: 2px solid transparent;
    border-radius: 10px;
    outline: none;
    background-color: #f8fafc;
    color: #0d0c22;
    transition: .5s ease;
  }

  .input::placeholder {
    color: #94a3b8;
  }

  .input:focus, input:hover {
    outline: none;
    border-color: rgba(129, 140, 248);
    background-color: #fff;
    box-shadow: 0 0 0 5px rgb(129 140 248 / 30%);
  }

  .icon {
    position: absolute;
    left: 1rem;
    fill: none;
    width: 1rem;
    height: 1rem;
  }`;

export default MyInputUser;

