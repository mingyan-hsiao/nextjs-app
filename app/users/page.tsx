import React, { use } from 'react'
import UserList from './userList';
import Link from 'next/link';
import styles from './page.module.css';

interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {return(
    // const res = await fetch('https://jsonplaceholder.typicode.com/users',
    // // { next: { revalidate: 10 }} // every 10 seconds,
    // { cache: 'no-store' }
    
    // ); 
    // const users: User[] = await res.json();
        <>
            <div className={styles.container}>
                <h1>Users</h1>
                <Link href='/' className='p-2 bg-sky-400 text-white text-xl rounded-full hover:bg-sky-500 '>Back</Link>
            </div>
            {/* <p>{new Date().toLocaleDateString()}</p> */}
            <table className='table table-border'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <UserList />
                {/* {users.map(user => <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>)
                } */}
                </tbody>
                 </table>
        
        </>
    
)}

export default UsersPage