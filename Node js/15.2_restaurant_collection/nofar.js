// Instructions
// Let's do some queries against the restaurant collection from
// the previous exercise:

// 1. Crud
// 1.1 – Write a MongoDB query to display all the documents in the
// restaurant collection.
// db.restaurants.find()
// 1.2 - Write a MongoDB query to display all restaurants that have a
// specific cuisine
// db.restaurants.find({cuisine:"Italian"}).pretty()
// 1.3 - Write a MongoDb query that displays only kosher
// restaurants
// db.restaurants.find({kosher:true}).pretty()
// 1.4 - Write a MongoDb query that displays only specific cities
// restaurants.find({kosher:true}).pretty()
// db.restaurants.find({cuisine:"Italian"})
// 1.5 - Write a MongoDb query to display a specific restaurants
// address
// db.findOne({adress.city:"a",adress.street:"a"})
// 1.6 - Write a MongoDB query to display specific restaurants
// coordinates
// db.findOne({coordinates: [-77,564, 40.677])
// 1.7. - Write a MongoDB query that should display all restaurants in
// ascending order by restaurant name.
// db.resturants.aggregate([{$sort: {name: 1}}])
// 1.8 - Write a MongoDB query that should display all restaurants in
// ascending order by city names.
// db.resturants.aggregate([{$sort: {adress.city : 1}}])
// 1.9 - Update a specific restaurant's name
// db.resturants.updateOne({_id:ObjectId("639645c22b20fcbfc68c440a")},{$set:{na
// me:"TUC"}})
// 1.10 - Update a specific restaurant by adding a new review.
// db.resturants.updateOne({_id:ObjectId("639645c22b20fcbfc68c440a")},{$push:{reviews:{date:"1.1.2022",number:3}}})
// 1.11 - Update all restaurants to be kosher
// db.resturants..updateMany({age:kosher},{$set:{age:not kosher}})
// 1.12 - Delete a specific restaurant
// db.teachers.deleteOne({_id:ObjectId("639645c22b20fcbfc68c440a")})
// 1.13 - Delete all restaurants
// db.restaurants.deleteMany({name:{$exists:true}})

// 2. forEach Queries
// use the forEach cursor method to query the following:
// 2.1 - Write a MongoDB query to print all restaurant names.
// db.restaurant.find().forEach(restaurant => printjson(`restaurant name is ${name}`))
// 2.2 - Write a MongoDB query to print all restaurant cities
// db.restaurant.find().forEach(reatsutant => printjson(`restaurant city name is ${adress.city}`))
// 2.3 - Write a MongoDb query to print all restaurant coordinates
// db.restaurant.find().forEach(reatsutant => printjson(`restaurant restaurant coordinates is ${coordinates}`))

// 3. Advanced Queries
// 3.1 - Query for restaurant names that start with a specific
// alphabet
// db.restaurants.find( {name: /^m/}
// 3.2 - Query how many documents you have from the restaurant
// collection.
// db.restaurants.find().count()
// 3.3 - Write a MongoDb query to get restaurants that include
// reviews from a specific date.
// db.restaurants.find( {reviews: /^1.1.2022/})
// 4. Aggregation operations
// use the aggregation framework to query the following:
// 4.1- Write a mongoDb query to display all restaurants average
// score.

// 4.2 - Write a MongoDB query to display a specific restaurant
// average score
