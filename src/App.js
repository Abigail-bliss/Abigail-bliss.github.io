import NavBar from './NavBar';
import Hero from './Hero';
import SectionTitle from './SectionTitle';
import './resources/css/App.css';
import TextWithCornerPhoto from './TextWithCornerPhoto';
import abigailPhoto from "./resources/images/abigail-headshot-dark-background-border.png";
import resume from './resources/attachments/abigail-bliss-resume.pdf';
import Box from './Box';
import Button from './Button';
import PortfolioSection from './PortfolioSection';

function App() {
  const aboutText = ([
    {text: "I am a Senior at The University of Minnesota - Twin Cities, majoring in computer science with a minor in product design. Following my graduation I will be moving to Manhattan to begin my career as a Associate Software Engineer at Gartner. ", id: 1},
    {text: "My love for technology and creative expression was born in middle school. My Mom was a professional photographer; she showed me the ropes in all things photography from the camera itself to creating a workflow and editing with Adobe products. Before I knew it I was creating digital drawings in Photoshop, making videos in Premier Pro, and tinkering with lenses and lighting to experiment with cool effects. This passion has persisted with me to this day, guiding me through my technological and design centered studies. ", id: 2},
    {text: "In addition to being a full-time student, I am a software consultant intern at Fishbowl Solutions, located in St. Louis Park, Minnesota. I enjoy working with our web-hosted software services ranging from Oracle products to our own proprietary software. I am also a product manager & design intern and assistant software developer at Fiesta LLC. Fiesta is a start-up app that provides real-time data regarding wait times and experiences at bars and restaurants in Minneapolis. I work closely with the founders and enjoy the research and development I have done over the past year. ", id: 3},
  ]);
  return (
    <div className="App">
      <NavBar/>
      <div className="main">
        <Hero/>
        <SectionTitle titleRed="ABOUT" titleBlue="ME" id="about"/>
        <TextWithCornerPhoto imgSource={abigailPhoto} imgSourceAltText="Photo of Abigail Bliss" photoPlacement="left" content={aboutText}/>
        <SectionTitle titleRed="MY" titleBlue="LINKS" id="links"/>
        <Box flexDirection="row">
          <Button shadowColor='red' buttonText='GitHub' buttonLink='https://github.com/Abigail-bliss'></Button>
          <Button shadowColor='blue' buttonText='LinkedIn' buttonLink='https://www.linkedin.com/in/abigailbliss1/'></Button>
          <Button shadowColor='red' buttonText='Resume' buttonLink={resume}></Button>
        </Box>
        <SectionTitle titleRed="PROJECTS" id="projects"/>
        <PortfolioSection/>
        
        {/* <Box flexDirection="row">
          <Container></Container>
          <div className='row iframe__container'>
            <iframe className='iframe' width="300" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FeClMvHwlECmnbzh4Z5ZutT%2FPersonal-Website-Mockup%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
            <iframe className='iframe' width="300" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FDMJLuvIAvr5YWJ5874Sppd%2FPersonal-Website-Mobile%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
          </div>
        </Box> */}
      </div>
    </div>
  );
}

export default App;
