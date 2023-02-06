const adviceID = document.querySelector(".adviceID")
const adviceMsg = document.querySelector(".adviceMsg");
const changeButton = document.querySelector(".main__button button");

// ASYNC AND AWAIT
async function getAdvice(resource){
    const response = await fetch(resource);
    if(response.status !== 200){
        adviceID.textContent = 404;
        throw new Error("Could not retrieve resource")
    }
    const data = await response.json();

    return data;
}
getAdvice("	https://api.adviceslip.com/advice")
.then(data => {
    const { id, advice } = data.slip
    adviceID.textContent = id;
    adviceMsg.textContent = advice;
    console.log(data)
}).catch(err => adviceMsg.textContent = err.message)


// TOGGLE ADVICE 
changeButton.addEventListener("click", ()=>{
    getAdvice("	https://api.adviceslip.com/advice")
        .then(data => {
            const{id, advice} = data.slip
            adviceID.textContent = id;
            adviceMsg.textContent = advice;
            console.log(data)
        }).catch(err => adviceMsg.textContent = err.message)
})