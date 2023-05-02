const CURRENCY = new Intl.NumberFormat(undefined, {
  currency: "CAD",
  style: "currency"
});
const currency = (number: number) => {
  return CURRENCY.format(number);
};
export default currency;
