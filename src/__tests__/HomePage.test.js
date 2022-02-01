import {render,screen,cleanup, getByPlaceholderText, getByRole} from '@testing-library/react';
import FullUserProfile from '../Components/FullUserProfile';
import Header from '../Components/Header';
import HomePage from '../Components/HomePage';
import UserList from '../Components/UserList';

test("should render HomePage",()=>{
   render(<HomePage/>);
   const homePageElement = screen.getByTestId('home');
   expect(homePageElement).toBeInTheDocument();
})

test("should render Header and checking Home Text",()=>{
    render(<Header/>);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe("Home")
 })
 

test("should render UserList Page",()=>{
    render(<UserList/>);
    const UserListElement = screen.getByTestId('userList');
    expect(UserListElement).toBeInTheDocument();
 })

 test("should render FullUserProfile Page and checking Gender",()=>{
    render(<FullUserProfile/>);
    const FullUserListElement = screen.getByTestId('gender');
    expect(FullUserListElement).toBeInTheDocument();
    expect(FullUserListElement.textContent).toBe("Gender:")

 })


 