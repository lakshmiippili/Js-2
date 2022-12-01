const posts=[
    { title:'post1', body:'this is post one', createdAt: new Date().getTime()},
    { title:'post2', body:'this is post two', createdAt: new Date().getTime() }
]

function getPosts(){
    setInterval(() => {
        let output=''
        posts.forEach((post)=>{
            output+=`<li>${post.title} last updated ${(new Date().getTime() -post.createdAt)/1000} seconds ago</li>`
        })
        document.body.innerHTML = output
    },1000)
}

function createPost(post,callback){
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime()})
        callback()
    },2000)
}

function create4thPost(post1,callback){
    setTimeout(()=>{
        posts.push({...post1,createdAt: new Date().getTime()})
    },2000)
    lastEditedInSecondsAgo()
}
createPost({title:'post3',body:'this is post three'},getPosts)
create4thPost({title:'post4',body:'this is post four'},getPosts)

var timer=0
function lastEditedInSecondsAgo(){
    var count=0
    clearInterval(timer)
    timer=setInterval(()=>{
        count++
        console.log('last edited '+count+'seconds ago')
    },1000)
}