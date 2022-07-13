import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from 'pages/Login';
import Home from 'pages/Home';
import { UserProvider } from '../common/Context/User';

export default function AppRouter() {
    return(
        <main className='container'>
            <Router>
                <UserProvider>
                    <Routes>
                        <Route path='/' element={<Login/>}/>
                        <Route path='/home' element={<Home/>}/>
                    </Routes>
                </UserProvider>
            </Router>
        </main>
    );
}