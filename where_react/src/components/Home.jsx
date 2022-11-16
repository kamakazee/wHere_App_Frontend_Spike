import ImageGallery from './ImageGallery';
import ImageUpload from './ImageUpload';

const Home = ({user}) => {
    return (
        <div>
            {user.name ? 
            <>
            <p>Home</p>
            <ImageUpload />
            <ImageGallery/>
            </>
            :
            <p>Please log in to use this app.</p>
            }
        </div>
    )
};

export default Home;