import React from 'react'
import { Container } from './style'
import Faq from '../../components/faq'

const LandingPage = () => {

    return (
        <Container>
            <Faq 
                title="FAQ"
                answer={[
                    {
                        id: 0,
                        titleAnswer: 'How many team members can I invite?',
                        contextAnswer: 'Text Answer'
                    },
                    {
                        id: 1,
                        titleAnswer: 'What is the maximum file upload size?',
                        contextAnswer: 'No more than 2GB. All files in your account must fit your allotted storage space'
                    },
                    {
                        id: 2,
                        titleAnswer: 'How do I reset my password?',
                        contextAnswer: 'Text Answer'
                    },
                    {
                        id: 3,
                        titleAnswer: 'Can I cancel my subscription?',
                        contextAnswer: 'Text Answer'
                    },
                    {
                        id: 4,
                        titleAnswer: 'Do you provide additional support?',
                        contextAnswer: 'Text Answer'
                    }]
                }
            ></Faq>
        </Container>
    )

}

export default LandingPage;