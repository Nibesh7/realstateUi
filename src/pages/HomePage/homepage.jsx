import "./homepage.scss"
import Search from "../../components/searchbar/Search"
const HomePage = () => {
    return(
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Find Real State & Get Your Dream Place</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum!
                    </p>
                    <Search/>
                    <div className="boxes">
                        <div className="box">
                            <h1>16*</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Awards Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200*</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imageContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}


export default HomePage