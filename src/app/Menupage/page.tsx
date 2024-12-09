import React from 'react';
import Image from 'next/image'; 
import Footer from '../Components/Footer';
import { IoChevronForwardOutline} from "react-icons/io5";
import Navbar from '../Components/Navbar';


const Menu = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="relative bg-black w-full ">
        {/* Background Image */}
        <div className="h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center relative">
          <Image
            src="/starbg.png"
            alt="Header Image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <Navbar/>
          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Our Menu</h1>
            <p className="text-sm md:text-base lg:text-lg mt-2 flex items-center gap-2">
              <span className="text-white">Home</span>
              <IoChevronForwardOutline />
              <span className="text-[#FF9F0D]">Menu</span>
            </p>
          </div>
        </div>
      </header>

      {/* Starter Menu */}
      <section className="w-full max-w-4xl my-12 px-4 flex flex-col md:flex-row gap-8 items-center">
        <Image
          src="/star1.png"
          alt="Starter Menu"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">Starter Menu</h2>
          <ul className="text-gray-600 space-y-4">
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Alder Grilled Chinook Salmon</h3>
              <p className="text-sm">Toasted French bread topped with romano, cheddar</p>
              <p className="text-xs text-gray-500">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">32$</span>
          </li>
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Berries and Creme Tart</h3>
              <p className="text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className="text-xs text-gray-500">700 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">43$</span>
          </li>
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Tormentoso Bush Pizza Pintage</h3>
              <p className="text-sm">Ground cumin, avocado, peeled and cubed</p>
              <p className="text-xs text-gray-500">1000 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">14$</span>
          </li>
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Spicy Vegan Potato Curry</h3>
              <p className="text-sm">Spreadable cream cheese, crumbled blue cheese</p>
              <p className="text-xs text-gray-500">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">35$</span>
          </li>
        </ul>
         
        </div>
      </section>

      {/* Main Course */}
      <section className="w-full max-w-4xl my-12 px-4 flex flex-col md:flex-row gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">Main Course</h2>
          <ul className="text-gray-600 space-y-4">
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Optic Big Breakfast Combo Menu</h3>
              <p className="text-sm">Toasted French bread topped with romano, cheddar</p>
              <p className="text-xs text-gray-500">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">32$</span>
          </li>
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Cashew Chicken With Stir-Fry</h3>
              <p className="text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className="text-xs text-gray-500">700 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">43$</span>
          </li>
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Vegetables & Green Salad</h3>
              <p className="text-sm">Ground cumin, avocado, peeled and cubed</p>
              <p className="text-xs text-gray-500">1000 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">14$</span>
          </li>
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Spicy Vegan Potato Curry</h3>
              <p className="text-sm">Spreadable cream cheese, crumbled blue cheese</p>
              <p className="text-xs text-gray-500">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">35$</span>
          </li>
        </ul>
        </div>
        <Image
          src="/cheezburger.png"
          alt="Main Course"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </section>

      <div className="text-white  w-full bg-cover bg-center relative flex flex-col md:flex-row md:m-[80px] md:mt-[160px]"  style={{ backgroundImage: "url('/star1.png')" }} 
      >
        <div className="flex flex-col">
         <div className="md:ml-[135px]">
          <Image src='/cap.png' alt="cap-pic" height={120} width={120}/>
         </div>
         <p className="md:w-[218px] md:h-[32px] font-bold text-[24px] leading-[32px] text-[#FFFFFF] md:ml-[100px] md:my-6">Professional Chefs</p>
         <p className="md:w-[67px] md:h-[48px] font-bold text-[40px] leading-[48px] text-[#FFFFFF] md:ml-[165px]">420</p>
        </div>
        <div className="flex flex-col">
         <div className="md:ml-[135px]">
          <Image src='/juice.png' alt="cap-pic" height={120} width={120}/>
         </div>
         <p className="md:w-[218px] md:h-[32px] font-bold text-[24px] leading-[32px] text-[#FFFFFF] md:ml-[100px] md:my-6">Professional Chefs</p>
         <p className="md:w-[67px] md:h-[48px] font-bold text-[40px] leading-[48px] text-[#FFFFFF] md:ml-[165px]">420</p>
        </div>
        <div className="flex flex-col">
         <div className="md:ml-[135px]">
          <Image src='/spoon.png' alt="cap-pic" height={120} width={120}/>
         </div>
         <p className="md:w-[218px] md:h-[32px] font-bold text-[24px] leading-[32px] text-[#FFFFFF] md:ml-[100px] md:my-6">Professional Chefs</p>
         <p className="md:w-[67px] md:h-[48px] font-bold text-[40px] leading-[48px] text-[#FFFFFF] md:ml-[165px]">420</p>
        </div>
        <div className="flex flex-col ">
         <div className="md:ml-[135px]">
          <Image src='/pizza.png' alt="cap-pic" height={120} width={120}/>
         </div>
         <p className="md:w-[218px] md:h-[32px] font-bold text-[24px] leading-[32px] text-[#FFFFFF] md:ml-[100px] md:my-6">Professional Chefs</p>
         <p className="md:w-[67px] md:h-[48px] font-bold text-[40px] leading-[48px] text-[#FFFFFF] md:ml-[165px]">420</p>
        </div>
       
       </div>

      {/* Dessert */}
      <section className="w-full max-w-4xl my-12 px-4 flex flex-col md:flex-row gap-8 items-center">
        <Image
          src="/icecream.png"
          alt="Dessert"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">Dessert</h2>
          <ul className="text-gray-600 space-y-4">
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Fig and Lemon Cake</h3>
              <p className="text-sm">Toasted French bread topped with romano, cheddar</p>
              <p className="text-xs text-gray-500">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">32$</span>
          </li>
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Creamy Mascarpone Cake</h3>
              <p className="text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className="text-xs text-gray-500">700 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">43$</span>
          </li>
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Pastry, Blueberries, Lemon Juice</h3>
              <p className="text-sm">Ground cumin, avocado, peeled and cubed</p>
              <p className="text-xs text-gray-500">1000 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">14$</span>
          </li>
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Pain au Chocolat</h3>
              <p className="text-sm">Spreadable cream cheese, crumbled blue cheese</p>
              <p className="text-xs text-gray-500">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">35$</span>
          </li>
        </ul>
        </div>
      </section>

      {/* Drinks */}
      <section className="w-full max-w-4xl my-12 px-4 flex flex-col md:flex-row gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-4">Drinks</h2>
          <ul className="text-gray-600 space-y-4">
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Caffè Macchiato</h3>
              <p className="text-sm">Toasted French bread topped with romano, cheddar</p>
              <p className="text-xs text-gray-500">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">32$</span>
          </li>
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Aperol Spritz Cappuccino</h3>
              <p className="text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className="text-xs text-gray-500">700 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">43$</span>
          </li>
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Caffè Latte Campuri</h3>
              <p className="text-sm">Ground cumin, avocado, peeled and cubed</p>
              <p className="text-xs text-gray-500">1000 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">14$</span>
          </li>
          <li className="flex justify-between">
            <div>
              <h3 className="font-bold">Tormentoso Bush Tea Pintage</h3>
              <p className="text-sm">Spreadable cream cheese, crumbled blue cheese</p>
              <p className="text-xs text-gray-500">560 CAL</p>
            </div>
            <span className="text-orange-500 font-bold">35$</span>
          </li>
        </ul>
        </div>
        <Image
          src="/drink.png"
          alt="Drinks"
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </section>
      <Footer />
    </div>
  );
};

export default Menu;