const fakeRequest = (url) => {
    
    return new Promise((resolve, reject) => {
        const randNum = Math.random()
        setTimeout(() => {
            if (randNum > 0.5) {
                resolve('Your Fake Request Here')
            }
            reject('Your Request has been rejected')
        })
        
    })
}

fakeRequest('sample/1')
    .then((data) => {
        console.log('Doneeeee')
        console.log('data is:', data)
    })
    .catch((err) => {
        console.log('Rejected')
        console.log('OH NO!', err)
    })

// Color Change
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(()=> delayedColorChange('violet', 1000))

