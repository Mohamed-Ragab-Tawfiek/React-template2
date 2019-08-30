import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { PortfolioSection, PortfolioTitle, OverlaySpan, Overlay, Span, PortfolioList, PortfolioItem, ImageWrapper, Img } from './style.js'

const Portfolio = () => {

    const [images, setImages] = useState([])
    useEffect( () => {
        axios.get('js/data.json').then(res => {setImages(res.data.portofolio)})
    }, [] )

    const portfolioImages = images.map( imageItem => {
        return (
        <ImageWrapper key={imageItem.id}>
            <Img src={imageItem.image} alt=""/>
            <Overlay>
                <OverlaySpan>
                    Show Image
                </OverlaySpan>
            </Overlay>
        </ImageWrapper>
        )
    })

    return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                {portfolioImages}                
            </div>
            
        </PortfolioSection>

    )
}

export default Portfolio