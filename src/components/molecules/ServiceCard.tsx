import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface ServiceCardProps {
    h3: string;
    p: string;
    icon: IconDefinition;
}

export default function ServiceCard({h3, p, icon }: ServiceCardProps) {
    return (
        <>
        <div className="bg-white p-4 my-6 rounded-lg shadow flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center text-white">
                            <FontAwesomeIcon icon={icon} size="lg" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">{h3}</h3>
                            <p className="text-gray-600 mt-2">
                                {p}
                            </p>
                        </div>
                    </div>
        </>
    )
}