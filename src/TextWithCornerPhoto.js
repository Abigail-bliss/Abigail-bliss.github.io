import './resources/css/TextWithCornerPhoto.css';

const TextWithCornerPhoto = ({imgSource, imgSourceAltText, photoPlacement, content}) => {
    let className = 'image__';
    if (photoPlacement === 'left') {
        className += 'left';
    } else if (photoPlacement === 'right') {
        className += 'right'
    }
    return (
        <div className="container">
            <div className={className}>
                <img src={imgSource} alt={imgSourceAltText} />
            </div> 
            <div className="white-border content-container">
                {content.map(paragraph => (
                    <div className="section__text" key={paragraph.id} >
                        <p>{paragraph.text}</p>
                    </div>
                ))}
            </div>
        </div>  
    );
}
 
export default TextWithCornerPhoto;