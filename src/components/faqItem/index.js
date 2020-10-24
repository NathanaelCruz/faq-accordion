import React from 'react'
import { Item, HeaderTitle, BodyFaq, HeaderTitleText, HeaderButton } from './style'
import Arrow from '../../assets/images/icon-arrow-down.svg'

const FaqItem = ({title, context, dataReference}) => {

    const toogleItem = (reference) => {
        let items = document.querySelectorAll('div[data-ref]')

        items.forEach(function(element, index){

            if(element.getAttribute('data-ref') !== reference.toString()){
                if(element.className.split(' ').indexOf('open') > -1){
                    element.classList.remove('open')
                }
            } else {
                if(element.className.split(' ').indexOf('open') > -1){
                    element.classList.remove('open')
                } else {
                    element.classList.add('open')
                }
            }
        })
    }

    return (
        <Item data-ref={dataReference}>
            <HeaderTitle onClick={() => toogleItem(dataReference)}>
                <HeaderTitleText>{title}</HeaderTitleText>
                <HeaderButton><img src={Arrow} alt="Botão para o Acordião"/></HeaderButton>
            </HeaderTitle>
            <BodyFaq className="faqContent__body">
                <p>{context}</p>
            </BodyFaq>
        </Item>
    )
}

export default FaqItem