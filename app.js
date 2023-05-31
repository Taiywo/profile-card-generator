const image = document.getElementById("img")
const fullName = document.getElementById("fullName")
const phoneNumber = document.getElementById("phoneNumber")
const email = document.getElementById("email")
const address = document.getElementById("address")
const btn = document.getElementById("btn")

btn.addEventListener('click', () => {
  const url = "https://randomuser.me/api/"
  const CardData = () => {

    fetch(url)
      .then(response => {

        return response.json();
      })
      .then(data => {
        const cardImage = data.results[0].picture.large
        image.src = cardImage

        const cardNumber = data.results[0].phone
        phoneNumber.textContent = cardNumber


        const title = data.results[0].name.title
        const firstName = data.results[0].name.first
        const LastName = data.results[0].name.last
        fullName.textContent = `${title} ${firstName} ${LastName}`


        const emailAdress = data.results[0].email
        email.textContent = emailAdress

        const streetNumber = data.results[0].location.street.number
        const streetName = data.results[0].location.street.name
        const streetState = data.results[0].location.country
        address.textContent = `${streetNumber} ${streetName} ${streetState}`
        console.log(streetAdress);




      })
  }
  CardData()
})














