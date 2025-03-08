const addButton = document.querySelector(`.add-button`);
const categoryOptions = document.querySelector(`#category-options`);
const expenseName = document.querySelector(`#expense-name`);
const amount = document.querySelector(`#amount`);
const tableBody = document.querySelector(`tbody`);
const total = document.querySelector(".total");
const categoryFilter = document.querySelector("#category-filter");

const expenseCategories = [
  "Groceries",
  "Transportation",
  "Health",
  "Education",
];
const expenses = JSON.parse(localStorage.getItem(`expenses`)) || {};
let filteredExpenses = expenses;

const updateTotal = () => {
  total.innerText =
    Object.values(filteredExpenses).reduce(
      (acc, curr) => acc + +curr.amount,
      0
    ) || 0;
};

categoryFilter.addEventListener("change", (event) => {
  filteredExpenses = Object.entries(expenses).reduce((acc, [key, value]) => {
    if (event.target.selectedIndex === 0) {
      acc[key] = value;
    } else if (event.target.selectedIndex === value.categoryId + 1) {
      acc[key] = value;
    }
    return acc;
  }, {});
  renderExpenses(filteredExpenses);
  updateTotal();
});

const renderExpenses = (filteredExpenses) => {
  tableBody.innerHTML = "";
  for (const [key, value] of Object.entries(filteredExpenses)) {
    const tr = document.createElement("tr");
    const category = document.createElement("td");
    category.innerText = expenseCategories[value.categoryId];

    const expense = document.createElement("td");
    expense.innerText = value.expense;

    const amountData = document.createElement("td");
    amountData.innerText = value.amount;

    const action = document.createElement("td");
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.addEventListener("click", () => {
      tr.remove();
      delete expenses[key];
      localStorage.setItem(`expenses`, JSON.stringify(expenses));
      updateTotal();
    });

    action.appendChild(button);
    tr.appendChild(category);
    tr.appendChild(expense);
    tr.appendChild(amountData);
    tr.appendChild(action);
    tableBody.appendChild(tr);
  }
};
renderExpenses(filteredExpenses);
updateTotal();

const selectOptions = document.querySelector(`#category-options`);
expenseCategories.forEach((category, i) => {
  const option = document.createElement(`option`);
  option.value = i;
  option.innerText = category;
  selectOptions.appendChild(option);
  categoryFilter.appendChild(option.cloneNode(true));
});

addButton.addEventListener("click", () => {
  const id = crypto.randomUUID();
  const tr = document.createElement("tr");
  const category = document.createElement("td");
  category.innerText = expenseCategories[categoryOptions.selectedIndex];

  const expense = document.createElement("td");
  expense.innerText = expenseName.value;
  expenseName.value = "";

  const amountData = document.createElement("td");
  amountData.innerText = amount.value;
  amount.value = "";

  const action = document.createElement("td");
  const button = document.createElement("button");
  button.innerText = "Delete";
  button.addEventListener("click", () => {
    tr.remove();
    delete expenses[id];
    localStorage.setItem(`expenses`, JSON.stringify(expenses));
    updateTotal();
  });

  action.appendChild(button);
  tr.appendChild(category);
  tr.appendChild(expense);
  tr.appendChild(amountData);
  tr.appendChild(action);
  tableBody.appendChild(tr);

  expenses[id] = {
    categoryId: categoryOptions.selectedIndex,
    expense: expense.innerText,
    amount: amountData.innerText,
  };
  updateTotal();
  localStorage.setItem(`expenses`, JSON.stringify(expenses));
});
