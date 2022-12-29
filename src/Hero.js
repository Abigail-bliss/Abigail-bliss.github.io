import './resources/css/Hero.css?version=2';

const Hero = () => {
    return (  
        <div className="hero" id="hero">
            <div className="hero__container">
                <div className="hero__box">
                    <p>Nice to meet you. I'm <span></span></p>
                </div>

                <h1 className="name__first">ABIGAIL</h1>
                    {/* <h1 className="name__first__shadow  ">ABIGAIL</h1> */}

                <h1 className="name__last">BLISS</h1>
                    {/* <h1 className="name__last__shadow">BLISS</h1> */}
            </div>
        </div>
    );
}
 
export default Hero;