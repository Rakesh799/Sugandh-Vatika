import Breathless from '@/components/songs/Breathless'
import GaneshStotra from '@/components/songs/GaneshStotra'
import ShivaTandavStotram from '@/components/songs/ShivaTandavStotram'
import songsData from '@/data/songs.json';
import Link from 'next/link';

// Map component names to actual imports
const componentsMap = {
    ShivaTandavStotram,
    GaneshStotra,
    Breathless,
};

export default function SongPage({ params }) {
    const { slug } = params;

    const song = songsData.find((s) => s.slug === slug);
    if (!song) {
        return <p className="p-4 text-center text-red-600">Song not found!</p>;
    }

    const SongComponent = componentsMap[song.component];

    return (
        <div className="p-4 max-w-3xl mx-auto space-y-6">
            <Link href={'/songs'}>Go Back</Link>
            <h1 className="text-2xl font-bold">{song.title}</h1>
            {song.audio && (
                <audio controls className="w-full mt-4">
                    <source src={song.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            )}
            
            {SongComponent && <SongComponent />}

        </div>
    );
}