import { Pie, PieChart, Cell, Tooltip, Label } from 'recharts';
import styled from 'styled-components';

const StyledTooltipWrapper = styled.div`
  /* background-color: #000; */
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${props => props.color};
`;

const StyledTooltip = styled.p`
  color: ${props => props.color};
`;

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const color = payload[0]?.payload?.color;
    return (
      <StyledTooltipWrapper color={color}>
        <StyledTooltip color={color}>{`${payload[0].name} : ${payload[0].value}`}</StyledTooltip>
        <StyledTooltip color={color}>Anything you want can be displayed here.</StyledTooltip>
      </StyledTooltipWrapper>
    );
  }

  return null;
};

const Chart = ({ data }) => {
  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={400}
        cy={200}
        innerRadius={104}
        outerRadius={144}
        fill="#8884d8"
        // paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
        <Label value="any text" position="center" />
      </Pie>

      <Tooltip content={<CustomTooltip />} offset={20} />
    </PieChart>
  );
};

export default Chart;
