import React from 'react';
import {connect} from 'react-redux';

function Home (props) {
  return (
    <div className='home'>
      <form onSubmit={props.handleSubmit}>
        <h1>Welcome to the Casino!</h1>
        <br/>
        <h3>Please enter your name:</h3>
        <input type='text' name='userName'/>
        <br/>
        <h3>How much would you like to deposit today?</h3>
        <input type='text' name='deposit'/>
        <button type='submit'>Play!</button>
      </form>
    </div>
  )
}

const mapState = state =>{
  return {

  }
}

const mapDispatch = dispatch =>{
  return {
    handleSubmit: event =>{
      event.preventDefault();
    }
  }
}


export default connect(mapState, mapDispatch)(Home)
