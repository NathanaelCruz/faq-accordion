import React from 'react'
import { Container, ContainerMain, ContainerImage, ContainerContent, FaqTitle, FaqContent, BoxImage } from './style'
import faqImageMobile from '../../assets/images/illustration-woman-online-mobile.svg'
import faqImageDesktop from '../../assets/images/illustration-woman-online-desktop.svg'
import faqImageMobileShadow from '../../assets/images/bg-pattern-mobile.svg'
import faqImageDesktopShadow from '../../assets/images/bg-pattern-desktop.svg'
import boxImage from '../../assets/images/illustration-box-desktop.svg'
import FaqItem from '../faqItem'

const Faq = ({title, answer}) => {
    let image = window.screen.width < 767 ? faqImageMobile : faqImageDesktop
    let imageShadow = window.screen.width < 767 ? faqImageMobileShadow : faqImageDesktopShadow
    let classDevice = window.screen.width < 767 ? 'mobile' : 'desktop'

    return (
        <Container>
            <BoxImage>
                <img src={boxImage} alt="Ilustração da caixa" />
            </BoxImage>
            <ContainerMain>
                <ContainerImage>
                    <div className={`faqComponent__header--${classDevice}`}>
                        <img src={image} alt="Topo do componente FAQ" className="faqComponent__headerImageMain" />
                        <img src={imageShadow} alt="Sombra da imagem" className="faqComponent__headerImageShadow" />
                    </div>
                </ContainerImage>
                <ContainerContent>
                    <FaqTitle>{title}</FaqTitle>
                    <FaqContent>
                        {answer.map((item) => {
                            return <FaqItem key={item.id} title={item.titleAnswer} context={item.contextAnswer} dataReference={item.id} />
                        })}
                    </FaqContent>
                </ContainerContent>
            </ContainerMain>
        </Container>
    )
}

export default Faq