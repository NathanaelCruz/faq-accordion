import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

    :root{
        font-size: 62.7%;
    }

    *{
        box-sizing: border-box;
        font-family: 'Kumbh Sans', sans-serif;
    }

    body, html, *{
        margin: 0;
        padding: 0;
    }

    body, html, #root{
        background: linear-gradient(hsl(273, 75%, 66%), hsl(240, 73%, 65%));
        height: 100vh;
        width: 100vw;
    }

    button, input, textarea, body{
        font: 400 1.2rem "Kumbh Sans";
    }

    button:active,
    button:focus{
        outline: none;
        border: 1px solid #ccc;
    }

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media(min-width: 767px){
        :root{
            font-size: 62.4%;
        }
    }
`

export default GlobalStyle;