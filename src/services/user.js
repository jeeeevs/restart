import {get} from '../helpers/request'
import {getUserServiceBaseUrl} from '../helpers/config'

const baseUrl = getUserServiceBaseUrl();
export const getAllUsers = ()=>{
    const url = `${baseUrl}/v1/employees`;
    return get(url)
}