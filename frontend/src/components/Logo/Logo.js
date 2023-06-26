import styled from 'styled-components';
import logo from '../../img/logo.svg';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    margin-right: 800px;
    

    p {
        font-size: 20px;
        align-self: center;
        color='#FFF';
        font-weight: bold;
    }
`;

const LogoImg = styled.img`
    width: 50px;
`;

function Logo() {
    return (
        <LogoContainer>
            <LogoImg src={logo} alt='' fill='white'/>
            <p><strong>Tasks</strong>Manager</p>
        </LogoContainer>
    )
}

export default Logo;