const f = () => {
  const x = (a, b) => (a + b);
  const y = Math.floor(Math.random() * 100);
  const z = 3;

  return [x, y, z];
};

const [qw, re, tr] = f();

console.log(re);