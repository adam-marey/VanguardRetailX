import React from 'react';
import Image from 'next/image';
import formatPrice from '@/util/PriceFormat';
import { ProductType } from '@/types/ProductTypes';
import Link from 'next/link';
const Product = ({
  name,
  image,
  unit_amount,
  id,
  description
}: ProductType) => {
  return (
    <div className="text-gray-700">
      <Link
        href={{
          pathname: `/prodcut/${id}`,
          query: { name, image, unit_amount, id, description }
        }}
      >
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="w-full h-95 object-cover rounded-lg"
        />
      </Link>
      <h1 className="font-medium py-2">
        {name}
      </h1>
      <h2 className="text-sm">
        {unit_amount && formatPrice(unit_amount)}
      </h2>
    </div>
  );
};

export default Product;
