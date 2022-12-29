import './resources/css/Button.css';

const Button = ({shadowColor, buttonText, buttonLink}) => {
    let className = 'button';
    if (shadowColor === 'red'){
        className += ' red__button';
    }
    else if (shadowColor === 'blue'){
        className += ' blue__button';
    }
    return (  
        <a href={buttonLink} className={className}>{buttonText}</a>
    );
}
 
export default Button;