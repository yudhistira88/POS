import React from 'react';

interface LoginPageProps {
    onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
            <div className="w-full max-w-sm">
                 <div className="flex justify-center items-center space-x-4 mb-8">
                    <svg className="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                    <span className="text-4xl font-bold text-gray-800 tracking-tight">InfinityPOS</span>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Selamat Datang</h2>
                    <p className="text-center text-gray-500 mt-2 text-sm">Silakan masuk untuk melanjutkan ke dasbor Anda.</p>
                    
                    <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="email" required value="admin@infinitypos.app" readOnly
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-100" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password"className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input id="password" name="password" type="password" required value="••••••••" readOnly
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-100" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                             <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                                Lupa password?
                            </a>
                        </div>

                        <div>
                            <button type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Masuk
                            </button>
                        </div>
                    </form>
                </div>
                 <p className="mt-6 text-center text-xs text-gray-500">
                    © 2024 InfinityPOS. Semua hak cipta dilindungi.
                </p>
            </div>
        </div>
    );
};

export default LoginPage;