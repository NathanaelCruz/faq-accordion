import styled from 'styled-components'

export const Container = styled.div`
    width: 80%;
    max-width: 800px;
    height: 85%;
    min-height: 450px;
    display: flex;
    position: relative;

    @media(min-width: 767px){
        height: 65%;
        min-height: 350px;
        max-height: 400px;
    }
`

export const ContainerMain = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(min-width: 767px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        background-color:#fff;
        border-radius: 0.6rem;
        overflow: hidden;
    }
`
export const ContainerContent = styled.div`
    background-color: #fff;
    border-radius: 1.4rem;
    padding: 1rem;
    width: 100%;
    height: 75%;
    min-height: 327px;
    position: absolute;
    top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    @media(min-width: 767px){

        &{
            position: relative;
            top: 0px;
            height: 100%;
            justify-content: flex-start;
            margin-top: 5rem;
        }
    }
` 
export const ContainerImage = styled.div`
    width: 80%;
    max-width: 650px;
    position: absolute;
    margin: 0 auto;
    left: 5%;
    z-index: 2;

    .faqComponent__header--mobile{
        position:relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        max-width: 245px;
    }

    .faqComponent__header--mobile img{
        position: absolute;
    }

    .faqComponent__header--mobile .faqComponent__headerImageMain{
        width: 100%;
        top: 0;
        z-index: 3;
    }

    .faqComponent__header--mobile .faqComponent__headerImageShadow{
        width: 90%;
        margin-top: 60%;
        left: 10%;
        z-index: 2;
    }

    .faqComponent__header--desktop{
        display: none;
    }

    @media(min-width: 767px){
        &{
            position: relative; 
            width: auto;
            max-width: auto;
            margin: 0;
            left: auto;
        }

        .faqComponent__header--mobile{
            display: none;
        }

        .faqComponent__header--desktop,
        .faqComponent__header--desktop > img{
            position: absolute;
        }
        .faqComponent__header--desktop{
            display: block;
            height: 100%;
            width: 100%;
        }
        .faqComponent__headerImageMain {
            width: 100%;
            max-width: 302px;
            top: 0;
            left: -61px;
            z-index: 4;
            margin: auto;
            bottom: 0;
        }

        .faqComponent__headerImageShadow{
            width: 220%;
            max-width: 650px;
            left: -404px;
            top: 0;
            bottom: 0;
            margin: -180px auto auto;
        }
    }
`

export const FaqTitle = styled.h2`
    width: 100%;
    font-size: 2.8rem;
    font-weight: 700;
    color: hsl(238, 29%, 16%);
    margin-bottom: 0.7rem;
    text-align: center;
    
    @media(min-width: 767px) {
        height: auto;
        text-align: left;
    }
`

export const FaqContent = styled.div`
    width: 100%;
    height: 65%;
    overflow: auto;
    padding-right: 1rem;

    @media(min-width: 767px) {
        height: auto;
    }
`

export const BoxImage = styled.div`

    display: none;

    img{
        width: 100%;
    }

    @media(min-width: 767px){
        display: block;
        position: absolute;
        z-index: 8;
        top: 0;
        bottom: 0;
        left: -80px;
        width: 20%;
        max-width: 125px;
        margin: auto;
        height: 60px;
    }

`