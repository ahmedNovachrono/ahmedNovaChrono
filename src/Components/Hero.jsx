import { useEffect } from "react";
import Header from "./Header";
import Nav from "./Nav";
import { Player } from '@lottiefiles/react-lottie-player';
const Hero = () => {

    // useEffect(() => {
    //     let i = 0;
    //     let text = document.querySelector(".typewritter").innerText;
    //     document.querySelector(".typewritter").innerText = "";
    //     const interval =  setInterval(() => {
    //         if(i < text.length){
    //             document.querySelector(".typewritter").innerText += text[i];
    //             i++
    //         }else{
    //             clearInterval(interval)
    //         }
    //     }, 100);
        
    // }, [])
    return ( 
        <div className="hero" id="hero">
            <Nav />
            <div className="hero-main-section">
                <Player className="anim" src="anim.json" loop autoplay/>
                    <h1 className="typewritter">Hello There, I'm <span className="hero-name typewritter">Ahmed Safy</span> Happy That You Visted My Website</h1>
            </div>
        </div>
     );
}
 
export default Hero;