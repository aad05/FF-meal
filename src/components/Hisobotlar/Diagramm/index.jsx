import React, { useState } from "react";
import { Container, Title, Top, Wraper, Buton } from "./style";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Calendars from "../../Generic/Calendar";
const data = [
  {
    name: "Feb 16",
    uv: 700,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb 14",
    uv: 1000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Feb 15",
    uv: 800,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Feb 16",
    uv: 1580,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Feb 17",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Feb 18",
    uv: 2190,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Feb 19",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export const Diagram = () => {
  const [value, onChange] = useState(new Date());
  const [position, setPosition] = useState("none");
  return (
    <Container>
      <Wraper>
        <Top>
          <Title>Yopilgan Zakaz | Barcha Filiallar</Title>
          <Title left="true">13.02.2020 - 19.02.2020</Title>
          <div onClick={() => setPosition("flex")}>
            <Calendars />
          </div>
        </Top>
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart
            data={data}
            margin={{
              top: 30,
              right: 30,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#FA2738"
              fill="#f5818b"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Wraper>
      <div
        style={{
          display: position,
          position: "absolute",
          top: "70px",
          right: "40px",
        }}
      >
        <Calendar width="200" onChange={onChange} value={value} />
        <Buton onClick={() => setPosition("none")}>X</Buton>
      </div>
    </Container>
  );
};
export default Diagram;
