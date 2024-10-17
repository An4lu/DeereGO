import { styled } from "../../styles";

export const GridMapa = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto',
});


export const GridSetor = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Duas colunas iguais
    gridTemplateRows: '1fr 1fr',    // Duas linhas iguais
    gap: '0',                       // Remover qualquer espaçamento entre os blocos
    padding: '0',                   // Remover padding no grid
    margin: '0',                    // Remover margin no grid
    width: '100%',                  // Fazer o grid ocupar 100% do espaço disponível
    height: '100%',                 // Fazer o grid ocupar 100% da altura disponível
  
    // Força os elementos dentro da grid a ocuparem todo o espaço
    '> *': {
      width: '100%',
      height: '100%',
      margin: '0',
      padding: '0',
    }
  });