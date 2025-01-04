import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader';
import axios from 'axios';


export default function Categories() {
  const [allCategories, setallCategories] = useState([]);

  async function fetchallCategories() {
    try {
      let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
      console.log(data.data);
      setallCategories(data?.data || []); 
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  }

  useEffect(() => {
    fetchallCategories();
  }, []);

  return (
    <>
     {allCategories.length > 0 ? (
  <div className="mx-auto max-w-[80%] my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
    {allCategories.map((Categorie) => (
      <div
        key={Categorie.id}
        className="shadow group hover:shadow-lg hover:shadow-blue-500 transition-shadow duration-300 rounded-lg overflow-hidden"
      >
        <div className="product px-6">
          <img src={Categorie.image} className="w-full object-cover h-64" alt={Categorie.name} />
          <h4 className="text-3xl  mt-4 text-center text-green-500 font-bold">
            {Categorie.name?.split(' ').slice(0, 2).join(' ')}
          </h4>
        </div>
      </div>
    ))}
  </div>
) : (
  <Loader />
)}

    </>
  );
}
