export default function ({ name }: { name: string }) {
    return (
        <div className="flex justify-start p-10">
            <p className="text-2xl font-bold">{name}</p>
        </div>
    );
}
