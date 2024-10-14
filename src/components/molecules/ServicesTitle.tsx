interface ServiceTitleProps {
    h1: string;
    h2:string;
    p: string;
}

export default function ServiceTitle({h1, h2, p }:ServiceTitleProps) {
    return (
        <>
            <div className="mb-6 grid grid-cols-1 lg:grid-cols-1 gap-8">             
                <div className="flex flex-col justify-start">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-700">{h2}</h2>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">{h1}</h1>
                    <p className="text-gray-600 mt-4">
                       {p}
                    </p>                   
                </div>                
            </div>
        </>
    )
}