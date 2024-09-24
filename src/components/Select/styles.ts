import { styled } from '../../styles';

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '6px',
});

export const TextDesc = styled('span', {
    fontSize: '14px',
    fontWeight: '500',
    color: '$grayfont',
});

export const SelectInput = styled('select', {
    width: '100%',
    padding: '5px 8px',
    borderRadius: '10px',
    height: '35px',
    border: '2px solid $grayfont',
    fontSize: '14px',
    color: '$grayfont',
    backgroundColor: 'transparent',
    '&:focus': {
        outline: 'none',
        borderColor: '$maingreen',
    },
    '& option': {
        backgroundColor: 'white',
        color: '$grayfont',
    },
});
