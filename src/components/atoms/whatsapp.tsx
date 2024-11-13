import Image from 'next/image'
import Link from 'next/link'
import whatsapLogo from '../../../public/whatsap.png'

export default function Whatsap() {
  return (
    <Link href="https://api.whatsapp.com/send?phone=5541998781245&text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento." target="_blank">
      <div className="fixed bottom-0 right-0 z-40 mr-5 mb-2 ">
        <Image src={whatsapLogo} width={50} height={50} alt="whatsap" />
      </div>
    </Link>
  )
}
