import { createApp } from './app'

export default context => {
    return new Promise((resolve,reject)=>{
        const { app,router,store } = createApp()
        router.push(context.url)
        router.onReady(() => {
            const matchedComponent=router.getMatchedComponents()
            console.log(context.url,matchedComponent)
            if(!matchedComponent.length){
                return reject({code:404})
            }
            Promise.all(matchedComponent.map((Component:any) =>{
                console.log(Component)
                if(Component.methods.asyncData){
                    return Component.methods.asyncData({store,route:router.currentRoute})
                }
            })).then(()=>{
                context.state=store.state
                resolve(app)
            }).catch(reject) 
        },reject)
    })
}