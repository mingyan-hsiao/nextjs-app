async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

  export default async function UserList() {
    
    interface User {
        id: number;
        name: string;
        email: string;
    }
    
    const user: User[] = await getData()

    return (
    <>
        {user.map(user => 
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>)
        }
    
    </>)
  }