
import './resources/css/ProductDesign.css';

const PortfolioSection = ({title, titlePlacement, titleColor, text, children}) => {
    return (  
        <div id="productdesign">
            <div class="productdesign__container">
                <div class="box pd_box">
                    <div class="text text__left">
                        <h2 class="redh2">MY WEBSITE</h2>
                        <p>Yes - this very website! I also coded this from scratch. You can view my code <a class="redtext" href="https://github.com/Abigail-bliss/Abigail-bliss.github.io">here.</a></p>
                        <br></br>
                        <p>My first website, linked <a class="redtext" href="version-1/index.html">here,</a> was overwhelming.
                            So, I used <span class="redtext">Figma</span> to create a bold yet simple page that communicates my portfolio effectivley.
                        </p>
                    
                        <br></br>
                        <p>
                            I created this website with <span class="redtext">modularity</span> modularity and <span class="redtext">repeatability</span> in mind. 
                            It is important to deliver a product to your client that can be easily manipulated and fine tuned.
                            Teach someone to fish, right?
                        </p>
                    </div>
                    <div class="iframe__container">
                        <iframe title="figma1" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FeClMvHwlECmnbzh4Z5ZutT%2FPersonal-Website-Mockup%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
                        <iframe title="figma2" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FDMJLuvIAvr5YWJ5874Sppd%2FPersonal-Website-Mobile%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
                    </div>
                </div>

                <div class="box pd_box prep_pal">
                    <iframe title="marvel" src="https://marvelapp.com/prototype/afg4ed9?emb=1&iosapp=false&frameless=false" width="390" height="735" allowTransparency="true" frameborder="0"></iframe>
                    <div class="text prep">
                        <h2 class="blueh2">PREP PAL</h2>
                        <h3>PROBLEM CONTEXT</h3>
                        <ul>
                            <li>Food anxiety in college students is commonly caused by <span class="redtext">lack of time and money</span></li>
                            <li>Meal preparation helps address these issues by <span class="redtext"> planning meals in </span>advance 
                            <span class="redtext"> buying food in bulk</span>
                            </li>
                        </ul>
                        <br></br>
                        <h3>RESEARCH</h3>
                        <ul>
                            <li>Research results can be found <a href="https://docs.google.com/presentation/d/18ctT2frXx2xnTVlGvJ9d8oKFhSi2Wx-3Mg_-w6vcQAA/edit?usp=sharing" class="redtext">here.</a></li>
                        </ul>
                        <br></br>
                        <h3>FINAL IMPLEMENTATION</h3>
                        <ul>
                            <li>Implemented five changes based on user research</li>
                            <li>Watch video below</li>
                        </ul>
                        <br></br>
                        <iframe id="preppal_iframe" title="youtube" width="360" height="315" src="https://www.youtube.com/embed/gL947IcOeHg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                {/* <div class="box pd_box">
                    <div class="cols">
                        <div class="rows">
                        <div class="text">
                            <h2 class="redh2">FIESTA</h2>
                            <p class="fiesta">Over the past year in my product design and management internship I have created mockups and implemented changes asa result of a user interface research study I conducted.</p>
                            <br></br>
                            <img src="./attachments/fiesta/threepanels.png" alt=""></img>
                            <br></br>
                            <br></br>
                            <p class="fiesta">It was too expensive to implement the search bar feature, but having a non functioning search bar was misleading to users. A simple design change provides more clarity.</p>
                        </div>
                        </div>

                        <div class="rows">       
                            <img src="./attachments/fiesta/searchbar.png" alt=""></img>
                        </div>

                        <div class="text checkbox">
                        <p class="center">Checkbox design lead to confusion when signing up, resulting in a loss of users. Another simple design change resolved that problem.</p>
                        </div>
                        
                        <div class="rows">
                        <img src="./attachments/fiesta/checkbox.png" alt=""></img>
                        </div>

                        <div class="rows">
                        <img src="./attachments/fiesta/teedesigns.jpg" alt=""></img>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>

    );
}
 
export default PortfolioSection;