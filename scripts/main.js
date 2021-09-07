import { Convert } from "./DateConverter.js";

const getUser = () => {
    return fetch(`https://randomuser.me/api/`)
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;
    })
}

const userCard = (userObj) => {
    let dob = userObj.dob.date.split("T")[0]
    return `
    <section class="user">
        <img id="userImage" src="${userObj.picture.large}" alt="User Image">
        <ul id="userInfo">
            <li id="name">Name: ${userObj.name.title} ${userObj.name.first} ${userObj.name.last}</li>
            <li id="dob">Date of Birth: ${Convert(userObj.dob.date.split("T")[0])} (age ${userObj.dob.age})</li>
            <li id="email">Email: ${userObj.email}</li>
            <li id="phone">Phone: ${userObj.cell}</li>
            <li id="address">Address: ${userObj.location.street.number} ${userObj.location.street.name}, ${userObj.location.city}, ${userObj.location.country} ${userObj.location.postcode}</li>
        </ul>
    </section>
    `
}

getUser().then(user => {
    console.log(user.results[0])
    let container = document.getElementById("userContainer")
    container.innerHTML = userCard(user.results[0])
})