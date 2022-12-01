const posts=[
    { title:'post1', body:'this is post one', createdAt: new Date().getTime()},
    { title:'post2', body:'this is post two', createdAt: new Date().getTime() }
]
function getPosts(){
    setTimeout(() => {
        let output=''
        posts.forEach((post,index)=>{
            output+=`<li>${post.title} last updated ${(new Date().getTime() -post.createdAt)/1000} seconds ago</li>`
        })
        document.body.innerHTML = output
    },1000)
}
const userOperations = async(){
    

}


const user={
    userName:'lakshmi',
    lastActivityTime:'28 november'
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                resolve(posts.pop())
            }
            else{
                reject('Array is empty now')
            }
        },1000)
    })

}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastActivityTime=new Date().getTime()
            resolve(user.lastActivityTime)
        },1000)
    })
}

function userupdates(){
    Promise.all([createPost,updateLastUserActivityTime]).then(([createPostResolve,updateLastUserActivityTimeReolve])=>{
        console.log(updateLastUserActivityTimeReolve)
    }).catch((err)=>console.log(err))
}
    createPost({title:'post3', body:'This is post three'}).then(()=>{
        getPosts()
        deletePost().then(()=>{
            getPosts()
            deletePost().then(()=>{
                getPosts()
                deletePost().then(()=>{
                    getPosts()
                    deletePost().then(()=>{})
                    .catch((err)=>console.log(err))
                }).catch((err)=>console.log(err))
            }).catch((err)=>console.log(err))
        }).catch((err)=>console.log(err))
    }).catch((err)=>consolelog(err))
   


    
    // const promise1 =Promise.resolve('Hello Welcome to Promises')
    // const promise2= new Promise((resolve,reject)=>{
    //     setTimeout(resolve,2000,'GoodBye')
    // })
    // const promise3= fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())

    // Promise.all([promise1,promise2,promise3]).then((values)=> console.log(values))
    