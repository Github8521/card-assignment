const express=require('express')

const card=require('../modal/card')
const router=new express.Router()



    
    router.post('/getcard',async(req,res)=>{
        let success=false
        try {
            const user= new card(req.body)
            const responce= await user.save()
            success=true
            res.status(201).send( {success, responce})
        } catch (error) {
            success=false
            res.status(400).send({success, error})
        }
    
    })
    router.get('/getcard', async(req,res)=>{
       try {
        const responce =await card.find()
        res.status(200).send( responce )
        
       } catch (error) {
        res.status(400).send(error)
       }
    })
    router.get('/', async(req,res)=>{
      res.status(200).send('hello from other side')
    })
    router.get('/getcard/:id', async(req,res)=>{
       try {
        const _id = req.params.id
        const responce= await card.findById(_id)
        if(!responce){
            return res.status(404).send()
        }
        else{
    
            res.status(200).send(responce )
        }
        
       } catch (error) {
        res.status(500).send(error)
       }
    })
    router.delete('/getcard/:id', async(req,res)=>{
       try {
        const _id = req.params.id
        const responce= await card.findByIdAndDelete(_id)
        if(!responce){
            return res.status(404).send()
        }
        else{
    
            res.status(200).send(responce )
        }
        
       } catch (error) {
        res.status(500).send(error)
       }
    })
    router.patch('/getcard/:id', async(req,res)=>{
       try {
        const _id = req.params.id
        const responce= await card.findByIdAndUpdate(_id, req.body,{new:true})
        if(!responce){
            return res.status(404).send()
        }
        else{
    
            res.status(200).send(responce )
        }
        
       } catch (error) {
        res.status(500).send(error)
       }
    })
    module.exports=router
