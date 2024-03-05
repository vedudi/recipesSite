import { BsHourglassSplit } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Card = ({ recipe }) => {
    return (
        <Link to={`/tarif/${recipe.id}`} className="bg-white rounded-xl p-10">
            <div className="mainn relative ">
                <img className="h-[150px] object-cover w-full rounded-3xl " src={recipe.image} alt="" />
                <p className="absolute bottom-1 left-1 flex bg-white rounded-lg p-1 font-semibold items-center gap-1"> 
                    <i>
                        <BsHourglassSplit />
                    </i>
                    <span>{recipe.recipeTime} minutes</span>
                </p>
            </div>
            <h2 className="font-semibold text-xl my-3">{recipe.recipeName}</h2>
            <p className="text-gray-500">{recipe.category}</p>
            <p className=" flex gap-3 bg-gray-200 rounded-md p-2 mt-3 ">
                <span className="line-clamp-1">{recipe.ingredients[0]}</span>
                <span className="line-clamp-1">{recipe.ingredients[1]}</span>
            </p>
        </Link>
    )
}

export default Card