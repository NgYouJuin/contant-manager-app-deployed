import { useState } from "react";

const DEFAULT_DATA ={ 
    title: "",
    description: "",
    link: "",
    priority: "2",
    timeToFinish: 60
}


const ResourceForm = ({onFormSubmit, initialData}) => {
    const [form, setForm] = useState(initialData || DEFAULT_DATA);

    const resetForm = (e) => {
        e.preventDefault()
        setForm(DEFAULT_DATA)
    }

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const submitForm = e => {
        e.preventDefault()
        onFormSubmit(form);
    }


    return (
        <div className="resource-form">
            <h1 className="title">Add New Resource</h1>
            <form>
                <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input name="title"  onChange={handleChange} className="input" type="text"placeholder="Learn Next JS and Sanity IO" value={form.title}/>
                </div>
                </div>
                <div className="field">
                <label className="label">Description</label>
                <div className="control">
                    <textarea
                    onChange={handleChange} 
                    name="description"
                    value={form.description}
                    className="textarea"
                    placeholder="Learn these technologies because they are very popular and enable better SEO"></textarea>
                </div>
                </div>
                <div className="field">
                <label className="label">Link</label>
                <div className="control">
                    <input name="link" onChange={handleChange}  value={form.link} className="input" type="text"placeholder="https://academy.eincode.com" />
                </div>
                </div>
                <div className="field">
                <label className="label">Priority</label>
                <div className="control">
                    <div className="select">
                    <select name="priority" onChange={handleChange} value={form.priority}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    </div>
                </div>
                </div>
                <div className="field">
                <label className="label">Time to finish</label>
                <div className="control">
                    <input onChange={handleChange}  name="timeToFinish" value={form.timeToFinish} className="input" type="text" placeholder="60"/>
                </div>
                <p className="help">Time is in minutes</p>
                </div>
                <div className="field is-grouped">
                <div className="control">
                    <button onClick={submitForm} className="button is-link">Submit</button>
                </div>
                <div className="control">
                    <button onClick={resetForm} className="button is-link is-light">Cancel</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default ResourceForm;