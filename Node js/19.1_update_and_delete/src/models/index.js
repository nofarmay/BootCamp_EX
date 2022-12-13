const express = require('express')
require('./db/mongoose')
const Product = require('./models/product')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.patch('/products/:id',async (req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['isActive','discount',' name','category','description','Price','discount','images','phoneNumber','dateAdded']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
   
    if(!isValidOperation) {
        return res.status(400).send({error:'Invalid update!'})
    }

    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!product) {
            return res.status(404).send()
        }

        res.send(product)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)

        if (!product) {
            res.status(404).send()
        }

        res.send(product)
    } catch (e) {
        res.status(500).send()
    }
})

app.delete('/products', async (req, res) => {
    try {
        const product = await Product.find()

        if (!product) {
            res.status(404).send()
        }

        res.send(product)
    } catch (e) {
        res.status(500).send()
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})