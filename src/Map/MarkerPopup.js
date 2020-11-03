import React from 'react';
import { useForm } from 'react-hook-form';
import './Map.scss';

const MarkerPopup = ({ handleChange, marker, createMarker }) => {
	const { register, handleSubmit, errors } = useForm();

	return (
		<form className='Marker' onSubmit={handleSubmit(createMarker)}>
			<label className='Marker__Date' htmlFor='date'>
				Date{' '}
			</label>
			<input
				id='date'
				type='date'
				name='date'
				placeholder='Enter Date'
				value={marker.date}
				onChange={handleChange}
				ref={register({
					required: { value: true },
				})}
			/>
			{errors.date && <p className='Error'>• Must have a date</p>}
			<label className='Marker__Description' htmlFor='plans'>
				Plans
			</label>
			<textarea
				id='plans'
				name='plans'
				placeholder='Enter Plans'
				cols='20'
				rows='10'
				value={marker.plans}
				onChange={handleChange}
				ref={register({
					required: { value: true },
				})}
			/>
			{errors.plans && <p className='Error'>• Must enter plans</p>}
			<button className='Marker__Submit'>Submit</button>
		</form>
	);
};

export default MarkerPopup;
