
const photoWallState = { 
    photos: [
        {
            id: 1,
            photoLink: 'https://images.unsplash.com/photo-1486140525285-12e658d9ac0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
            title: 'image 1',
            comment: [
                {
                    idx: 1,
                    text:'comment for testing 1'
                },
                {
                    idx: 2,
                    text:'comment for testing 2'
                }
            ]
        },
        {
            id: 2,
            photoLink: 'https://images.unsplash.com/photo-1639951173668-f61b41ed6760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
            title: 'image 2',
            comment: [
                {
                    idx: 1,
                    text:'comment for testing 1'
                },
                {
                    idx: 2,
                    text:'comment for testing 2'
                },
                {
                    idx: 3,
                    text:'comment for testing 3'
                }
            ]
        },
        {
            id: 3,
            photoLink: 'https://images.unsplash.com/photo-1640097140978-d72166ae3daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            title: 'image 3',
            comment: [
                {
                    idx: 1,
                    text:'comment for testing 1'
                },
                {
                    idx: 2,
                    text:'comment for testing 2'
                }
            ]
        },
        {
            id: 4,
            photoLink: 'https://images.unsplash.com/photo-1639297656909-09bb6fc042d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            title: 'image 4',
            comment: [
                {
                    idx: 1,
                    text:'comment for testing 1'
                },
                {
                    idx: 2,
                    text:'comment for testing 2'
                }
            ]
        }
    ]
}

const PhotoReducer = (state=photoWallState, action) => {
    switch(action.type){
        case 'REMOVE':
            const key = action.payload
            const newState = state.photos.filter((photo) => photo.id !== key)
            return {...state, photos: newState}
        case "ADD":
            const id = Math.floor(Math.random() * 10000) + 1;
            const data = action.payload;
            const newPhoto = { id, ...data };
            return {...state, photos:[...state.photos, newPhoto]}
        case "ADDCOMMENT":
            const idx = Math.floor(Math.random() * 10000) + 1;
            const { text, photo } = action.payload;
            console.log('the photo from reducer', photo)
            const newComment = {idx, text};
            photo.comment.push(newComment) // adding the comment to the photo
            // return { ...state, photos:[state.photos.map((image) =>
            // Number(image.id) === Number(photo.id) ? image.comment.push(newComment) && image : image),] }
            return state;
        case 'REMOVEALL':
            return {...state, photos:[]}

        default:
            return state;
    };
}
 
export default PhotoReducer;