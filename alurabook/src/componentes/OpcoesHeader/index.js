
import styled from 'styled-components'

const Opcao= styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 120px;
    padding: 0 5px;
    cursor: pointer;
`

const Opcoes= styled.ul`
    display: flex;
    margin-left: 50px;

`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHAS ESTANTE']


function OpcoesHeader() {
return (
    
<Opcoes>
{textoOpcoes.map((texto) => (
    <Opcao><p>{texto}</p></Opcao>
))}

</Opcoes>
)

}

export default OpcoesHeader