import { getAllUsers as getAllUserService } from '../services/user';
export const getAllUsers = async (req, res) =>{
    const users = await getAllUserService();
    res.json(users)
}