import React from 'react'
import { connect } from "react-redux";
import { storeUser, createUser } from "../../actions/UserActions";
import { login } from "../../actions/AuthActions";

class Signup extends React.Component {
  state = {
      email:"",
      password: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      birthday: "",
      phone: "",
      gender: ""



    };

    handleOnChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };


    onSubmit = (e) => {
      e.preventDefault();
      this.props
         .createUser(this.state)
         .then(() => this.props.login())
         .catch((error) => {
           alert(error);
           console.log(error);
         });
    };

    render(){
        return(
            <div>
                <h1>SignUp Form</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        value={this.state.first_name}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input
                        type="text"
                        name="middle_name"
                        placeholder="Middle Name"
                        value={this.state.middle_name}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        value={this.state.last_name}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={this.state.phone}
                        onChange={this.handleOnChange}
                    />
                    <br/>
                    <input type="radio" id="male" name="gender" value="male"/>
                    <label for="male">Male</label><br/>
                    <input type="radio" id="female" name="gender" value="female"/>
                    <label for="female">Female</label><br/>
                    <input type="radio" id="other" name="gender" value="other"/>
                    <label for="other">Other</label>
                    <br/>
                    <label for="birthday">Birthday:</label>
                    <input type="date" name="birthday"/>
                    <br/>
                    <input
                        type="submit"
                        value="SignUp"
                    />
                </form>
                Already have an Account? <button onClick={()=>this.props.toggle(true)}>Login</button>
            </div>
        )
    }
}



export default connect(null, { storeUser, login, createUser })(Signup);
