const Games = () => {
    return (
        <div className="games" id="games">
            <h1>Games I Developed</h1>
            <ul>
                <li onClick={() => {window.open("https://spider-ahmed05.itch.io/the-lab", "blank")}}>
                    <h3>The Lab</h3>
                    <img src="The-Lab.png" alt="" />
                    <p>The Lab is a game about a robot  destroyed the lab and killed everyone in it, and you have to escape before the lava the robot made kills you.</p>
                </li>
                
                 <li onClick={() => {window.open("https://spider-ahmed05.itch.io/sh7ka", "blank")}}>
                    <h3>SH7KA _شحكه</h3>
                    <img src="sh7ka.png" alt="" width={"350px"} height={"200px"}/>
                    <p>This is a game a made 2 years ago about saudi national day, In fact this is the first game I publish in my entire career.</p>
                </li>
                
                 <li onClick={() => {window.open("https://spider-ahmed05.itch.io/weird-thing", "blank")}}>
                    <h3>Game Title</h3>
                    <img src="weird-thing.png" alt="" />
                    <p>One day I was bored, so I challenged myself to make a game in 5 hours only, And this game was the result, You have to kill 30 of the bots to win.</p>
                </li>
            </ul>
        </div>
    );
}
 
export default Games;