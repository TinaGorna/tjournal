import axios from "axios";
import {LoginDto, CreateUserDto, ResponseUser} from "./types";

const instance = axios.create({
    baseURL: "http://localhost:7777/"
})

export const UserApi = {
    async register(dto: CreateUserDto): Promise<ResponseUser> {
        const {data} = await instance.post<CreateUserDto, { data: ResponseUser }>("/auth/register", dto)
        return data
    },
    async login(dto: LoginDto): Promise<ResponseUser> {
        const {data} = await instance.post<LoginDto, { data: ResponseUser }>("/auth/login", dto)
        return data
    },
    async getMe(token: string) {
        const {data} = await instance.get<ResponseUser>("/users/me", {
            headers: {
                Autorization: `{Bearer ${token}`
            }
        })
        return data
    }
}