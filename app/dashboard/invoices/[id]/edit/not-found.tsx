import Link from 'next/link';
import {FaceFrownIcon} from '@heroicons/react/24/outline';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-full  gap-2">
            <FaceFrownIcon className="w-10 text-gray-500" />
            <h2 className="text-xl font-semibold">404 Not Found</h2>
            <p>Could not find the requested invoice.</p>
            <Link
                href="/dashboard/invoices"
                className="mt-4 round-md bg-blue-500 text-white px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
            >
                Go Back
            </Link>
        </div>
    );
}