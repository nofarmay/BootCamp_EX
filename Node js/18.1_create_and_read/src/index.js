const express = require('express')
require('./db/mongoose')
const Product = require('./models/product')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/products',(req,res) => {
    const product = new Product(req.body)
    
    product.save().then(() => {
        res.status(201).send(product)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/products', (req, res) => {
    Product.find({}).then((products) => {
        res.send(products)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/products/:id', (req, res) => {
    const _id = req.params.id

    Product.findById(_id).then((product) => {
        if (!product) {
            return res.status(404).send()
        }

        res.send(product)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/products/active', (req, res) => {
    Product.find({isActive:true}).then((products) => {
        res.send(products)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/products/price', (req, res) => {
    Product.find({Price:{ $gt:50,$lt:500}}).then((products) => {
        res.send(products)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})