import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import Loader from './../components/Loader';
import Error from './../components/Error';
import { BsClockHistory } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";




const DetailPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const  navigate  = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:4000/api/recipes/${id}`)
      .then((res) => setData(res.data.recipe))
      .catch((err) => setError(err.response.data.message))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = () => {
    if (confirm('are you sure delete?')) {
      axios
        .delete(`http://127.0.0.1:4000/api/recipes/${id}`)
        .then(() => {
          toast.warn('silme işlemi başarılı')
          navigate("/")
        })
        .catch(() => {
          toast.error("işlem gerçekleştirilemedi") })
      
    }
  }

  return (
    <div className="flex-1 bg-gray-200 p-5 h-screen overflow-auto">
      <div className="flex justify-between">
        <Link
          to={-1}
          className="flex items-center gap-10 text-2xl
         hover:bg-gray-300 p-1 rounded-md">
          <AiOutlineRollback />
          geri </Link>
        <button 
        onClick={handleDelete} 
        className=" bg-red-500 flex items-center gap-3 px-4 py-2 rounded-md text-white font-semibold hover:bg-red-600">
          <FaTrashAlt />
          Sil
        </button>
      </div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <div className="max-w-5xl m-auto my-10 flex flex-col gap-10">
          <h1 className="text-3xl font-bold ">
            {data.recipeName}
          </h1>
          <div className="flex">
            <span className=" bg-yellow-500 p-2 rounded-lg text-white font-semibold px-4 ">
              {data.category}
            </span>
            <span className=" flex items-center gap-2 w-20 bg-yellow-500 p-2 rounded-lg text-white font-semibold px-4 mx-4 ">
              <BsClockHistory />

              {data.recipeTime}
            </span>
          </div>
          <img
            className="rounded-lg max-h-[400px]"
            src={data.image} alt={data.recipeName} />
          <div>
            <h1 className="text-3xl font-bold  text-red-500 mb-5">
              malzemeler
            </h1>
            <ul className='font-semibold text-xl'>
              {data.ingredients.map((ingredient) => (
                <li>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-4 text-red-500"> tarif </h1>
            <ol className="font-semibold text-lg list-disc px-4">
              {data.instructions.map((instruction) => (
                <li>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-4 text-red-500">sunum önerisi</h1>
            <p className="font-semibold text-lg px-4">{data.servingSuggestion}</p>
          </div>

        </div>
      )}
    </div>
  )
}

export default DetailPage