import { useEffect } from "react";

const Bio = () => {



    useEffect(() => {
        
    const scared = document.querySelector(".scared");
    const container = document.querySelector(".bio-images");
        container.addEventListener("mousemove", (e) => {
        let boxRect = scared.getBoundingClientRect();
        let mouseX = e.clientX;
        let mouseY = e.clientY;


        let boxX = boxRect.left + boxRect.width / 2;
        let boxY = boxRect.top + boxRect.height / 2;

        let deltaX = boxX - mouseX;
        let deltaY = boxY - mouseY;


        let distance = Math.sqrt(deltaX * deltaX + deltaY*deltaY);

        const maxDistance = 150;

        if(distance < maxDistance){
            let moveX = (deltaX / distance) * 50;
            let moveY = (deltaY / distance) * 50;

            let newLeft = scared.offsetLeft + moveX;
            let newTop = sca.offsetTop + moveY;

            newLeft = Math.max(0, Math.min(container.clientWidth - sacred.offsetWidth, newLeft));
            newTop = Math.max(0, Math.min(container.clientWidth - sacred.offsetHeight, newTop));

            sacred.style.left = `${newLeft}px`
            sacred.style.top = `${newTop}px`
        }

    })
    })

    
    return ( 
    <div className="bio">
        <div className="bio-images">
            <img className="scared" src="js-logo.png" alt="" style={{top: "10vw", left: "12vw", filter: "drop-shadow(0px 0px 40px #ffde00)"}}/>
            <img src="mongo-logo.png" alt=""  style={{top: "15vw", right: "65vw", filter: "drop-shadow(0px 0px 15px #80bd01)"}}/>
            <img src="nodejs-logo.png" alt=""  style={{bottom: "15vw", right: "70vw"}}/>
            <img src="redux-logo.png" alt=""  style={{bottom: "15vw", left: "8vw"}}/>
        </div>
        <div className="bio-dis">
            <span><h1>About Me</h1></span>
            <h1 className="bio-h1">My name is Ahmed safy aldean Hafiz, 07/20/2025 at this date I'm 21 years old, I'm a guy who's obsessed with technolgy.. In my career I learned, Game Development & Web Development specifically the front-end, And a little bit of animations both dimensional 2D, 3D, The programming languages I learned are, c, c#, JavaScript.. add to them HTML & CSS even if they aren't programming languages, HTML is a mark up language, CSS is a style sheet language, For animating I used Blender for 3D, And moho for 2D, But I really didn't like animtion world as I did with gameDev and webDev.

</h1>
        </div>
</div>
     );
}
 
export default Bio;
