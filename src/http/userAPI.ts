import { $host } from "./index";
import jwt_decode from "jwt-decode";
import { EncryptStorage } from 'encrypt-storage';

export const encryptStorage = new EncryptStorage(process.env.REACT_APP_SECRET_KEY as string);

export const registration = async (name: string, surname: string, email: string, phoneNumber: string, password: string) => {
    const {data} = await $host.post('api/user/registration', {name, surname, email, phoneNumber, password, role: 'USER'})
    encryptStorage.setItem('token', data.token)
    return jwt_decode(data.token);
}

export const login = async (email: string, password: string) => {
    const {data} = await $host.post('api/user/login', {email, password})
    encryptStorage.setItem('token', data.token)
    return jwt_decode(data.token);
}

export const check = async () => {
    const response = await $host.post('api/user/registration')
    return response;
}

export const deleteUser = async (email: string) => {
    const response = await $host.delete('api/user/delete', {params: {email}})
    return response;
}

export const getUsers = async () => {
    const response = await $host.get('api/user/users')
    return response;
}
