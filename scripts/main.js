import { userCard } from "./userCard.js";

const getUser = () => {
    return fetch(`https://randomuser.me/api/`)
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;
    })
}

const displayUser = () => {
    getUser().then(user => {
        let container = document.getElementById("userContainer")
        container.innerHTML = userCard(user.results[0])
    })
}

document.getElementById("getNew").addEventListener('click', function(event) {
    event.preventDefault()
    displayUser()
})

displayUser()