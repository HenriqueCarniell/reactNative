import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 24,
    },
    eventName: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 48,
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        marginRight: 12,

    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFF',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
        
    },
})

export default Styles