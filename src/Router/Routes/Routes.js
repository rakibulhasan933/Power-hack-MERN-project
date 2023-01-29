import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import RequireAuth from "../../Pages/Login/RequireAuth";
import SingUp from "../../Pages/Login/SingUp";
import NotFound from "../../Pages/NotFound/NotFound";
import PaymentList from "../../Pages/PaymentList/PaymentList";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: 'pay-bill',
				element: <RequireAuth><PaymentList /></RequireAuth>
			},
			{
				path: '/register',
				element: <SingUp />
			},
			{
				path: '/login',
				element: <Login />
			}
		]
	}
]);
export default router;