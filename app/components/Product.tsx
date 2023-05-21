import React from 'react';
import Image from 'next/image';
import formatPrice from '@/util/PriceFormat';
import { ProductType } from '@/types/ProductTypes';
const Product = ({ name, image, price }: ProductType) => {
  return (
    <div className="text-gray-700">
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="w-full h-95 object-cover rounded-lg"
      />
      <h1 className="font-medium py-2">
        {name}
      </h1>
      <h2 className="text-sm">
        {price && formatPrice(price)}
      </h2>
    </div>
  );
};

export default Product;
