import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const AddTask = () => {
    const { user } = useContext(AuthContext);
    const handleAddTask = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const image = form.image.value;
        const description = form.description.value;
        const email = user?.email || 'unregistered';
        const task = {
            email: email,
            title: title,
            description: description,
            img: image
        }
        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Task added successfully.')
                }
                form.reset();
                console.log(data)
            })
            .catch(er => console.log(er));

    }
    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className='text-3xl font-bold'>Add Your Task Here.</h2>
            </div>
            <form onSubmit={handleAddTask}>
                <div className='text-center'>
                    <input name="title" type="text" placeholder="Service Title" className="input input-bordered text-center input-secondary" required />
                    <br />
                    <input name="description" type="text" placeholder="Service Description" className="mt-4 input text-center input-bordered input-secondary" required />
                    <br />
                    <input name="image" placeholder="give image URL" className="mt-4 input input-bordered input-secondary" required />
                    <br />
                    <input className='btn m-4' type="submit" value="Add your task" />
                </div>
            </form>
        </div>
    );
};

export default AddTask;