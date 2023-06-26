import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Opcoes = styled.ul`
  display: flex;
  text-decoration: none;
`;

const Opcao = styled.li`
  color: #FFFFFF;
  font-size: 16px;
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
  font-weight: bold;
`;

const headerOpcoes = ['Tasks', 'Sobre', 'Perfil'];

function OpcoesHeader() {
    return (
        <Opcoes>
            { headerOpcoes.map((opcao, index) => 
            <Link to={`/${opcao.toLocaleLowerCase()}`}>
              <Opcao key={index}>{opcao}</Opcao>
            </Link>) }
        </Opcoes>
    )
}

export default OpcoesHeader;