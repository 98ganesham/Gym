
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

function Login({ setSelectedPage }: Props) {
    const inputStyles = `mb-5 w-full rounded-lg bg-gray-50
    px-2 py-2 placeholder-white text-white `;

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    return (
        <section id="login" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Login)}>
                <motion.div className=" p-40 rounded shadow-lg w-full ">
                    <h2 className="text-2xl font-semibold mb-2 whitespace-nowrap text-center ">Please Login For A Member </h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-md mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Please enter your email address"
                            className="w-full border rounded py-2 px-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-md mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Please enter your password"
                            className="w-full border rounded py-2 px-3"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="text-center">
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            onSubmit={onSubmit}
                        >
                            Login
                        </button>
                    </div>
                </motion.div>
            </motion.div>

        </section>
    );

}
export default Login;