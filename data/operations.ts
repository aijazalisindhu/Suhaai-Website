// Figures confirmed by the Suhaai team for November 2026.
export const reportingPeriod = "November 2026";
export const monthlyExpenses = [
  { label: "Teachers' salaries", quantity: 4, unitCost: 30000 },
  { label: "Junior teacher (Sindhi & primary Science)", quantity: 1, unitCost: 10000 },
  { label: "Assistant teachers", quantity: 2, unitCost: 3000 },
  { label: "Cleaning support", quantity: 1, unitCost: 5000 },
  { label: "Security / caretaker", quantity: 1, unitCost: 15000 },
  { label: "Student transport", quantity: 3, unitCost: 18500 },
  { label: "Teacher transport", quantity: 1, unitCost: 18500 },
  { label: "Stationery & notebooks", quantity: 1, unitCost: 15000 },
  { label: "Student support & prizes", quantity: 1, unitCost: 5000 },
  { label: "Repairs & maintenance", quantity: 1, unitCost: 5000 }
];
export const monthlyExpenseTotal = monthlyExpenses.reduce(
  (total, expense) => total + expense.quantity * expense.unitCost, 0
);
export const formatPKR = (amount: number) => `PKR ${amount.toLocaleString("en-PK")}`;
export const teachingTeam = [
  "2 English teachers", "1 Mathematics & Physics teacher",
  "1 Biology & Chemistry teacher", "1 junior teacher for Sindhi & Science for younger children", "2 assistant teachers"
];
export const contactHours = {
  visits: "Monday–Friday, 3:00 PM–5:00 PM",
  replies: "Monday–Sunday, 9:00 AM–9:00 PM",
  timezone: "Pakistan Standard Time (UTC+5)"
};
