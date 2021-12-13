import axiosClient from "./axiosClient";

const userProfileAPI = {
    getProfile: async () => {
        try {
            const url = '/member/profile';
            const response = await axiosClient.get(url);
            return response;
        } catch (err) {
            alert(err.message);
        }
    },

    updateProfile: async (params) => {
        try {
            const url = '/member/profile'
            const response = await axiosClient.put(url, params);
            return response;
        } catch (err) {
            alert(err.message);
        }
    },

    updateAvatar: async (params) => {
        try {
            const url = 'upload/image';
            const response = await axiosClient.post(url, params);
            return response;
        } catch (err) {
            alert(err.message);
        }
    }
}

export default userProfileAPI