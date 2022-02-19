import { useDispatch, useSelector } from 'react-redux';
import Photo from './Photo';
import { deleteAll } from './actions'

const Photos = () => {
    const photos = useSelector((state) => state.photoList.photos)
    const dispatch = useDispatch();
    return (
        <>
            {photos.length > 0 ? (
                <div className="photos">
                {photos.slice(0).reverse().map((photo) => (
                    <Photo key={photo.id} photo={photo} idx={photo.id} />
                ))}
            
            </div>
            ) : ('No photos to show') }
            
            {photos.length > 0 ?(
                <button className="deleteAll" onClick={() => dispatch(deleteAll())}>Delete All</button>
            ) : ('') }
            
        </>
    );
}

 
export default Photos;