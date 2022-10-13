const credentials = {
    username: "Shabel",
    password: "password123"
}

async function login (username, password) {

    if (username == credentials.username && password == credentials.password) {
        return "Login successfully!!"
    } else {
        throw "Username or Password is incorrect"
    }
    
}

login()
    .then(data => {
        console.log(data)
        console.log(`Welcome back, ${credentials.username}`)
    })
    .catch(err => {
        console.log(err)
    })

    
// Color Change with async await
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}


async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
}

