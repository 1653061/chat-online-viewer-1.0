import styled from 'styled-components'

export const Container = styled.div `
    margin: 20px auto;
    background-color: rgba(0, 0, 0, .04);
    border-radius: 8px;
`

export const Avatar = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 8px 8px 0 0;
`

export const Info = styled.p`
    text-align: center;
    &.Name {
        font-weight: bold;
        font-size: 1.2rem;
    }
    &.Desp {
        font-style: italic;
    }
`

export const FacebookLogo = styled.img`
    width: 30px;
    height: 30px;
`

export const FacebookLink = styled.a`
    display: block;
    margin-bottom: 20px;
    text-align: center;
`