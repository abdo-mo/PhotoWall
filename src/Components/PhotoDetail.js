import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, connect } from 'react-redux'
import Photo from './Photo';
import { useState } from 'react';
import { addComment } from './actions'

const PhotoDetail = ({ addComment }) => {
    const {photo_id} = useParams();
    const [text, setText] = useState('');
    const photos = useSelector((state) => state.photoList.photos);
    const photo = photos.find((item) =>  Number(item.id) === Number(photo_id));
    console.log('here photo id', photo_id)
    console.log('here photo', photo)
    console.log('here photos', photos)
    const comments = photo['comment'];
    const navigate = useNavigate();
    const handelKeyDown = (e) => {
        if (e.key === "Enter" && text != '') {
            const commentData = {text, photo}
            addComment(commentData);
            navigate("/" + photo_id)
            setText('')
        }
    }

    return (
        <div className="detail">
            <div className="photos photoDetail">
                <Photo key={photo.id} photo={photo}/>
            </div>
            <div>
                <h2>Comments</h2>
                <input type="text" value={text} onChange = {
                    (e) => setText(e.target.value)
                } onKeyDown={
                    handelKeyDown
                }/>
                <div>
                    { comments.slice(0).reverse().map((comment) => (
                        <p key={comment.id}>{comment.text}</p>
                    )) }
                </div>
            </div>
        </div>
    );
}
const mapDispatchToProps = dispatch => ({
    addComment: commentData => dispatch(addComment(commentData))
})
export default connect(null, mapDispatchToProps) (PhotoDetail);