import styled from 'styled-components';

const StyledButton = styled.div`
    border-radius: ${props => props.theme.borderRadius};
    color: white;
    width: fit-content;
    padding: 8px 22px;
    font-family:  ${props => props.theme.fonts.primary};
    font-size: 17px;
    font-weight: 700;
    background-color: ${props => props.theme.colors.disabled};

    &.active {
        background-color: ${props => props.theme.colors.primary};
        cursor: pointer;
    }
`;

type ButtonProps = {
    children: string,
    active: boolean,
    onClick: () => void
}

const Button = ({ children, active }: ButtonProps) => (
    <StyledButton className={active ? 'active' : ''}>
        {children}
    </StyledButton>
);

export default Button;