import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import Loader from "../components/Loader";
import Card from "../components/Card";
import Error from "../components/Error";
import { useDebounce } from "@uidotdev/usehooks";



const MainPage = () => {
  const [data, setData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [order, setOrder] = useState(null);
  const debouncedTerm = useDebounce(searchTerm, 300);


  useEffect(() => {
    setIsLoading(true);
    const params = {
      title: debouncedTerm,
      order: order,
    }
    axios
      .get(`http://127.0.0.1:4000/api/recipes`, { params })
      .then((res) => {
        setData(res.data);
        setErrorMsg(null)
      })
      .catch(err => setErrorMsg(err.message))
      .finally(() => setIsLoading(false))
  }, [debouncedTerm, order]);



  console.log(debouncedTerm);

  return (

    <main className=" flex-1 bg-gray-200 p-4 h-screen overflow-auto">
      <section className="">
        <div className="bg-white flex gap-3 p-2 rounded-lg overflow-hidden items-center shadow-lg ">
          <CiSearch className="text-xl" />

          <input onChange={(e) => setSearchTerm(e.target.value)} className="w-full outline-none" type="text" />

        </div>

      </section>
      <section className="mt-5">

        {
          isLoading ? (<Loader />) : errorMsg ? (<Error message={errorMsg} />) :
            (<>

              <div className="flex justify-between items-center ">
                <h1 className="text-3xl my-8">{data.results} recipes</h1>

                <select
                value={order}
                  onChange={(e) => setOrder(e.target.value)}
                  className=" bg-gray-200 rounded-md p-2">
                  <option selected disabled >süreye göre</option>
                  <option value={'asc'}  >Artan </option>
                  <option value={'desc'}  >Azalan </option>
                </select>
              </div>


              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
                {
                  data.recipes.map((recipe) => (
                    <Card key={recipe.id} recipe={recipe} />
                  ))
                }
              </div>

            </>)
        }
      </section>

    </main>

  )
}

export default MainPage