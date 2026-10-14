interface Props {
    eyebrow: string;
    title: string;
    description?: string;
}

export const AuthHeader = ({ eyebrow, title, description }: Props) => {
    return (
        <div className="mb-4">
            <p className="mb-3 text-sm font-bold tracking-wide text-emerald-700 uppercase">
                {eyebrow}
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
                {title}
            </h2>
            {description && (
                <p className="mt-3 text-sm leading-6 text-slate-600">
                    {description}
                </p>
            )}
        </div>
    );
};
