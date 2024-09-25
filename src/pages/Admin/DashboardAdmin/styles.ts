import { Link } from "react-router-dom";
import { styled } from "../../../styles";


export const Background = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    margin: '60px',
    justifyContent: 'center',
})

export const DivContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    width: '100%',
    height: '100%',
})

export const Div = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    height: '100%',
})

export const Column01 = styled(Link, {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '$white',
    padding: '8%',
    width: '100%',
    height: '375px',
    borderRadius: '20px',
    textDecoration: 'none',
    color: 'inherit',
})

export const Column02 = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItens: 'center',
    justifyItems: 'center',
    justifyContent: 'space-between',
    padding: '6%',
    backgroundColor: '$white',
    width: '100%',
    height: '175px',
    borderRadius: '20px',
})

export const Row01 = styled(Link, {
    display: 'flex',
    flexDirection: 'column',
    alignItens: 'center',
    justifyItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 20px',
    width: '30%',
    height: '150px',
    backgroundColor: '$white',
    borderRadius: '20px',
    textDecoration: 'none',
})

export const Row02 = styled(Link, {
    display: 'flex',
    flexDirection: 'row',
    alignItens: 'center',
    justifyItems: 'center',
    justifyContent: 'space-between',
    padding: '2.6%',
    backgroundColor: '$white',
    width: '70%',
    height: '150px',
    borderRadius: '20px',
    textDecoration: 'none',
})

export const R = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '12px',
    width: '100%',
    height: '100%',
    fontSize: '15px'
})

export const Space = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    height: '100%',
})

export const Text = styled('span', {

})

export const Infos = styled('span', {
    fontWeight: '600',
    color: '$green',
})


export const DivRow = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
})

export const DivRow02 = styled(Link, {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    textDecoration: 'none',
})

export const Linha = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    width: '100%',
})

export const Map = styled('div', {
    width: '70%',
    height: '400px',
    borderRadius: '20px',
    backgroundColor: 'white',
})

export const Img = styled('img', {
    width: '100%',
    height: '100%',
    padding: '10px',
    borderRadius: '20px',
})

export const ContainerEntregas = styled('div', {
    width: '30%',
    height: '400px',
    backgroundColor: '$white',
    borderRadius: '20px',
    padding: '20px'
})