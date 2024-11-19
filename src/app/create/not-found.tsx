import Link from 'next/link';

export default function NotFound() {
    return (
        <div>
            <h2>Can't create position</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    );
}
