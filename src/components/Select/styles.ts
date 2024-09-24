import { styled } from '../../styles';

export const Container = styled('div', {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    fontWeight: '500',
    gap: '6px',
    width: '100%',
});

export const TextDesc = styled('span', {
    fontSize: '14px',
    color: '$grayfont',
});

export const DropdownSelected = styled('div', {
    padding: '5px 5px',
    borderRadius: '10px',
    border: '2px solid $grayfont',
    fontSize: '14px',
    color: '$grayfont',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    '&:hover': {
        borderColor: '$maingreen',
    },
});

export const DropdownContainer = styled('div', {
    position: 'absolute',
    top: '100%',
    left: '0',
    right: '0',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 10,
});

export const DropdownOption = styled('div', {
    padding: '5px 5px',
    fontSize: '14px',
    color: '$grayfont',
    cursor: 'pointer',
    borderRadius: '10px',
    backgroundColor: 'white',
    '&:hover': {
        backgroundColor: '$maingreen',
        color: 'white',
    },
    variants: {
        selected: {
            true: {
                backgroundColor: '$maingreen',
                color: 'white',
            },
        },
    },
});
