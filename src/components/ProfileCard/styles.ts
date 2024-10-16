import { NavLink } from "react-router-dom";
import { styled } from "../../styles";


export const ProfileContainer = styled('div', {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    padding: '1rem',
    gap: '1rem',
    borderRadius: '1rem',
});

export const Head = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
});

export const Detalhes = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
});

export const ImgText = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '1rem',
    flexFlow: 'wrap',
});

export const ImgProfile = styled('img', {
    width: '95px',
    height: '95px',
    objectFit: 'cover',
    border: 'solid 4px #F2B705',
    borderRadius: '50%',
});

export const TextProfile = styled('div', {
    h2: {
        fontSize: '1rem',
    },
    p: {
        margin: 0,
    },
});

export const IconeProfile = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    padding: '0.5rem',
    color: '#fff',
    backgroundColor: '#3aa52d',
    width: '40px',
    height: '40px',
});

export const Bottom = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
});

export const Text = styled('div', {
    p: {
        margin: 0,
    },
    h2: {
        margin: 0,
    },
});

export const BtnHistoric = styled(NavLink, {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '0.8rem',
    fontWeight: 500,
    color: '#fff',
    backgroundColor: '#002200',
    border: 'none',
    borderRadius: '2rem',
    padding: '0.5rem 1rem',
    textDecoration: 'none',
});
