import styled from 'styled-components';
import {HeroContainer as Hero} from 'react-router-dom';

import imgBg2 from './bg3.jpg';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.3),
    rgba(0,0,0,0.3)), 
    url(${imgBg2});
    height:100vh;
    background-position:center;
    background-size:cover;
    height: 900px;
    text-align:center;
`
export const HeroContent = styled.div`
    height:2%;
    max-height:100%;
    margin-left:80px;
`
export const HeroItems = styled.div`
    text-align:center;
    justify-content:center;
    width:80%;
    line-height:3;
    max-height:100%;
    height:100vh;
    align-items:center;
    margin-left:5%;
    @media screen and (max-width: 800px) {
        margin-left:-1%;
    }
`
export const HeroH1 = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    color:#FFF;
    font-weight:bold;
    font-size:70px;
    display:flex;
    line-height: 100px;
    padding-top:10%;
    text-align:center;

    @media screen and (max-width: 800px) {
        font-size:50px;
    }
    @media screen and (max-width: 600px) {
        font-size:30px;
    }
`
export const HeroH2 = styled.div`
    color:#C0C0C0;
    display: flex;
    align-items:center;
    justify-content:center;
    font-weight:600;
    font-size:23px;

    @media screen and (max-width: 800px) {
        font-size:18px;
    }
    @media screen and (max-width: 600px) {
        font-size:12px;
    }
`
export const HeroP = styled.div`
    color:#fff;
    font-weight:600;
    font-size:18px;
    font-style:italic;

    @media screen and (max-width: 800px) {
        font-size:14px;
    }
    @media screen and (max-width: 600px) {
        font-size:10px;
    }
`
export const HeroButton = styled.button`
    display:flex-box;;
    width:175px;
    height:45px;
    background:none;
    color:#fff;
    margin:20px;
    border:none;
    font-size:20px;
    cursor:pointer;
    //background-color:#ff075b;
    border: 2px #cda45e solid;
    border-radius:30px;
    text-decoration: none;
    .button{
        text-decoration: none;
        color: #fff;
    }
    &:hover{
        color:#fff;
        transition:all 1s;
        background:#da9100;
        //background:#FFA500;
        border:1px #000 solid;
    }
`
export const HeroSignLink = styled.div`
`
export const HeroLoginLink = styled.div`
`