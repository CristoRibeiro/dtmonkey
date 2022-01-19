import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
 `;
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button{
    background-color: var(--blue-light);
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    color: var(--shape);
    padding: 0rem 2rem;
    height: 3rem;

    transition: 0.2s filter ;

    &:hover{
      filter: brightness(0.9)
    }

  }
 `;
