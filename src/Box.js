import './resources/css/Box.css?version=2';

const Box = ({children, flexDirection}) => {
    let className = 'white-border';
    if (flexDirection === "row"){
        className += ' row';
    }
    else if (flexDirection === 'column'){
        className += ' column';
    }
    return (
        <div className={"box " + className}>
            {children}
        </div>
    );
}
 
export default Box;