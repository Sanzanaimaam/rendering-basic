import React from 'react';

const FoodDetailsPage = async ({params}) => {
    const {foodId}=await params
    const res= await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`)
    const data=await res.json()
    const {dish_name, origin_and_popularity}=data.data

    return (
        <div>
            <h2>Food Details :{foodId}</h2>
            <h3> {dish_name}</h3>
            <h3>{origin_and_popularity}</h3>
        </div>
    );
};

export default FoodDetailsPage;