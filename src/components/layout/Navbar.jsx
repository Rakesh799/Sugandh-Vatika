import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <ul className='flex items-center gap-4'>
        <li className="cursor-pointer"><Link href={"/"}>Home</Link></li>
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">Contact</li>
        <li className="cursor-pointer">Order Now</li>
      </ul>
    </div>
  )
}

