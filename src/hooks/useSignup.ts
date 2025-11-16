import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { API_BASE_URL } from "../helpers/Constants";
import toast from "react-hot-toast";
import { verifyError } from "../helpers/VerifyErrors";
import { UserSignUpT } from "../types";

export default function useSignup() {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (userData: UserSignUpT, isAdmin = false) => {
        setLoading(true);
        try {
            // Seleccionamos la ruta correcta según tipo de usuario
            const endpoint = isAdmin ? 'auth/loginadmin' : 'auth/login';

            // Enviamos los datos con los nombres que espera el backend
            const response: Response = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    user_name: userData.user_name, // <-- mapear username a user_name
                    email: userData.email,
                    password: userData.password,
                }),
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            // Guardamos los datos del usuario en localStorage y contexto
            localStorage.setItem('chaski-log', JSON.stringify(data));
            setAuthUser(data);

        } catch (error) {
            toast.error(verifyError(error));
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
}
