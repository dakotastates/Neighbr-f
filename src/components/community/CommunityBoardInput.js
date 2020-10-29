import React, { useReducer } from 'react'

function CommunityBoardInput(props) {
   // const [message, setMessage] = useState();
   // const [user, setUser] = useState(props.user);

   const [userInput, setUserInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
    message: '',
    user: props.user,
    }
  );

   const handleOnChange = (e) => {
    setUserInput({

      [e.target.name]: e.target.value,
    });

  };

   const onSubmit = (e) => {
     e.preventDefault();
     // debugger
     props
       .createBoardMessage(userInput)
       // .then(() => {
       //   // debugger
       //
       // })
       setUserInput({
         message: ''
       });
     }

  return (
    <div>
    <h4>Community Board Input</h4>
    <form onSubmit={onSubmit}>
      <textarea
          name="message"
          placeholder="Post Message on Community Board"
          onChange={handleOnChange}
          value={userInput.message}
      />
      <input
          type="submit"
          value="Post"
      />
    </form>
    </div>
  )

}

export default CommunityBoardInput
