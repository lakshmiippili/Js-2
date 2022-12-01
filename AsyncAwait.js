// console.log('Person 1 shows ticket')
// console.log('Person 2 shows ticket')

// const  promiseWifeBringingTicket = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Person 3 shows Ticket')
//     },3000)
// })
// const getPopcorn = promiseWifeBringingTicket.then((t)=>{
//     console.log('husband: we should go in')
//     console.log('I am hungry')
//     return new Promise((resolve,reject)=>{resolve(`${t} gets Popcorn`)})
// })

// const getButter = getPopcorn.then((t)=> {
//     console.log('i need butter on popcorn')
//     return new Promise((resolve,reject)=>{resolve(`${t} get butter`)})
// })

// const getColdDrinks=getButter.then((t)=>{
//     console.log(`lets get cold drinks also`)
//     return new Promise((resolve,reject)=>{resolve(`${t} gets drinks`)    })})

// console.log('Person 4 shows ticket')
// getColdDrinks.then((t)=>{console.log(`${t}`)})

//using Async and Await

// console.log('Person 1 shows ticket')
// console.log('Person 2 shows ticket')

// const preMovie =    async()=>{
//     const  promiseWifeBringingTicket = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('Person 3 shows Ticket')
//         },3000)
//     })
//     const getPopcorn = promiseWifeBringingTicket.then((t)=>{
        
//         return new Promise((resolve,reject)=>resolve('Popcorn'))
//     })
//     const getButter = getPopcorn.then((t)=> {
//         return new Promise((resolve,reject)=>resolve('butter'))
//     })
//     const getColdDrinks = getButter.then((t)=>{
//         return new Promise((resolve,reject)=>{ resolve('cold drinks')})
//     })
//     let ticket = await promiseWifeBringingTicket
//     console.log('husband: we should go in')
//     console.log('I am hungry')
//     let [popcorn,butter,drinks] = await Promise.all([getPopcorn,getButter,getColdDrinks])
//     console.log(`get ${popcorn},${butter} and ${drinks}`)
//     return ticket
// }
// preMovie().then((t)=> console.log(t))
// console.log('Person 4 shows ticket')


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

function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push({...post, createdAt: new Date().getTime()})
            console.log( )
            const error=false
            if(!error){
                resolve()
            }else{
                reject('Error:something went wrong')
            }
        },2000)
    })
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

const postDemo=async()=>{
    await createPost({title:'post3', body:'This is post three'})
    getPosts()
    await deletePost()
    getPosts()
    await deletePost()
    getPosts()
    await deletePost()
    getPosts()
    await createPost({title:'post4', body:'This is post four'})
    getPosts()
}

postDemo()