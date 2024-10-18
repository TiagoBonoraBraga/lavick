import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';


interface HeroCard2Props {
    h3: string;
    p: string;
    button: string;
    icon: IconDefinition;
}

export default function HeroCard2({h3, p , button, icon}: HeroCard2Props) {
    return (
        <>
            <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-center items-center transform transition-transform duration-300 hover:scale-105">
                <div className="mb-4">
                <FontAwesomeIcon icon={ icon } size="3x" className=" opacity-80" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-4">
                    {h3}
                </h3>
                <p className="text-center mb-6">
                   {p}
                </p>
                <button className="px-4 py-2 border border-black rounded-md text-sm hover:bg-orange-500 hover:text-white hover:border-white">
                    {button}
                </button>
            </div>
        </>
    )
}