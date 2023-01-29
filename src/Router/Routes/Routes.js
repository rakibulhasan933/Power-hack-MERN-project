import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
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
				element: <PaymentList />
			},
			{
				path: '/register',
				element: <SingUp />
			}
		]
	}
]);
export default router;