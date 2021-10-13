import React from "react";
import { Container, Title, Top, Wraper } from "./style";
import { LineChart, Line, ResponsiveContainer } from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2300,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 2500,
    amt: 2200,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 2200,
    amt: 2200,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3008,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1500,
    pv: 3800,
    amt: 2100,
  },
  {
    name: "Page F",
    uv: 2300,
    pv: 1800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3400,
    pv: 4300,
    amt: 2100,
  },
];
export const Diagram = () => {
  return (
    <Container>
      <Wraper>
        <Top>
          <Title>Yopilgan Zakaz | Barcha Filiallar</Title>
          <Title left="true">13.02.2020 - 19.02.2020</Title>
        </Top>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={300} height={100} data={data}>
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Wraper>
    </Container>
  );
};
export default Diagram;
