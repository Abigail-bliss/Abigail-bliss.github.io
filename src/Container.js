const Container = ({flexDirection, numSections}) => {
    return (  
        <div className={flexDirection}>
            {numSections.map(numSections => (
                <div></div>
            ))}
        </div>
    );
}
 
export default Container;