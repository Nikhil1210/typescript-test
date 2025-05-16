You •
/**
 * The function formatQuantity takes one argument:
 *  - quantity a number to format
 *
 * It should convert the quantity to a String with a unit suffix
 * that fulfills the test cases in test/spec/quantity.spec.jsx
 */
export const formatQuantity = quantity => {
    if (!quantity || typeof quantity === 'string') {
        return ''
    } else if (quantity >= 1000000000 || quantity <= -1000000000) {
        return quantity / 1000000000 + 'B'
    } else if (quantity >= 1000000 || quantity <= -1000000) {
        return quantity / 1000000 + 'M'
    } else if (quantity >= 1000 || quantity <= -1000) {
        return quantity / 1000 + 'K'
    } else {
        return String(quantity)
    }
}