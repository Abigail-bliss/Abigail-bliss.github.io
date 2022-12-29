import './resources/css/SectionTitle.css?version=2';

const SectionTitle = ({titleRed, titleBlue, id}) => {
    return (
        <div className="section_container" id={id}>
            <h1><span className="titleRed">{titleRed} </span><span className="titleBlue">{titleBlue}</span></h1>
        </div>  
    );
}
 
export default SectionTitle;