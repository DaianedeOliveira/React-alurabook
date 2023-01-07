import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    display: flex;

    `

const Icones = styled.ul`
    display: flex;
    align-items: center;
`


const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <Icone>
{icones.map((icone) => (
<Icones><img src={icone}></img></Icones>
))}
</Icone>
    )
    }

    export default IconesHeader