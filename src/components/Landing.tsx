import { useState } from 'react';
import styled from 'styled-components';
import heartIcon from '../assets/icons/heart-icon.svg';
import checkIcon from '../assets/icons/check-icon.svg';
import shLogo from '../assets/icons/squarehealth-logo.svg';
import Card from './Card';
import Button from './Button';


// STYLES

const StyledLanding = styled.div`
    .footer {
        margin: 23px 10px;
    }

    .checkbox {
        display: flex;

        p {
            margin: 0;
        }

        span {
            font-weight: 700;
            text-decoration: underline;
        }
    }


`;

const StyledCheckbox = styled.div`
    width: 33px;
    height: 20px;
    border-radius: 6px;
    border: 2px solid ${props => props.theme.colors.textPrimary};
    margin-top: 3px;
    margin-bottom: 30px;
    margin-right: 10px;

    &.active {
        border: 2px solid ${props => props.theme.colors.primary};
        background-image: url(${checkIcon});
        background-size: cover;
    }
`;


// COMPONENT

type LandingProps = {
    startQuestionnaire: () => void
}

const Landing = ({ startQuestionnaire }: LandingProps) => {
    const [checkbox, toggleCheckbox] = useState(false);

    return (
        <StyledLanding>
            <Card>
                <img src={heartIcon} alt="heart-icon"/>
                <h1>Health Assessment</h1>
                <p>Copy here about why the user should be completing this. What will you do with this information and how does it benefit them. Answers will be saved, for if you chose to continue later.</p>
                <div className="checkbox">
                    <StyledCheckbox className={checkbox ? 'active' : ''} onClick={() => toggleCheckbox(!checkbox)}/>
                    <p>Checkbox consenting about capturing your data <span>read more</span></p>
                </div>
                <Button active={checkbox} onClick={checkbox ? startQuestionnaire : ()=>{}}>Get started</Button>
            </Card>
            <img className="footer" src={shLogo} alt="square-health"/>
        </StyledLanding>
    );
}

export default Landing;