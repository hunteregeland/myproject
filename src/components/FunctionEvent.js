function FunctionEvent() {

/*    function handleClick() {
        console.log('Button is Clicked')
      } */

    const handleClick = ()=>{
        console.log("Button is Clicked");
    }

    return (
        <div>
            Functional components
            <button onClick={handleClick} >Click here!</button>
        </div>
    );
}

export default FunctionEvent;