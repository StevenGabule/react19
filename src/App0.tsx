import React, { useActionState } from 'react';
import TodoList from './components/TodoList';

// async function submitMessage(prevState, formData) {
//   try {
//     const message = formData.get('message');
//     if(!message) {
//       return {error: 'Message is required.'};
//     }

//     // Simulation API Call
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     return { success: `Message sent: ${message}`};
//   } catch (error) {
//     console.log({error})
//     return {error: 'Failed to send message'};
//   }
// }

// function MessageForm() {
//   const [state, formAction] = useActionState(submitMessage, null);

//   return (
//     <form action={formAction}>
//       <textarea name="message" rows={4} /> <br />
//       <button type="submit">Send</button>
//       {state?.error && <p style={{ color: 'red' }}>{state.error}</p>}
//       {state?.success && <p style={{ color: 'green' }}>{state.success}</p>}
//     </form>
//   )
// }

export default function App() {
  return (
    <>
      {/* <h1>React 19 useActionState Example</h1> */}
      {/* <MessageForm /> */}
      {/* <TodoList  /> */}
    </>
  )
}
