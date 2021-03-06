import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions/postActions';

function Postform() {
    // the below states are used to show user input in the input boxes
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();
    
    const onSubmit = async (e) => {
        e.preventDefault();

        const post = {
            title: title,
            body: body
        }
        // send post to backend (fake)
        // const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(post)
        // })

        // // log the res
        // const data = await res.json();
        // console.log(data);

        // REPLACED ABOVE WITH BELOW TO WORK WITH REDUX
        dispatch(allActions.createPost(post));

        // reset the UI input boxes to empty
        setTitle('');
        setBody('');
    }

    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title: </label>
                    <br />
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <br />
                </div>
                <div>
                    <label>Body: </label>
                    <br />
                    <textarea name="body" value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Postform
