import axios from "axios";
import { Component } from "react";
import '../styles/Form.css';

class SearchForm extends Component{
    constructor(props){
        super(props)
        this.state ={
            url: '',
            subreddit: '',
            title: '',
            author: ''
        }
    }

    handle = (e) =>{
        e.preventDefault();
        axios.get(`https://meme-api.herokuapp.com/gimme/${this.state.subreddit}`).then(
            (data) => {
                this.setState({
                    url: data.data.url
                },
                this.setState({
                    subreddit: data.data.subreddit
                })
                )

                console.log(this.state.url)
                console.log(this.state.subreddit)
            }
        ).catch(
            () => console.log('erro')
        )
    }
    onChange = (e) =>{
        this.setState({subreddit: e.currentTarget.value})
    }


    render(){
        return(
            <form>
                <div className="form-row align-items-center">
                    <div className="col-md-9 input-div mb-4">
                        <input className="form-control" placeholder="subreddit" onChange={this.onChange}/>
                    </div>
                    <div className="col-auto">
                        <input type="submit" onClick={this.handle} className="btn btn-primary mb-1" />
                    </div>
                    <img src={this.state.url} className="img-fluid img-thumbnail" style={{height: '500px', width: '500px'}}/>
                </div>
            </form>
        )
    }
}

export default SearchForm;