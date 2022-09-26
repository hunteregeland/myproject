//const name = "Hunter";

const displayMessage = ()=>{
    return "I need help!"
};

function Hello() {
    return <h1>The message is: {displayMessage()}</h1>
}

/* const Hello = ()=> <h1>Hello There</h1> // es6 syntax
*/

export default Hello; // exporting Hello component as default import, can give any name