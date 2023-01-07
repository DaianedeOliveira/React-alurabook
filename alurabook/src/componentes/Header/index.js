import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../iconesHeader'
import styled from 'styled-components'


const HeaderContainer = styled.header`
    background-color: #ffff;
    display: flex;
    justify-content: center;

`


function Header() {
    return (
        
<HeaderContainer>

    <Logo/>
<OpcoesHeader/>
<IconesHeader/>
</HeaderContainer>

    )
}

export default Header