import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPageLayout from 'pages/Login';
import Home from 'pages/Home';
import { UserProvider } from '../common/Context/User';
import LoginForm from 'components/LoginForm';
import RegisterForm from 'components/RegisterForm';
export default function AppRouter() {
    return(
        <main className='container'>
            <Router>
                <UserProvider>
                    <Routes>
                        <Route path='/' element={<LoginPageLayout/>}>
                            <Route index element={<LoginForm/>}/>
                            <Route path='register' element={<RegisterForm/>}/>
                        </Route>
                        <Route path='/home' element={<Home/>}/>
                    </Routes>
                </UserProvider>
            </Router>
        </main>
    );
}