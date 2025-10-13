import Link from 'next/link';
import songsData from '@/data/songs.json';

export default function SongsList() {
  return (
    <div className="p-4 max-w-3xl mx-auto space-y-2 flex flex-col">
      {songsData.map((song) => (
        <Link
          key={song.id}
          href={`/songs/${song.slug}`}
          className="text-brown border border-brown py-2 rounded-full px-4"
        >
          {song.title}
        </Link>
      ))}
    </div>
  );
}
