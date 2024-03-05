import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactSelect from 'react-select/creatable';
import { toast } from 'react-toastify';


const CreatePage = () => {
const [ingredients, setIngredients]=useState([])
const [instructions, setInstructions]=useState([])
const navigate = useNavigate()

    const handleSubmit= (e)=>{
        e.preventDefault()
        const formData= new FormData(e.target)
        let newRecipe= Object.fromEntries(formData.entries())
        newRecipe={
            ...newRecipe, 
            ingredients,
            instructions,
            image:`https://picsum.photos/4${Math.floor(Math.random()*89)+10}`,
        }
        axios
        .post('http://127.0.0.1:4000/api/recipes',newRecipe)
.then(()=>{
    toast.success('Tarif Başarıyla Oluşturuldu');
    navigate('/');
    
})
.catch(() => toast.error('Tarif Oluşturma Başarısız'))
    }
    return (
        <div className=" flex-1 bg-gray-200 p-4 h-screen overflow-auto">
            <form onSubmit={handleSubmit} className="max-w-2xl m-auto my-20 flex flex-col gap-10">
                <h1 className="text-3xl font-bold text-red-400">yeni tarif oluştur</h1>
                <div className="flex flex-col gap-3">
                    <label className="font-semibold"> tarif başlığı</label>
                    <input
                        type="text"
                        name="recipeName"
                        className="rounded-md p-2 focus:outline-red-400"
                        required />

                </div>
                <div className="flex flex-col gap-3">
                    <label className="font-semibold"> tarif kategorisi</label>
                    <input
                        type="text"
                        name="category"
                        className="rounded-md p-2 focus:outline-red-400"
                        required />

                </div>
                <div className="flex flex-col gap-3">
                    <label className="font-semibold"> pişme süresi</label>
                    <input
                        type="number"
                        name="recipeTime"
                        className="rounded-md p-2 focus:outline-red-400"
                        min={10}
                        max={180}
                        required />

                </div>
                <div className="flex flex-col gap-3">
                    <label className="font-semibold"> malzemeler</label>
                    <ReactSelect 
                    onChange={(Options)=>{
                        const refined=Options.map((opt)=>opt.label)
                        setIngredients(refined)
                    }} 
                    isMulti  
                    required
                    />

                </div>
                <div className="flex flex-col gap-3">
                    <label className="font-semibold"> tarif adımları ( sırasına dikat edin )</label>
                    <ReactSelect 
                    onChange={(Options)=>{
                        const refined=Options.map((opt)=>opt.label)
                        setInstructions(refined)
                    }} 
                     isMulti 
                     required
                      />

                </div>
                <div className="flex flex-col gap-3">
                    <label className="font-semibold">sunum önerisi</label>
                    <textarea  
                    required
                    name='servingSuggestion'
                    className='rounded-md p-2 max-h-[150px] min-h-[50px]'>
                    </textarea>
                      

                </div>
                <div className="flex justify-end gap-2">
                
                <Link to={'/'} className=" hover:bg-red-400 bg-red-500 p-2 rounded-lg text-white">iptal et</Link>
                <button type='submit' className=" hover:bg-green-400 bg-green-500 p-2 rounded-lg text-white">onayla</button>
            </div>
            </form>
        </div>
    )
}

export default CreatePage