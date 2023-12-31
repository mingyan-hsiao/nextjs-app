'use client';
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link';

const Page: React.FC = (props) => {
  const users = [
    {
      name: 'John Syket',
      age: 20,
      designation: 'Software Engineer',
    },
    {
      name: 'Sakib Syket',
      age: 25,
      designation: 'Programmer',
    },
    {
      name: 'John Jamy',
      age: 30,
      designation: 'Designer',
    },
    {
      name: 'Hanif Syket',
      age: 20,
      designation: 'UX Writer',
    },
  ];
  // const users = <AList /> 
  // const [userList, setUserList] = React.useState<
  //   { id: number; name: string; email: string }[] | undefined
  // >(users);
  

  const [userList, setUserList] = React.useState<
    { name: string; age: number; designation: string }[] | undefined
  >(users);
  const [text, setText] = React.useState<string>(''); // 搜尋框裡面的文字

  const handleOnClick = () => {
    const findUsers =
      userList && userList?.length > 0
        ? userList?.filter((u) => u?.name.toLowerCase().includes(text.toLocaleLowerCase()) ) // 包含就好
        : undefined;

    console.log(findUsers);

    setUserList(findUsers);
    
  };

  return (
  <div>
    {/* <div className = 'grid-container'>
      { props.data.map((d, i) => (
         <div className = 'grid-item'>
            <displayName name={d.name} />
         </div>
       )}
      </div> */}

    <div className={styles.title}> 
      <h1>User Find</h1><br />
      <Link href='/' className='p-2 bg-sky-400 text-white text-xl rounded-full hover:bg-sky-500 '>Back</Link>
    </div>
        
        <div className={styles.input__wrapper} >
          <input 
            type='text' 
            placeholder='Search User' 
            value={text} 
            onChange={ e => {
              setText(e.target.value);
              setUserList(users);
            }}/>
          <button disabled={!text} onClick={handleOnClick}>Search</button>
        </div>
        <div className={styles.body}>
        {userList && userList?.length === 0 && (
          <div className="notFound">No User Found</div>
        )}

        
        <div className={styles.wrapper}> 
        {userList &&
          userList?.length > 0 &&
          userList?.map((user) => {
            return (
              <div className={styles.body__item} key={user?.name}> 
                  <h3>Name: {user?.name}</h3>
                  <p>Age: {user?.age}</p>
                  <p>Designation: {user?.designation}</p>
              </div>
            );
          })}
          </div>
          

        </div>
      
    </div>
  )
}

export default Page;
