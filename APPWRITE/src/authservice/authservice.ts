import { Client, Account, ID } from "appwrite";
import Config from "react-native-config";
import Snackbar from "react-native-snackbar";
// import { AppWriteContext } from "./AppwriteContext";
// import { useContext } from "react";



const endPoint = 'https://fra.cloud.appwrite.io/v1';
const projectId = '6911d5c100104f42a1bb'

console.log(endPoint, projectId, Config.APPWRITE_ENDPOINT)


const client = new Client()

type createaccount = {
    email: string,
    name: string,
    password: string
}
type login = {
    email: string,
    password: string
}

class AuthService {
    account;
    constructor() {
        client
            .setProject(projectId)
            .setEndpoint(endPoint);
        this.account = new Account(client);
    }

    async createNewUser({ name, email, password }: createaccount) {
        // const {isLoggedin,setisLoggedin,appWrite}=useContext(AppWriteContext)
        console.log(name, email, password)
        try {
            const user = await this.account.create({
                userId: ID.unique(),
                email,
                password,
                name
            });
            if (user) {
                Snackbar.show({
                    text: 'Account Created Successfully',
                    duration: Snackbar.LENGTH_SHORT,
                    textColor:"#000",
                    backgroundColor:"#34e642ff"
                });
                return this.login({ email, password })
            }
        } catch (error) {
            // Snackbar.show({
            //         text: error,
            //         duration: Snackbar.LENGTH_SHORT,
            //         textColor:"#000",
            //         backgroundColor:"#34e642ff"
            //     });
            console.log(error)
        }
    }
    async login({ email, password }: login) {
        try {
            return await this.account.createEmailPasswordSession({
                email,
                password
            });
        } catch (e) {
             Snackbar.show({
                    text: 'The email or password you entered is incorrect. Please try again.',
                    duration: Snackbar.LENGTH_SHORT,
                    textColor:"#efefefff",
                    backgroundColor:"#bb2929ff"
                });
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (e) {
            // Snackbar.show({
            //         text: 'Login Please',
            //         duration: Snackbar.LENGTH_SHORT,
            //         textColor:"#f0ededff",
            //         backgroundColor:"#bd3232ff"
            //     });
        }
    }
    async loginOut() {
        try {
            return await this.account.deleteSession('current');//Todo check here 
        } catch (e) {
           Snackbar.show({
                    text: 'Somthing Went Wrong Whlie LogOut',
                    duration: Snackbar.LENGTH_SHORT,
                    textColor:"#f0ededff",
                    backgroundColor:"#bd3232ff"
                });
        }
    }
}

export default AuthService