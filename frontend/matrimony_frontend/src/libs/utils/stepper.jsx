import {
	HiOutlineViewGrid,
	HiOutlineShoppingCart,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'
import { FaUsers } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { VscFeedback } from "react-icons/vsc";



export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'users',
		label: 'Users',
		path: '/user',
		icon: <FaUsers />
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/transactions',
		icon: <BsBank />
	},
	{
		key: 'feedback',
		label: 'Feedbacks',
		path: '/feedback',
		icon: <VscFeedback />
	},
	{
		key: 'orders',
		label: 'Testing',
		path: '/orders',
		icon: <HiOutlineShoppingCart />
	},

]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]