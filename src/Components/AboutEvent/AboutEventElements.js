import styled from "styled-components";

export const AboutEventContainer = styled.div`
    display: grid;
    height: auto;
    padding-bottom: 10%;
    background-color: var(--color-Three);
    color:var(--color-One);
`;
export const AboutEventHeadertitle = styled.div`
    text-transform:uppercase ;
    font-size: 2rem;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    padding-bottom: 1em;
    font-weight: 600;
`;
export const AboutEventHeader = styled.div`
    display: grid;
    margin: 2% 0 ;
    padding:2% 0 ;
`;
export const AboutEventHeaderBody = styled.div`
     text-align: center;
     height: auto;
    font-size: 1.5rem;
    flex:0 1 50% ;
    padding: 0 30%;
    color:var(--color-grey);
`;
export const AboutEventBody = styled.div`
   display: flex ;
   height: auto;
    flex:0 1 29% ;
    align-items:center ;
    justify-content: center;
`;
export const AboutEventBodyOne = styled.div`
    display: flex;
    width: 80%;
    height: auto;
    @media screen and (max-width: 520px) {
            display: grid;
            height: auto;
        }
`;
export const AboutEventCard = styled.div`
    margin: 0 3rem;
    width: 100%;
    height: auto;
    /* border:3px solid #fff; */
    will-change: transform;
    transition: transform 450ms;
    &:hover{
       
        /* transform: translate(0%, -10%);
        transition: all 0.8s ease-in-out;  */
        transition: transform 500ms;
        transform: translateY(-10%);
        font-size: 1.9rem  ;
        color:var(--color-darkpurple);
    }

    @media screen and (max-width: 800px) {
        flex:0 1 50% ;
        }
            
`;
export const AboutEventImg = styled.img`
    width: 100%;
    height: auto;
    display: flex;
    flex:0 1 50% ;

    @media screen and (max-width: 800px) {
        width: 80%;
        height: auto;
        display: flex;
        flex:0 1 50% ;
        } 
    @media screen and (max-width: 800px) {
        width: 80%;
        height:auto;
        display: flex;
        flex:0 1 50% ;
        }    
`;
export const AboutEventInfo = styled.div`
    
`;
export const AboutEventHorizontalLine = styled.div`
    display: flex ;
    align-items:center ;
    justify-content: center;
    /* background: #0f0; */
    hr{
        background:linear-gradient(to right,var(--color-Six),var(--color-Eight) );

        height: 5px;
        border: none;
        width: 30%;
        margin: 3% auto 0 auto;

        @media screen and (max-width: 680px) {
        display: none;
        }
    }
`;
export const AboutEventTitle = styled.div`
    font-size: 2rem;
    padding: 3rem 0;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    text-align: center;
    margin-bottom: 2%;
    

    @media screen and (max-width: 800px) {
        font-size: 1.6rem;
        position:relative;
        right: 10%;
        }
`;
export const AboutEventDesc = styled.div`
    font-size: 1.5rem;
    padding: 1rem 0rem;
    text-align: center;
    color:var(--color-grey);
    @media screen and (max-width: 800px) {
        font-size: 1rem;
        margin-bottom: 5%;
        }
        @media screen and (max-width: 520px) {
        font-size: 1rem;
        padding-right: 20%;
        }
    
`;