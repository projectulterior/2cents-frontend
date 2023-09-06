import Sidebar from './_components/Sidebar';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex min-h-screen flex-row justify-center items-stretch">
            <Sidebar />
            <div
                className="flex flex-col items-stretch"
                style={{
                    flex: 3,
                    maxWidth: 1000,
                    background: 'yellow',
                }}
            >
                {children}
            </div>
            <div className="flex flex-1 flex-col">
                <h1>hello</h1>
            </div>
        </main>
    );
}
