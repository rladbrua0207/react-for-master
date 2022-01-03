import { useParams } from "react-router-dom";

function Coin() {
  const params = useParams().coinId;
  console.log(params);
  return <h1>Coin: {params}</h1>;
}

export default Coin;
