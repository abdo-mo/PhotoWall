import { connect } from "react-redux";
import { deletePhoto } from './actions';
import { Link, useNavigate } from 'react-router-dom';

const Photo = ({ photo, deletePhoto}) => {
    // console.log(photo, 'this is the photo')
    const comments = photo['comment'];
    const navigate = useNavigate();
    const onDelete = (e) => {
        deletePhoto(photo.id);
        navigate('/');
    }
    return (
        <div key={photo.id} className="card">
            <Link to={`/` + photo.id}>
                <div>
                    <img style={{"width":'100%', "height": '150px', "objectFit": 'cover'}} src={photo.photoLink} alt="img"/>
                </div>
            </Link>
            <h3>{photo.title}</h3>
            <div className="remove-comment">
                <button onClick={() => onDelete()}>Remove</button>
                <div className="comment-icons">
                    <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    <span>{comments.length}</span>
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    deletePhoto: key => dispatch(deletePhoto(key))
})
 
export default connect(null, mapDispatchToProps) (Photo);