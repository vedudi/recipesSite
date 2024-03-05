import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { GiCook } from "react-icons/gi";



const Sidebar = () => {
    return (
        <div className=" sidebar max-md:justify-normal max-md:gap-20 max-md:p-1 p-3 flex flex-col h-screen justify-between items-center lg:p-3 ">
            <img className="w-[150px] max-md:w-[75px]" src="./recipe-logo.jpg" alt="" />
            <div className=" flex flex-col gap-20">
                <NavLink
                    to={'/'}
                    className="text-gray-400 flex gap-4 items-center text-lg">
                    <IoHomeOutline className="max-md:text-3xl" />

                    <span className="max-md:hidden">anasayfa</span>
                </NavLink>
                <NavLink
                    to={'/ekle'}
                    className="text-gray-400 flex gap-4 items-center text-lg">
                    <GiCook className="max-md:text-3xl" />

                    <span className="max-md:hidden">tarif oluştur</span>
                </NavLink>
                <NavLink
                    to={'/discover'}
                    className="text-gray-400 flex gap-4 items-center text-lg">
                    <MdOutlineExplore className="max-md:text-3xl" />

                    <span className="max-md:hidden">keşfet</span>
                </NavLink>
                <NavLink
                    to={'/likes'}
                    className="text-gray-400 flex gap-4 items-center text-lg">
                    <FaRegHeart className="max-md:text-3xl" />


                    <span className="max-md:hidden">favoriler</span>
                </NavLink>
                <NavLink
                    to={'/settings'}
                    className="text-gray-400 flex gap-4 items-center text-lg">
                    <FaHandsHelping className="max-md:text-3xl" />



                    <span className="max-md:hidden">yardım</span>
                </NavLink>
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-semibold max-md:hidden">günlük haberleri al</p>
                <button className="max-md:hidden hover:bg-red-400 bg-red-500 p-2 rounded-lg text-white">abone ol</button>
            </div>
        </div>
    )
}

export default Sidebar