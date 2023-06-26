import styled from 'styled-components';
import OpcoesHeader from '../OpcoesHeader/OpcoesHeader';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-image: linear-gradient(90deg, #000000 20%, #326589 165%);
    border-bottom: 2px solid #FFFFFF;
    display: flex;
    justify-content: center;
`;

function Header() {
    return (
        <HeaderContainer>
            <Link to='/'>
                <Logo/>
            </Link>
            <OpcoesHeader/>
        </HeaderContainer>
    )
}

export default Header;