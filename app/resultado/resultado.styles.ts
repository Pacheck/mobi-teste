import styled, {  } from '@emotion/styled';

export const Container = styled.div({
  width: '100%',
  height: '100vh',
  backgroundColor: "lightcyan",

  'div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
    padding: '40px 10px',

    'h1': {
      color: '#353232'
    },

    'span': {
      padding: '10px 20px',
      backgroundColor: '#1a937f',
      borderRadius: 500,
      fontSize: 23,
      fontWeight: 700,
      color: '#fff'
    },

    'h5': {
      color: '#5d5b5b9c',
      fontWeight: 400,
      fontSize: 14
    }
  }
});