import { useState } from "react";
import "./slider.scss";
const Slider = ({images}) => {
    const [imageIndex, setImageIndex] = useState(null);
    const changeSliderDirection = (direction) => {
        if(direction === "left"){
            if(imageIndex === 0){
                setImageIndex(images.length-1)
            }else{
                setImageIndex(imageIndex-1)
            }
        }else{
            if(imageIndex === images.length-1){
                setImageIndex(0)
            }else{
                setImageIndex(imageIndex+1)

            }   
        }
    }
    return(
        <div className="slider">
            {imageIndex !== null && 
                (
                    <div className="fullSlider">
                        <div className="arrow" onClick={() => changeSliderDirection("left")}>
                            <img src="/arrow.png" alt="" />
                        </div>
                        <div className="imgContainer">
                            <img src={images[imageIndex]} alt="" />
                        </div>
                        <div className="arrow" onClick={() => changeSliderDirection("right")}>
                            <img src="/arrow.png" alt="" className="right" />
                        </div>

                        <div className="close" onClick={() => setImageIndex(null)}>X</div>
                    </div>
                )
            }

            <div className="bigImage">
                <img src={images[0]} alt="" onClick={() => setImageIndex(0)}/>
            </div>
            <div className="smallImages">
                
                {images.slice(1).map((image, index) => (
                    <img src={image} alt="" key={index}  onClick={() => setImageIndex(index+1)}/>
                ))}

            </div>
        </div>
    )
}


export default Slider;