const http = new EasyHttp ();

http
.get ("https://jsonplaceholder.typicode.com/posts")
.then ((data) => console.log (data, "data"))
.catch ((error) => console.error (error, "error"))

http 
.post ("https://jsonplaceholder.typicode.com/posts",{
    title: "Custom post 2",
    body : "This is body 2"
})
.then ((data)=> console.log (data,"data"))
.catch((error) => console.error (error,"error"))

const datatwo = {
    title : "custom post 2",
    body : "This is body 2"
}

http
.put ("https://jsonplaceholder.typicode.com/posts1",datatwo)
.then ((data) => console.log (data, "data"))
.catch ((error) => console.error (error, "error"))

http
.delete ("https://jsonplaceholder.typicode.com/posts")
.then ((data) => console.log (data, "data"))
.catch ((error) => console.error (error, "error"));