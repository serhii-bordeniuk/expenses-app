import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpenseItem({ description, amount, date }) {
    return (
        <Pressable>
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{date.toString()}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default ExpenseItem;

const { colors } = GlobalStyles;

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: colors.primary500,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 6,
        elevation: 3,
        shadowColor: colors.gray500,
        shadowRadius: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.4,
    },
    textBase: {
        color: colors.primary50,
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: "bold",
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
    },
    amount: {
        color: colors.primary500,
        fontWeight: "bold",
    },
});
