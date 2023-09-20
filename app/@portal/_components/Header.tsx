export default function ({ name }: { name: string }) {
    return (
        <div
            className="flex justify-start p-10 bg-white"
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 99999,
                borderBottom: '1px solid lightgrey',
            }}
        >
            <p className="text-2xl font-bold">{name}</p>
        </div>
    );
}
