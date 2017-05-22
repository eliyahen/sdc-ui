import React from 'react';

class Radio extends React.Component {
	render() {
		let {checked = false, disabled, value, label, inputRef, name} = this.props;
		let dataTestId = this.props['data-test-id'];
		return (<div className='sdc-radio'>
			<input ref={inputRef} data-test-id={dataTestId} type='radio' name={name} checked={checked}  disabled={disabled}
				   onChange={(e) => this.onChange(e)} className='sdc-radio__input' value={value} />
			<label className='sdc-radio__label'>{label}</label>
		</div>);
	}

	onChange(e) {
		let {onChange} = this.props;
		onChange && onChange(e.target.checked);
	}

	getChecked() {
		return this.props.checked;
	}

	getValue() {
		return this.props.value;
	}
}

export default Radio;
