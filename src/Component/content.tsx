function Content(){

    const firstName = "Ashwin";
    
    const lastName = "Poulose";
    
    if(firstName) return <p>Welcome {firstName + " " + lastName} to React Training</p>;
    
    return <p>Welcome to React Training</p>;
    
    
    
    
    }
    
    export default Content