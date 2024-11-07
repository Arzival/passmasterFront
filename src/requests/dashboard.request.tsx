import axios from "axios";

const API_URL = "http://passmaster.test/api/";

// Función para obtener los datos de autenticación desde localStorage
const getAuthData = () => {
    const userData = JSON.parse(localStorage.getItem('userdata') || '{}');
    return {
        accessToken: userData.access_token,
        userId: userData.user_id
    };
};

// Función para obtener la sugerencia de contraseña
export const getPassSuggestion = async () => {
    try {
        const { accessToken } = getAuthData();

        const response = await axios.post(
            API_URL + "suggest-password",
            {},
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        );

        return response.data;
    } catch (error: any) {
        return error.response ? error.response.data : { message: "An error occurred" };
    }
};

export const saveSecretWord = async (secret_word:String ) => {
    try {
        const { accessToken, userId } = getAuthData();

        const response = await axios.post(
            API_URL + "register-secret-word",
            {
                secret_word,
                user_id: userId
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        );

        return response.data;
    } catch (error: any) {
        return error.response ? error.response.data : { message: "An error occurred" };
    }
};

export const savePassword = async (password:String, sistema:String, user:String) => {
    try {
        const { accessToken, userId } = getAuthData();

        const response = await axios.post(
            API_URL + "save-password",
            {
                password,
                sistema,
                user,
                user_id: userId
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        );

        return response.data;
    } catch (error: any) {
        return error.response ? error.response.data : { message: "An error occurred" };
    }
};

export const getSistemsPerUser = async () => {
    try {
        const { accessToken, userId } = getAuthData();

        const response = await axios.post(
            API_URL + "get-sistems",
            {
                user_id: userId
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        );

        return response.data;
    } catch (error: any) {
        return error.response ? error.response.data : { message: "An error occurred" };
    }
};

export const getPasswords = async (secret_word:String, sistema_id:Number) => {
    try {
        const { accessToken, userId } = getAuthData();

        const response = await axios.post(
            API_URL + "get-passwords",
            {
                user_id: userId,
                secret_word,
                sistema_id
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        );

        return response.data;
    } catch (error: any) {
        return error.response ? error.response.data : { message: "An error occurred" };
    }
}

