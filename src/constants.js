export const yAxes = [];
for (let y = 0; y < 50; y += 1) {
  yAxes.push(`y${y}`);
}

export const yAxesMini = yAxes.slice(0, 10);

export const dataMini = [];
for (let x = 0, xz = 10; x < xz; x += 1) {
  const d = { x };
  yAxes.forEach((yAxis, y) => {
    d[yAxis] = Math.sin(2 * Math.PI / xz * x) + Math.cos(x * y) / (yAxes.length - y + 1) / 10;
  });
  dataMini.push(d);
}

export const data = [];
for (let x = 0, xz = 2000; x < xz; x += 1) {
  const d = { x };
  yAxes.forEach((yAxis, y) => {
    d[yAxis] = 1E100 * (Math.sin(2 * Math.PI / xz * x) + Math.cos(x * y) / (yAxes.length - y + 1) / 10);
  });
  data.push(d);
}
