import React from 'react'

class NewTaskForm extends React.Component {

    state = {
        text: "",
        category_id: null,
        categories: []
    }

    componentDidMount() {
        fetch('http://localhost:9292/categories')
        .then(response => response.json())
        .then((categories) => this.setState({ categories }));
    }

    handleOnChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(this.state)
        }
        fetch("http://localhost:9292/tasks", config)
    }

    renderCategories = () => {
        return this.state.categories.map(category => {
            return <option value={category.id}>{category.name}</option>
        })
    }
    render() {
        return(
            <form action="" onSubmit={this.handleOnSubmit}>
                <input 
                    type="text" 
                    onChange={this.handleOnChange} 
                    name="text" 
                    value={this.state.text}
                    id="">
                    </input>
                    
                    <select onChange={this.handleOnChange} name="category_id" id="">
                        {this.renderCategories()}
                    </select>
                <button>Submit</button>
            </form>
        )
    }


}

export default NewTaskForm;