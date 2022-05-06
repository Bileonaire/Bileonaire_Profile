import React, { useEffect } from "react";
import apiCall from "../../utils/api";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import Trade from "../../components/Trade";

const Trades = ({ trades }) => {
  const [cookies, setCookies, removeCookies] = useCookies(["user"]);
  const router = useRouter();

  useEffect(() => {
    if (!cookies.user) router.push("/");
  });

  return (
    <>
      {trades.map((trade) => (
        <Trade key={trade.id} id={trade.id}
            trade={trade}
        />
      ))}
    </>
  );
};

export default Trades;

export async function getServerSideProps(ctx) {
  let trades = [];
  try {
    const token = JSON.parse(ctx.req.cookies.user).accessToken;
    const tradeData = await apiCall("get", "/trades/user", {}, token);
    if (tradeData) trades = tradeData.data;
  } catch (e) {
    console.log(e.message);
  }

  return {
    props: {
      trades: trades || [],
    },
  };
}
