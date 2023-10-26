import styled, {  } from '@emotion/styled';
import {Button, Card} from "@mui/material";

export const Container = styled.div({
  display: 'flex',
  flexDirection: "column",
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  backgroundColor: '#f2eeff'
});

export const CardWrapper = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center',
  gap: 20,
  padding: '30px 40px',
  width: 450,
  height: 'auto',
  backgroundColor: 'white'
});

export const Header = styled.header({
  display: 'flex',
  flexDirection: 'column',
  alignItems: "center",
  gap: 10,
  marginBottom: 20,
  color: '#212121cf'
})

export const CustomButton = styled(Button)({
  width: 'fit-content',
  padding: '0 30px',
  left: '50%',
  transform: 'translateX(-50%)',
  marginTop: 10,
  height: 45,
  backgroundColor: '#8b00e1',
  '& p': {
    textTransform: 'initial'
  },
  ':hover': {
    backgroundColor: '#a739eb'
  }
})