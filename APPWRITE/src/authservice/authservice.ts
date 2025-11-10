import { Client, Account, ID } from "appwrite";
import Config from "react-native-config";


const endPoint: string = Config.APIEndpoint!;
const projectId: string = Config.APIEndpoint!;


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
    constructor(name: string) {
        client
            .setProject(projectId)
            .setEndpoint(endPoint);
        this.account = new Account(client);
    }

    async createNewUser({ name, email, password }: createaccount) {
        try {
            const user = await this.account.create({
                userId: ID.unique(),
                email,
                password,
                name
            });
            console.log(user)
            if(user){
                this.login({email,password})
            }else{
                return user
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