import styled from "styled-components";

export const DontMissContainer = styled.div`
    background-color: var(--color-Three);
    color:var(--color-One);
    display: flex;
    height: 400px;
    padding: 0 1.5%;
    padding: 5rem 0;

    /* @media screen and (max-width: 680px) {
        max-width: calc(80% - 20px);
    } */
`;
export const DontMissColOne = styled.div`
    display: flex ;
    flex:0 1 29% ;
    align-items:center ;
    justify-content: center;
    /* background: #0f0; */
    hr{
        background:linear-gradient(to right,var(--color-Six),var(--color-Eight) );

        height: 5px;
        border: none;
        width: 90%;
        margin: 0 auto;

        @media screen and (max-width: 680px) {
        display: none;
        }
    }
`;
export const DontMissColTwo = styled.div`
    text-transform: uppercase;
    display: flex;
    flex:0 1 42% ;
    font-size: 2.25rem;
    letter-spacing:0.2rem ;
    align-items:center ;
    justify-content: center;
    font-family: 'Raleway', sans-serif;
    /* background: #f00; */
    text-align:center ;

    @media screen and (max-width: 680px) {
            font-size: 1.1rem;
        }
        @media screen and (max-width: 520px) {
            font-size: 1.1rem;
        } 
        @media screen and (max-width: 340px) {
            font-size: 1rem;
            display: grid;
        }       
`;
export const DontMissColThree = styled.div`
    flex:0 1 29% ;
    display: flex ;
    align-items:center ;
    justify-content: center;
    /* background: #0f0; */
    hr{
        background:linear-gradient(to right,var(--color-Eight),var(--color-Six) );
        height: 5px;
        border: none;
        width: 90%;
        margin: 0 auto;
        @media screen and (max-width: 680px) {
        display: none;
        }
    }
    
`;
export const DontMissSenOne = styled.div`
    font-weight: 700;
`;
export const DontMissSenTwo = styled.div`
    
`;
export const DontMissSenThree = styled.div`
    font-weight: 700;
`;
export const DontMissSenFour = styled.div`
    
`;



