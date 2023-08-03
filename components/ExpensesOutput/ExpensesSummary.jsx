import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({ expenses, periodName }) {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
        </View>
    );
}

export default ExpensesSummary;

const { colors } = GlobalStyles;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: colors.primary50,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    period: {
        fontSize: 12,
        color: colors.primary400,
    },
    sum: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.primary500,
    },
});
