import { useState } from 'react';
import './movies-add-form.css';

const MoviesAddForm = ({ addForm }) => {
  const [state, setState] = useState({ name: '', views: '' });

  const changeHandlerInput = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addFormHandler = (e) => {
    e.preventDefault();
    if (state.name === '' || state.views === '') return;
    const data = { name: state.name, viewers: state.views };
    addForm(data);
    setState({ name: '', views: '' });
  };

  return (
    <div className='movies-add-form'>
      <h3>Ulugbek sevgan kinolarni qo'shish</h3>
      <form
        className='add-form d-flex'
        onSubmit={addFormHandler}
      >
        <input
          type='text'
          className='form-control new-post-label'
          placeholder='Qanday kino ekanmu?'
          onChange={changeHandlerInput}
          name='name'
          value={state.name}
        />
        <input
          type='number'
          className='form-control new-post-label'
          placeholder="Nechi milion marta ko'rilgan?"
          onChange={changeHandlerInput}
          name='views'
          value={state.views}
        />
        <button
          type='submit'
          className='btn btn-outline-dark'
        >
          Qo'shish
        </button>
      </form>
    </div>
  );
};

// class MoviesAddForm extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             name: '',
//             views: '',
//         }
//     }

//     changeHandlerInput = e => {
//         this.setState({
//             [e.target.name]: e.target.value,
//         })
//     }

//     addFormHandler = e => {
//         e.preventDefault()
//         this.props.addForm({name: this.state.name, viewers: this.state.views })
//         this.setState({
//             name: '',
//             views: '',
//         })
//     }

//     render() {
//         const { name, views } = this.state

//         return (
//           <div className='movies-add-form'>
//             <h3>Ulugbek sevgan kinolarni qo'shish</h3>
//             <form className='add-form d-flex' onSubmit={this.addFormHandler}>
//                 <input type='text' className='form-control new-post-label' placeholder='Qanday kino ekanmu?'
//                 onChange={this.changeHandlerInput} name='name' value={name}/>
//                 <input type='number' className='form-control new-post-label' placeholder="Nechi milion marta ko'rilgan?"
//                 onChange={this.changeHandlerInput} name='views' value={views} />
//                 <button type='submit' className='btn btn-outline-dark'>
//                     Qo'shish
//                 </button>
//             </form>
//           </div>
//         )
//     }
// }

//    const MoviesAddForm  = () => {
//        return <div className='movies-add-form'>
//            <h3>Ulugbek sevgan kinolarni qo'shish</h3>
//            <form className='add-form d-flex'>
//                <input type='text' className='form-control new-post-label' placeholder='Qanday kino ekanmu?' />
//                <input type='number' className='form-control new-post-label' placeholder="Nechi milion marta ko'rilgan?" />
//                <button type='submit' className='btn btn-outline-dark'>
//                    Qo'shish
//                </button>
//            </form>
//        </div>

export default MoviesAddForm;
