import styled from "styled-components"

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#0000' };
    color: #EB9B00;
    font-size:  ${props => props.tamanhofonte || '18px' };
    text-align: ${props => props.alinhamento || 'center' };
    margin: 0;
`