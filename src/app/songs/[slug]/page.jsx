import songsData from '@/data/songs.json';
import { ArrowLeftFromLine } from 'lucide-react';
import Link from 'next/link';


export default function SongPage({ params }) {
    const { slug } = params;

    const song = songsData.find((s) => s.slug === slug);
    if (!song) {
        return <p className="p-4 text-center text-red-600">Song not found!</p>;
    }


    return (
        <div className="p-4 max-w-3xl mx-auto space-y-6">
            <Link href={'/songs'}>
                <ArrowLeftFromLine />
            </Link>
            <h1 className="text-2xl font-bold">{song.title}</h1>
            {song.audio && (
                <audio controls className="w-full mt-4">
                    <source src={song.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            )}

        </div>
    );
}