import styled from 'styled-components';

const Card = styled.div`
    border-radius: ${props => props.theme.borderRadius};
    margin: 0 auto;
    padding: 30px 26px;
    background-color: white;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.1);
`;

export default Card;