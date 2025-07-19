import { useEffect } from "react";

const Header = () => {
    // useEffect(() => {
    //     const lis = document.querySelectorAll(".header ul li");
    //     const ul = document.querySelector(".header ul");

    //     ul.addEventListener("click", (e) => {
    //         lis.forEach((li) => {
    //             if(li.className.includes("active"))
    //             li.classList.remove("active")
    //         })
    //         e.target.classList.add("active")
    //         console.log(e.target)
    //     })
    // }, [])
    return ( 
        <div className="header">
            <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#cards">Skills</a></li>
                <li><a href="#games">Projects</a></li>
            </ul>
        </div>
     );
}
 
export default Header;