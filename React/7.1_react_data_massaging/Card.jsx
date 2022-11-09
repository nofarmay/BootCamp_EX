import React from "react";

function Card({ person }) {
  // console.log(person.favoriteFood.meats);
  const { meats, fish } = person.favoriteFoods;
  return (
    <div className="card">
      <h3>name: {person.name}</h3>
      <h3>birthday: {person.birthday}</h3>
      <h3>favorite meats:{meats}</h3>
      <h3>favorite fish:{fish}</h3>
    </div>
  );
}

export default Card;
