import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPageLayout from 'pages/Login';
import Home from 'pages/Home';
import { UserProvider } from '../common/Context/User';
import LoginForm from 'components/LoginForm';
import RegisterForm from 'components/RegisterForm';
import { PasswordProvider } from 'common/Context/Password';
export default function AppRouter() {
    return(
        <main className='container'>
            <Router>
                <PasswordProvider>
                    <UserProvider>
                        <Routes>
                            <Route path='/' element={<LoginPageLayout/>}>
                                <Route index element={<LoginForm/>}/>
                                <Route path='register' element={<RegisterForm/>}/>
                            </Route>
                            <Route path='/home' element={<Home/>}/>
                        </Routes>
                    </UserProvider>
                </PasswordProvider>
            </Router>
        </main>
    );
}