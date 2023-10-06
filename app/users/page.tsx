import React, { use } from 'react'
import UserList from './UserList';
import Link from 'next/link';
import styles from './page.module.css';


const UsersPage = async () => {return(
        <>
            <div className={styles.container}>
                <h1>Users</h1>
                <Link href='/' className='p-2 bg-sky-400 text-white text-xl rounded-full hover:bg-sky-500 '>Back</Link>
            </div>
            
            <table className='table table-border'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <UserList />
                
                </tbody>
                 </table>
        
        </>
    
)}

export default UsersPage