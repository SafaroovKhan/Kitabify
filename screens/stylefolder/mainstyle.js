import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    androidsafearea: {
        flex: 1,
        backgroundColor: "#EDE0D4",
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    homeScreenBackground: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -10
    },
    text: {
        fontSize: 24,
        color: "#4E413B", 
    },
    brandtext: {
        fontSize: 40,
        color: "#4E413B",
    },
    loadingscreen:{
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loadingbackgroundimg: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0
    },
    loadinglogo: {
        width: 250,
        height: 250,
    },
    subScreen: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FF9900",
    },
    subScreenTop: {
        width: "100%",
        marginTop: 40,
        alignItems: "flex-end",
    },
    subContent: {
        width: "100%",
        flex:1,
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 30,
        gap: 80
    },
    subText: {
        fontSize: 40,
        color: "#fff",
        fontWeight: "bold",
        marginRight: 30, 
        marginLeft: 30,
        textAlign: "center"
    },
    subFigure: {
        width: "100%",
        height: 180
    },
    subAbsoTextOne: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold",
        textAlign:"center",
        position: "absolute",
        top: 330,
        left: 60
    },
    subAbsoTextTwo: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold",
        textAlign:"center",
        position: "absolute",
        top: 170,
        right: 40
    },
    subButtonBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        gap: 15
    },
    subAltTextOne: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        textContent: "center"
    },
    subButton: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#000000",
        backgroundColor: "#FDDAA4",
        borderRadius: 20,
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:30,
        paddingRight:30,
    },
    subAltTextTwo: {
        fontSize: 18,
        color: "#fff",
        textDecorationLine: "underline"
    },

    icon: {
        color: "#FAFAFA",
    },
    homescreentop: {
        flexDirection: "row",
        alignItems: "center",
        height: 100,
        justifyContent: "center",
        marginTop: 20
    },
    topsection: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginLeft: 40
    },
    profilecircle: {
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF6D24",
        borderRadius: 20,
        marginLeft: 20
    },
    profileimg: {
        width: 50,
        height: 50,
        borderRadius: 20
    },
    topheadertext: {
        fontSize: 40,
        fontWeight: 500,
        color: "#000",
    },
    genrecontainer: {
        width: "auto",
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    genrebtn: {
        fontSize: 24,
        backgroundColor: "#FF9900",
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 15,
        paddingLeft: 15,
        marginRight: 10,
        elevation: 1,
    },
    genretxt: {
        fontSize: 20,
        color: "#FAFAFA"
    },
    fullbar: {
        width: 350,
        height: 60,
        borderRadius: 20,
        backgroundColor: "#FF9900",
        elevation: 3,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        position: "absolute",
        bottom: 30,
        right: 20
    },
    bookssection: {
        width: "100%",
        height: "auto",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 2,
        gap: 20,
        paddingTop: 10,
    },
    booktextbox: {
        width: "100%",
        height: "auto",
        paddingLeft: 20,
        paddingRight: 20
    },
    booktext: {
        fontSize: 30,
        borderBottomWidth: 3,
        borderBottomColor: "#FF9900",
        color: "#000",
    },
    booksrow: {
        gap: 40
    },
    bookpreview: {
        width: 160,
        height: 250,
        borderRadius: 20,
        backgroundColor: "#FF6D24",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        elevation: 3
    },
    bookpreviewcover: {
        width: 160,
        height: 250,
        borderRadius: 20
    },
    bookpage: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    bookpagecoverbox: {
        width: "100%",
        height: "70%",
        backgroundColor: "#F0F0F0",
        alignItems: "center",
        justifyContent: "center"
    },
    bookcoverpage: {
        width: 300,
        height: 420,
        elevation: 3,
        borderRadius: 20
    },
    bookpageplayerbox: {
        width: "100%",
        height: 227,
    },
    playerbox: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 35,
        marginTop: 20
    },
    playericonbox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
        borderRadius: 1000,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        gap: 55,
    },
    playerslider: {
        width: 300,
        height: 40,
    },
    playericon: {
        color: "#fafafa"
    },
    searcbarscreen: {
        width: "100%",
        height: "auto",
    },
    searchbarbox: {
        witdh: "100%",
        height: 100,
        alignContent: "center",
        justifyContent: "center"
    },
    genreSearchBox: {
        width: "100%",
        marginTop: 30,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    genreRow: {
        gap: 30,
        marginBottom: 10
    },
    genreBoxBtn: {
        width: 150,
        height: 100,
        borderRadius: 15,
        padding: 10,
        backgroundColor: "#FF9900",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    genreBoxBtnText: {
        fontSize: 28,
        color: "#fff",
    }


    
})