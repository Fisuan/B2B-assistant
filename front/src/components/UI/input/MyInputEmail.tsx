
import styled from 'styled-components';

const MyInputEmail = () => {
  return (
    <StyledWrapper>
      <div className="group">
      <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className='icon'>
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z" strokeLinejoin="round" strokeLinecap="round"></path>
      </svg>
        <input className="input" type="mail" placeholder="Mail" />
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
    width: 350px;
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
  }
  
  .dark .input{
    @apply bg-gray-800 text-black;
  }

  .dark .group{
    @apply bg-gray-800 text-black  
  }
`;

export default MyInputEmail;
