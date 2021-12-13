import axiosClient from "./axiosClient"

const changePasswordAPI = {
    changePassword: async (params) => {
        try {
            const url = '/auth/password';
            const response = await axiosClient.post(url, params);
            return response;
        } catch (err) {
            console.log(err);
        }
    }
}

export default changePasswordAPI;