import {
	HiOutlineViewGrid,
	HiOutlineShoppingCart,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog, HiLogout
} from 'react-icons/hi'
import { FaUsers } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { VscFeedback } from "react-icons/vsc";



export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/admin/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'users',
		label: 'Users',
		path: '/admin/user',
		icon: <FaUsers />
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/admin/transactions',
		icon: <BsBank />
	},
	{
		key: 'feedback',
		label: 'Feedbacks',
		path: '/admin/feedback',
		icon: <VscFeedback />
	},
	{
		key: 'orders',
		label: 'Testing',
		path: '/admin/orders',
		icon: <HiOutlineShoppingCart />
	},

]

export const USER_SIDEBAR_LINKS = [
	{
		key: 'home',
		label: 'Home',
		path: '/user/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'profile',
		label: 'Profile',
		path: '/user/general',
		icon: <FaUsers />
	},
	{
		key: 'Interests',
		label: 'Interests',
		path: '/user/interest',
		icon: <BsBank />
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
	},
	{
		key: 'logout',
		label: 'logout',
		path: '/',
		icon: <HiLogout />
	}
]