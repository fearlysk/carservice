import { $host } from "./index";

export const createOrder = async (name: string, userId: number, carModel: string, carYear: number, price: string | number, job: string) => {
    const data = await $host.post('api/order/create', {name, userId, carModel, carYear, price, job})
    return data;
}

export const getOrders = async () => {
    const data = await $host.get(`api/order/get/`)
    return data;
}

export const getUserOrders = async (userId: number | string) => {
    const data = await $host.get(`api/order/get/${userId}`, {userId} as never)
    return data;
}

export const updateOrder = async (id: number, status: string) => {
    const response = await $host.patch('api/order/update', {id, status});
    return response;
}

export const deleteOrder = async (id: number) => {
    const response = await $host.delete(`api/order/delete?id=${id}`, {id} as never)
    return response;
}

export const deleteAllOrders = async () => {
    const response = await $host.delete('api/order/deleteAll');
    return response;
}
