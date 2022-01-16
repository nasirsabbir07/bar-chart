export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
}) =>
  data.map((d) => (
    <rect
      className="mark"
      key={yValue(d)} // country names
      x={0}
      y={yScale(yValue(d))} //country names, yScale dictates the spacing between the bars
      width={xScale(xValue(d))} //population
      height={yScale.bandwidth()}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </rect>
  ));
