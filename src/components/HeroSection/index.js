import React,{useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import Video from '../../videos/video3.mp4';
import {Button} from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video.mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Welcome to Space
                </HeroH1>
                <HeroP>
                    Sign up for a small but amazing space voyage
                </HeroP>
                <HeroBtnWrapper>
                   
                      
                    <Button to="signup" primary='true' dark='true'
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                    
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
