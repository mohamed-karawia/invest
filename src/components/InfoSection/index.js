import React from 'react';
import {Button} from '../ButtonElement';

import 
{
InfoContainer,
InfoWrapper,
InfoRow,
Column1,
Column2,
TextWrapper,
TopLine,
Heading,
Subtitle,
BtnWrap,
ImgWrap,
Img
} from './InfoElements';


const InfoSection = (props) => {
    return (
        <>
         <InfoContainer lightBg={props.lightBg} id={props.id}>
             <InfoWrapper>
                 <InfoRow imgStart={props.imgStart}>
                     <Column1>
                        <TextWrapper>
                            <TopLine>{props.topLine}</TopLine>
                            <Heading lightText={props.lightText}>{props.headline}</Heading>
                            <Subtitle darkText={props.darkText}>{props.description}</Subtitle>
                            <BtnWrap>
                                <Button to="home"
                                smooth={true}
                                duration={500}
                                exact="true"
                                offset={-80}
                                primary={props.primary ? 1 : 0}
                                dark={props.dark ? 1 : 0}
                                dark2={props.dark2 ? 1 : 0}>{props.buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                     </Column1>
                     <Column2>
                        <ImgWrap>
                            <Img src={props.img} alt={props.alt} />
                        </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
         </InfoContainer>
        </>
    )
}

export default InfoSection;
