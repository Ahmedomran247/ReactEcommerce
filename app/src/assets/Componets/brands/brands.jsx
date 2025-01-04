import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader'



export default function Brands() {
  const [allBrands, setAllBrands] = useState([]);

  async function fetchAllBrands() {
    try {
      let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/brands');
      console.log(data.data);
      setAllBrands(data?.data || []); 
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  }

  useEffect(() => {
    fetchAllBrands();
  }, []);

  return (
    <>
      {allBrands.length > 0 ? (
        <div className="py-10 flex flex-wrap">
          {allBrands.map((brand) => (
            <div key={brand.id} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/6">
              <div className="product px-6 py-10 group">
                <img src={brand.image} className="w-full" alt={brand.title} />
                <h3 className="text-xl font-normal">
                  {brand.title?.split(' ').slice(0, 2).join(' ')}
                </h3>
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
