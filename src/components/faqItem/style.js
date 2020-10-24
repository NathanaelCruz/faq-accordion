import styled from 'styled-components'

export const Item = styled.div`
    width: 100%;
    padding: 1.2rem 0;
    border-bottom: 1px solid hsl(240, 5%, 91%);

    &.open div:first-child > h4,
    &.open div.faqContent__body,
    &.open div:first-child > button img,
    & div:first-child button img{
        transition: 0.2s ease-in;
    }

    &.open div.faqContent__body{
        padding: 0.5rem 0;
        height: 40px;
        overflow: hidden;
    }

    &.open div:first-child > h4{
        font-weight: 700;
    }

    &.open div:first-child > button img{
        transform: rotate(180deg);
    }

    @media(min-width: 767px){
        padding: 0 0 1.2rem;
    }
`

export const HeaderTitle = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover{
        cursor: pointer;
        button{
            cursor: pointer;
        }
        h4{
            color: hsl(14, 88%, 65%);
        }
    }
`

export const HeaderTitleText = styled.h4`
    font-size: 1.5rem;   
    font-weight: 400;
    color: hsl(237, 12%, 33%);
    transition: 0.2s ease-in;

    @media(min-width: 1024px){
        &{
            font-size: 1.8rem;
        }
    }
`

export const BodyFaq = styled.div`
    width: 100%;
    padding: 0;
    height: 0;
    transition: 0.2s ease-in;
    overflow: hidden;

    p{
        color: hsl(237, 12%, 33%);
        font-size: 1.2rem;
    }

`

export const HeaderButton = styled.button`
    background-color: transparent;
    border: 0;
    transition: 0.2s ease-in;
`