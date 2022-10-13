fetch('https://swapi.dev/api/people/1/')
    .then(res => {
        console.log("Resolved", res)
        return res.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log("Error", err)
    })




fetch('https://api.tvmaze.com/search/shows?q=girls')
    .then(res => {
        console.log("Resolved", res)
        return res.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log("Error", err)
    })

