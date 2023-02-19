import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// for hero icon 
import { ArrowRightIcon, ChevronRightIcon, CogIcon, HeartIcon, HomeIcon, MenuIcon, PuzzleIcon, TicketIcon, ViewGridAddIcon } from '@heroicons/react/solid'
import CustomLink from './Active/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { signOut } from 'firebase/auth';
//  icon import 
import exploerIcon from '../../assets/img/ex.png';
import takaIcon from '../../assets/img/taka.png';
import cartIcon from '../../assets/img/cart.png';
import history from '../../assets/img/hostory.png';
import setting from '../../assets/img/icons8-settings-100 1.png';
import profileIcon from '../../assets/img/profile.png';

const DashBoard = () => {
	const [user, loading, error] = useAuthState(auth);
	if (loading) {
		return <Loading></Loading>
	}
	if (error) {
		console.log(error);
	}
	const logout = () => {
		signOut(auth);
	};
	return (
		<>
			<div className="container mx-auto px-2 lg:px-0">
				<div className="drawer drawer-mobile ">
					<input id="open-dashboard-menu" type="checkbox" className="drawer-toggle" />
					<div className="drawer-content  flex flex-col bg-slate-200 py-6" id='total_content'>
						{/* <!-- Page content here --> */}
						<div className="text-left mt-10 fixed" style={{ zIndex: '1111111' }}>
							<label htmlFor="open-dashboard-menu" className="w-10 rounded h-10 inline-block cursor-pointer bg-blue-500 hover:bg-blue-800 text-white lg:hidden"><span>
								<ChevronRightIcon />
							</span> </label>
						</div>
						<div className="text-center ">
							<div id="header" className='py-6'>

							</div>
							<div className="text-left px-3">
								<Outlet></Outlet>
							</div>
						</div>

					</div>
					<div className="drawer-side ">
						<label htmlFor="open-dashboard-menu" className="drawer-overlay "></label>
						<ul className="menu mt-[50px] p-4 overflow-y-auto w-60 bg-[#ffffff] border-r border-[#00000018] shadow-2xl  text-slate-600 font-semibold" id='slideBar'>

							{/* <!-- Sidebar content here --> */}
							<li className='py-[0px] text-lg hover:text-black rounded'><CustomLink className='flex gap-4 capitalize' to={'/'}><HomeIcon className='text-slate-600 w-6 '></HomeIcon>Home</CustomLink></li>
							<li className='py-[0px] text-lg hover:text-black rounded'><CustomLink className='flex gap-4 capitalize' to={'/explore'}><CogIcon className='text-slate-600 w-6' />Explore</CustomLink></li>
							<li className='py-[0px] text-lg hover:text-black rounded'><CustomLink className='flex gap-4 capitalize' to={'/saved'}><img src={exploerIcon} className='text-slate-600 w-[27px]' alt=''/> Saved </CustomLink></li>
							<li className='py-[0px] text-lg hover:text-black rounded'><CustomLink className='flex gap-4 capitalize' to={'/selling'}><img src={takaIcon} className='text-slate-600 w-[27px]' alt=''/> Selling </CustomLink></li>
							<li className='py-[0px] text-lg hover:text-black rounded'><CustomLink className='flex gap-4 capitalize' to={'/cart'}><img src={cartIcon} className='text-slate-600 w-[27px]' alt=''/> Cart </CustomLink></li>
							<li className='py-[0px] text-lg hover:text-black rounded'><CustomLink className='flex gap-4 capitalize' to={'/profile'}><img src={profileIcon} className='text-slate-600 w-[27px]'alt='' /> Profile </CustomLink></li>
							<li className='py-[0px] text-lg hover:text-black rounded'><CustomLink className='flex gap-4 capitalize' to={'/history'}><img src={history} className='text-slate-600 w-[27px]' alt=''/> History </CustomLink></li>
							<li className='py-[0px] text-lg hover:text-black rounded'><CustomLink className='flex gap-4 capitalize' to={'/setting'}><img src={setting} className='text-slate-600 w-[27px]' alt=''/> Setting </CustomLink></li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashBoard;