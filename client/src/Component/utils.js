function formatCurrency(amount) {
    const formattedIncome = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
    return formattedIncome;
}
export {formatCurrency}