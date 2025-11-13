import { Client, Account, ID } from "appwrite";
import Config from "react-native-config";
// import { AppWriteContext } from "./AppwriteContext";
// import { useContext } from "react";



const endPoint='https://fra.cloud.appwrite.io/v1';
const projectId='6911d5c100104f42a1bb'

console.log(endPoint,projectId,Config.APPWRITE_ENDPOINT)


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
        console.log(name,email,password)
        try {
            const user = await this.account.create({
                userId: ID.unique(),
                email,
                password,
                name
            });
            console.log(user)
            if(user){
                return this.login({email,password})
            }
        } catch (e) {
            console.error(e)
        }
    }
    async login({ email, password }: login) {
        try {
            return await this.account.createEmailPasswordSession({
                email,
                password
            });
        } catch (e) {
            console.error(e)
        }
    }
     async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (e) {
            console.error(e)
        }
    }
    async loginOut() {
        try {
            return await this.account.deleteSession('current');//Todo check here 
        } catch (e) {
            console.error("Check in logout current keyword that we passed",e)
        }
    }
}

export default AuthService