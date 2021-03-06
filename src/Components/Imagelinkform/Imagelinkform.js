import React from 'react';
import './Imagelinkform.css';

const Imagelinkform = ({ onInputChange, onButtonsubmit }) => {
	return (
		<div>
          <p className = 'f3'>
          	{'This will detect the faces in your pictures. Give it a go!'}
          </p>
          <div className = 'center'>
            <div className = ' form  center pa4 br3 shadow-5'>
	          	<input className = 'f4 pa2 w-70 center' type ='text' onChange={onInputChange} />
	          	<button 
		          className = 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
		          onClick={onButtonsubmit}
	          	>Detect</button>
          	</div>
          </div>
		</div>

    );
}
export  default Imagelinkform;