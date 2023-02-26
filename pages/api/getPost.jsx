export default function getPost(id){
    // return "lauraaa"
   return fetch (`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(post => {
        console.log(post)
        return post
    })   
}