import styled from "styled-components";

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
const Overview = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div``;

const OverviewBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;
const OverviewTitle = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

function Price({ usd }: IPrice) {
  return (
    <div>
      <Overview>
        <OverviewTitle>price changes</OverviewTitle>

        <OverviewBox>
          <OverviewItem>15 minutes</OverviewItem>
          <OverviewItem>{usd?.percent_change_15m} $</OverviewItem>
        </OverviewBox>
        <OverviewBox>
          <OverviewItem>30 minutes</OverviewItem>
          <OverviewItem>{usd?.percent_change_30m} $</OverviewItem>
        </OverviewBox>
        <OverviewBox>
          <OverviewItem>1 hour</OverviewItem>
          <OverviewItem>{usd?.percent_change_1h} $</OverviewItem>
        </OverviewBox>
        <OverviewBox>
          <OverviewItem>6 hour</OverviewItem>
          <OverviewItem>{usd?.percent_change_6h} $</OverviewItem>
        </OverviewBox>
        <OverviewBox>
          <OverviewItem>12 hour</OverviewItem>
          <OverviewItem>{usd?.percent_change_12h} $</OverviewItem>
        </OverviewBox>
        <OverviewBox>
          <OverviewItem>1 day</OverviewItem>
          <OverviewItem>{usd?.percent_change_24h} $</OverviewItem>
        </OverviewBox>
        <OverviewBox>
          <OverviewItem>1 week</OverviewItem>
          <OverviewItem>{usd?.percent_change_7d} $</OverviewItem>
        </OverviewBox>
        <OverviewBox>
          <OverviewItem>1 month</OverviewItem>
          <OverviewItem>{usd?.percent_change_30d} $</OverviewItem>
        </OverviewBox>
        <OverviewBox>
          <OverviewItem>1 year</OverviewItem>
          <OverviewItem>{usd?.percent_change_1y} $</OverviewItem>
        </OverviewBox>
      </Overview>
    </div>
  );
}

export default Price;
