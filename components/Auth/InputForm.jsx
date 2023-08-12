import { View, Text, TextInput, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

function FormInput({ label, keyboardType, secure, onUpdateValue, value, isInvalid }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.label, isInvalid && styles.labelInvalid]}>{label}</Text>
            <TextInput
                style={[styles.input, isInvalid && styles.inputInvalid]}
                autoCapitalize="none"
                keyboardType={keyboardType}
                secureTextEntry={secure}
                onChangeText={onUpdateValue}
                value={value}
            />
        </View>
    );
}

export default FormInput;

const { colors } = GlobalStyles;

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
    },
    label: {
        color: "white",
        marginBottom: 4,
    },
    labelInvalid: {
        color: colors.error500,
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        backgroundColor: colors.primary50,
        borderRadius: 4,
        fontSize: 16,
    },
    inputInvalid: {
        backgroundColor: colors.error50,
    },
});
