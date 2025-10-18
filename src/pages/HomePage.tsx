
import Folders from "../sections/Folders";
import Recents from "../sections/Recents";

const HomePage = () => {
    
    return (
        <div className='container'>
            <Recents />
            <Folders />
        </div>
    )
}

export default HomePage;