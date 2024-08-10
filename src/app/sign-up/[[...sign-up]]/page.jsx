import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col space-y-3 items-center justify-center min-h-screen bg-gray-100">
        <Link href="/" passHref>
            <div className="w-auto h-auto cursor-pointer">
            <Image
                src="/Banner.svg"
                width={300}
                height={50}
                alt="Banner"
                priority={true}
            />
            </div>
        </Link>
        <SignUp />
    </div>
  );
}
