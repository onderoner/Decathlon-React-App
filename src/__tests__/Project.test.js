import {render,screen} from '@testing-library/react';
import FullUserProfile from '../Components/FullUserProfile/FullUserProfile';
import HomePage from '../Components/HomePage/HomePage';
import UserList from '../Components/UserList/UserList';

test("should render HomePage",()=>{
   render(<HomePage/>);
   const homePageElement = screen.getByTestId('home');
   expect(homePageElement).toBeInTheDocument();
})

test("should render UserList Page",()=>{
    render(<UserList/>);
    const UserListElement = screen.getByTestId('userList');
    expect(UserListElement).toBeInTheDocument();
 })

 test("should render FullUserProfile Page",()=>{
    render(<FullUserProfile/>);
    const FullUserListElement = screen.getByTestId('gender');
    expect(FullUserListElement).toBeInTheDocument();
 })


 