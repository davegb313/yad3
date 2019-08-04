import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    showWaitingGif: false,
  }

setEmail = e=> this.setState({ email: e.target.value })
setPassword = e=> this.setState({ password: e.target.value })

login = ()=> {
  this.setState({ showWaitingGif: true })
  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: this.state.email,
      password: this.state.password,
    })
  }).then(response => response.json())
    .then(({ token })=> {
      setTimeout(()=> {
        this.setState({ showWaitingGif: false });
        this.props.onLogin(token);
      }, 1850);
    })
}

  render(){
    return (
    <div className={this.state.showWaitingGif ? 'Login waiting': 'Login'}>
      <img src="https://media0.giphy.com/media/VktiiifdCJarS/giphy.gif" />
      <label>
        <span>Email</span>
        <input value={this.state.email} onChange={this.setEmail} />
      </label>
      <label>
        <span>Password</span>
        <input value={this.state.password} onChange={this.setPassword} type='password' />
      </label>
      <button onClick={this.login}>LOGIN</button>
    </div>
  )
  }
}


export default Login;
