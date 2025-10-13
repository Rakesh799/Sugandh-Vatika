import Link from 'next/link';
import songsData from '@/data/songs.json';

export default function SongsList() {
  return (
    <div className="p-4 max-w-3xl mx-auto space-y-2">
      {songsData.map((song) => (
        <Link
          key={song.id}
          href={`/songs/${song.slug}`}
          className="block text-blue-600 hover:underline"
        >
          {song.title}
        </Link>
      ))}
    </div>
  );
}
