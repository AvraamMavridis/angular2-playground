export default function products(products = [], action)
{
  switch (action.type)
  {
    case 'ADD':
      return products.concat([ action.product ]);
    default:
      return products;
  }
}
