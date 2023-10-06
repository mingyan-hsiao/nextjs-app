import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'


export default function Home() {
  return (
    <main>
      <h1>User App</h1>
      <Link href="/users" className='text-sky-600'>User List</Link><br />
      <Link href="/search" className='text-sky-600'>Search for User</Link><br />
      {/* <Link href="/users2" className='text-sky-600'>Users2</Link> */}
      <ProductCard /><p>Open the console!</p>
    </main>
  )
}