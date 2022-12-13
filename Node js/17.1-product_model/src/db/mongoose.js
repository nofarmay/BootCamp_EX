const mongoose = require('mongoose')
const  validator = require('validator')
set("strictQuery", true);

mongoose.connect('mongodb://127.0.0.1:27017/e-commerce',{
    useNewUrlParser:true,
    useCreateIndex:true
})

const Product = mongoose.model('Product',{
    name: {
        type: String,
        unique: true,
        require:true
}, 
category: {
    type: String,
    require:true
},
isActive: {
    type: Boolean
},
details: { 
     description : {
        type: String,
        require:true,
        validate(value) {
            if (value.length < 0 ){
                throw new Error ('description must be at list 10 letters in length')
            }
        }
    },
    Price : {
        type: Number,
        require:true,
        validate(value) {
            if (value < 0){
                throw new Error ('price has to be a positive value')
    }},
    discount:{
        type: Number,
        default: 0
    },
    images :{
        type: [String],
        minLength: 2,
        validate(value) {
          if (!value.every((element) => validator.isURL(element))) {
            throw new Error("must be valid url links");
          }
        },
        } 
    , phoneNumber:{
        type: String,
        require:true,
         validate(value) {
            if (!validator.isMobilePhone(value, ["he-IL"])) {
              throw new Error("must be a valid israeli number");
            }
        },
       },
    dateAdded :{
        type: Date, 
        default: Date.now 
    }
    }}
});

shirt
  .save()
  .then(() => {
    console.log(shirt);
  })
  .catch((error) => {
    console.log("Error", error);
  });
  const pants = new Product({
    name: "cool pants",
    category: "pantsssss",
    isActive: false,
    details: {
      description: "the coolest pants in the world",
      price: 10,
      discount: 1,
      images: [
        "https://images.unsplash.com/photo-1585115704784-d6dc0bf699bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        "https://images.unsplash.com/photo-1585115704784-d6dc0bf699bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=81"],
      phoneNumber: "+972528557740"
    },
  });
  pants
    .save()
    .then(() => {
      console.log(shirt);
    })
    .catch((error) => {
      console.log("Error", error);
    });