import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
    background-color: #71c7ec;
`

export const Avatar = styled.img`
    flex: 1;
    height: 100%;
    width: 100%;
    padding-left: 45px;
    padding-right: 45px;
`

export const Info = styled.p`
    flex: 3;
    font-size: 25px;
    align-self: center;
    margin: 1px;
    &.Name {
        font-weight: 750;
    }
    &.Desp {
        font-style: italic;
    }
`