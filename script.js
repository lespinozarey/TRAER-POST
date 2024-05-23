
const getPosts = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        if (data) {
            const postInfo = data.map(i =>
                `<li> 
                    <p>${i.Id}</p>
                    <p><strong>${i.title}</strong></p>
                    <p>${i.body}</p>
                </li>`
            ).join('')

            document.getElementById('post-data').innerHTML = postInfo
        }
    } catch (error) {
        console.log(error)
    }
}

const getPosts2 = async () => {
    try {
        let postInfo = [];
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        if (data) {
            data.forEach(e => {
                postInfo.push(`<li>
                <p><strong>${e.title}</strong></p>
                <p>${e.body}</p>
                </li>`)
            });

            document.getElementById('post-data').innerHTML = postInfo.join('')
        }
    } catch (error) {
        console.log(error)
    }
}