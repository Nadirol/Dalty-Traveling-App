import { useParams } from "react-router";
import Loader from "../components/Loader";
import Suggestion from "../components/details/Suggestion";
import { useGetDestination } from "../hooks";
import DesDetails from "../components/details/DestDetails";

const Details = () => {
    const { id: destinationId } = useParams();

    const { isLoading, data: destinationData } = useGetDestination(destinationId);

    if (isLoading) {
        return <Loader key='loader'/>
    }

    return (
        <div className="w-container mx-auto">
            <DesDetails
                destinationData={destinationData}
            />
            <Suggestion
                key={'suggestion'}
                destinationData={destinationData}
            />
        </div>
    )
}

export default Details;