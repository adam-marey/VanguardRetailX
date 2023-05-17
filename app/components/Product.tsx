import React from 'react';
import Image from 'next/image';
const Product = ({ name, image, price }) => {
  return (
    <div>
      <Image src={image} alt={name} width={400} height={400} />
      <h2>
        {name}
      </h2>
      <p>
        $ {price}
      </p>
    </div>
  );
};

export default Product;
