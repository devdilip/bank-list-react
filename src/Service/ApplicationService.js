import axios from 'axios';
import { getDataOptions } from './BackendService';

const ALL_BANK_DETAILS_API = 'bankAccount';


export const getAllBankDetailsService = async () => {
    try {
        const response = await axios(getDataOptions(ALL_BANK_DETAILS_API));
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
};

