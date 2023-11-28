import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Layout from "./components/Layout/Layout";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserPage from "./pages/UserPage/UserPage";
import UserNotFound from "./pages/UserNotFound/UserNotFound";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import PostsPage from "./pages/PostsPage/PostsPage";
import HomePage from "./pages/HomePage/HomePage";
import Auth from "./pages/Auth/Auth";

function App() {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const switchIsAuthorized = () => {
        setIsAuthorized(!isAuthorized);
    }

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout callback={switchIsAuthorized}/>}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/users' element={<UsersPage />} />
                    <Route path='/users/:id' element={<UserPage />} />
                    <Route path='/userNotFound' element={<UserNotFound />} />
                    <Route path='/posts' element={<PostsPage isAuthorized={isAuthorized}/>} />

                    <Route path='*' element={<PageNotFound />} />
                </Route>
                <Route path='/auth' element={<Auth />}/>
            </Routes>
        </>
    );
}

export default App;
