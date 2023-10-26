import styled, {  } from '@emotion/styled';

export const Container = styled.div({
  width: '100%',
  height: '100vh',
  backgroundColor: "lightcyan",

  'div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 10px',
    backgroundColor: 'lightblue',

    'span': {
      padding: 10,
      backgroundColor: '#50e8cf',
      borderRadius: 500,
    }
  }
});