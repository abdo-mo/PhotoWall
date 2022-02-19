import { useState } from "react";
import { connect } from "react-redux";
import { addPhoto } from "./actions";
import { useNavigate } from 'react-router-dom';

const AddPhoto = ({ addPhoto }) => {
    const [photoLink, setPhotoLink] = useState('');
    const [title, setTitle] = useState('');
    const navigate = useNavigate();
    const onAddPhoto = (e) => {
        e.preventDefault();
        const comment = []
        const photoData = {
            photoLink,
            title,
            comment,
        };
        addPhoto(photoData);
        navigate('/');

    };

    return (
        <form className="add-form" onSubmit={onAddPhoto}>
            <ul>
                <li><h1>Add Photo</h1></li>
                <li><label>Photo URL</label></li>
                <li><input type="text" value={photoLink} onChange={
                    (e) => setPhotoLink(e.target.value)
                }/></li>
                <li><label>Title</label></li>
                <li><input type="text" value={title} onChange={
                    (e) => setTitle(e.target.value)
                }/></li>
                <li><button>Add</button></li>               
            </ul>
        </form>
    );
}
const mapDispatchToProps = dispatch => ({
    addPhoto: photoData => dispatch(addPhoto(photoData))
})

 
export default connect(null, mapDispatchToProps) (AddPhoto);