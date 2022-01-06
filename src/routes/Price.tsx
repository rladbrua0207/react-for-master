interface IExchange {
  ath_date: string;
  ath_price: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_1h: number;
  percent_change_1y: number;
  percent_change_6h: number;
  percent_change_7d: number;
  percent_change_12h: number;
  percent_change_15m: number;
  percent_change_24h: number;
  percent_change_30d: number;
  percent_change_30m: number;
  percent_from_price_ath: number;
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
}

interface IPrice {
  [exchange: string]: IExchange | undefined;
}
//usd를 키값으로 갖고,IExchange인터페이스를 value로 가지고있는 객체
function Price({ usd }: IPrice) {
  return <h1>{usd?.percent_change_1y}</h1>;
}

export default Price;
