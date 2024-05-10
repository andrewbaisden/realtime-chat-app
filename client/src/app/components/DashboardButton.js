import Link from 'next/link';
import Image from 'next/image';

export default function DashboardButton({ url, img, alt }) {
  return (
    <>
      <Link href={url}>
        <div className="rounded mr-4 bg-slate-50 hover:bg-slate-200 h-96 w-96 text-center flex items-center justify-center drop-shadow-lg uppercase">
          <Image src={img} height={200} width={200} alt={alt} />
        </div>
      </Link>
    </>
  );
}
