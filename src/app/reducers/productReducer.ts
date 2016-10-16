export default function products(products = [], action)
{
  switch (action.type)
  {
    case 'ADD':
      return products.concat([ action.payload ]);
    default:
      return products;
  }
}
