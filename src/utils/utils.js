const fetchUsers = (setUsers) => {
    fetch('https://jsonplaceholder.typicode.com/users/')
        .then(res => res.json())
        .then(res => setUsers(res))
}

const fetchPosts = (setPosts) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => setPosts(res))
}
const fetchComments = (setComments) => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(res => setComments(res))
}

export { fetchPosts, fetchUsers, fetchComments }