import React from 'react';
import Image from 'next/image';
import formatPrice from '@/util/PriceFormat';
import { ProductType } from '@/types/ProductTypes';
const Product = ({ name, image, price }: ProductType) => {
  return (
    <div>
      <Image src={image} alt={name} width={400} height={400} />
      <h2>
        {name}
      </h2>
      <p>
        {formatPrice(price as number)}
      </p>
    </div>
  );
};

export default Product;
