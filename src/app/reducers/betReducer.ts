export default function bets(bets = [], action)
{
  console.log(action)
  switch (action.type)
  {
    case 'ADD':
      return bets.concat([ action.bet ])
    default:
      return bets
  }
}
