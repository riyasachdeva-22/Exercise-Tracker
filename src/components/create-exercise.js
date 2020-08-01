import React,{Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
export default class CreateExercise extends Component
{
    constructor(props)
    {
        super(props);
        //this refers to current class
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onChangeDuration=this.onChangeDuration.bind(this);
        this.onChangeDate=this.onChangeDate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            username:'',
            description:'',
            duration:0,
            date:new Date(),
            users:[]
        }
    }
    //lifecycle method automatically called when anything renders
    componentDidMount()
    {
        
           axios.get('http://localhost:5000/users/')
           .then(response=>{
            if(response.data.length>0)
            {
                this.setState({
                    users:response.data.map(user=> user.username),
                    username:response.data[0].username
                })
            }
           })

        
    }
    onChangeUsername(e)
    {
        this.setState({
            username: e.target.value
        });
    }
    onChangeDescription(e)
    {
        this.setState({
            description: e.target.value
        });
    }
    onChangeDate(date)
    {
        this.setState({
            date: date
        });
    }
    onChangeDuration(e)
    {
        this.setState({
            duration: e.target.value
        });
    }
    onSubmit(e)
    {
        e.preventDefault(); //default html content
        const exercise={
            username:this.state.username,
            description:this.state.description,
            duration:this.state.duration,
            date:this.state.date
        }
        console.log(exercise);
        axios.post('http://localhost:5000/exercise/add',exercise)
        .then(res=>console.log(res.data));
        window.location='/';//window back to exercises
    }
    render()
    {
      return(
          <div>
              <h1>Create new Exercise Log </h1>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Username:</label>
                      <select ref="userinput"
                      required //drop menu
                      className="form-control"
                      value={this.state.username}
                      onChange={this.onChangeUsername}>
                          {
                              this.state.users.map(function(user) //return somethingfor each elemnt in array
                              {
                                  return<option
                                  key={user}
                              value={user}>{user}</option>;
                              })
                          }
                      </select>
                  </div>
                          <div className="form-group">
                              <label>Description:</label>
                              <input type="text"
                              required
                              className="form-control"
                              value={this.state.description}
                              onChange={this.onChangeDescription}
                              />
                          </div>
                          <div className="form-group">
                        <label>Duration (in minutes):</label>   
                        <input
                        type="text"
                        className="form-control"
                        value={this.state.duration}
                        onChange={this.onChangeDuration}
                        />
                        </div>
                        <div className="form-group">
                        <label>Date:</label> 
                        <div>
                          <DatePicker
                          selected={this.state.date}
                          onChange={this.onChangeDate}
                          />
                        </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Create new Exercise Log" className="btn btn-primary"/>

                       </div>
              </form>
          </div>
      )
    }
}