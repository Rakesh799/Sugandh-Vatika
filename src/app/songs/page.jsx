import Link from 'next/link';
import songsData from '@/data/songs.json';
import { Search } from 'lucide-react';

export default function SongsList() {
  return (
    <>
      <div className="flex justify-center">

        <div className='relative w-84 my-2'>
          <input
            type="text"
            placeholder='type to search songs'
            className='py-1 px-4 rounded-lg border-brown border outline-none w-full'
            autoFocus
          />
          <div className='absolute right-2 top-2 text-brown '>
            <Search size={20}/>
          </div>
        </div>
      </div>
      <div className="p-4 max-w-3xl mx-auto space-y-2 flex flex-col">
        {songsData.map((song, i) => (
          <Link
            key={i}
            href={`/songs/${song.slug}`}
            className="text-white border border-brown py-2 rounded-lg px-4 bg-gradient-to-r from-brown to-amber-100"
          >
            {song.title}
          </Link>
        ))}
      </div>
    </>
  );
}
