const API_URL = "https://dev-to-api.onrender.com"

async function login(email, password) {
    const response = await fetch(`${API_URL}/auth/login`,  {
        method:"POST",
        headers: {"Content-Type" : "application/json"},
        body:JSON.stringify({
            email,
            password,
        })

    })
    const json = await response.json()
    return json.data.token
}

async function createUser(email, password, name, profilePic, user){
    const response= await fetch (`${API_URL}/user`, {
        method:"POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
            email,
            password,
            name,
            profilePic,
            user
        })
    })
    const json = await response.json()
    return json
}

async function getUser (id) {
    const response = await fetch (`${API_URL}/user/${id}`, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json"
        }
    })
    const json = await response.json ();
    return json.data.user
}

async function createPost (title, body, user, image ) {
    const token = (typeof window !== 'undefined') ? localStorage.getItem("token") : null;
    const response = await fetch(`${API_URL}/post`, {
        method:"POST",
        headers: {
            "Content-Type" : "application/json",
            Authorization : token,
        },
        body: JSON.stringify({
            title: title,
            body: body,
            user: user,
            image: image
        })
        
    })
    const json = await response.json()
    return json
}

async function getPost () {
    const token = (typeof window !== 'undefined') ? localStorage.getItem("token") : null;
    const response = await fetch(`${API_URL}/post`, {
        method:"GET",
        headers: {
            Authorization: token
        }
    })
    const json = await response.json();
   return json.data.post;
}

async function getPostById(id) {
    const response = await fetch(`${API_URL}/post/${id}` , {
        method:"GET",
        headers: {"Content-Type" : "application/json"}
    })
    const json = await response.json();

  return json.data.post;
}

module.exports = {
    getPost,
    getPostById,
    createUser,
    createPost,
    login,
    getUser
}
