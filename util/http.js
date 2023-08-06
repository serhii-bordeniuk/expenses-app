import axios from "axios";

const BACKEND_URL =
    "https://react-native-expenses-ap-974f9-default-rtdb.europe-west1.firebasedatabase.app";

export async function storeExpense(expenseData) {
    const response = await axios.post(`${BACKEND_URL}/expenses.json`, expenseData);
    const id = response.data.name; // the property which in firebase holds the generated id
    return id;
}

export async function fetchExpenses() {
    const response = await axios.get(`${BACKEND_URL}/expenses.json`);

    const expenses = [];

    for (const key in response.data) {
        //transformation data from firebase to an array
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description,
        };
        expenses.push(expenseObj);
    }

    return expenses;
}

export function updateExpense(id, expenseData) {
    return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
    return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
