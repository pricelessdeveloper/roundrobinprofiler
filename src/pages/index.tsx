import Head from "next/head";
import Link from "next/link";
import Profiler from '~/components/profiler';

import { api } from "~/utils/api";

export default function Home() {
    const getTitle = () => {
    return '';
}

return (
    <>
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
                    <div>
                        <Profiler title={getTitle()}></Profiler>
                    </div>
                </div>
            </div>
        </main>
    </>
);
}
