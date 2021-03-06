import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();

console.log(now.format('MMM Do, YYYY'))

export default class EventForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: props.event ? props.event.description : '',
            note: props.event ? props.event.note : '',
            amount: props.event ? (props.event.amount / 100).toString() : '',
            createdAt: props.event ? moment(props.event.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=> ({description}))
    }
    
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=> ({note}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount}))
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt) this.setState(()=>({createdAt}))
    }

    onFocusChange =({focused}) =>{
        this.setState(()=>({calendarFocused: focused}))
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(() =>({error: 'Please provide a description and amount'}))
        }else{
            this.setState(() => ({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

  render () {
    return (
        <form className='form' onSubmit={this.onSubmit}>
          <input className='text-input' type='text' placeholder='Description' autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
          <input className='text-input' type='text' placeholder='Amount' value={this.state.amount} onChange={this.onAmountChange} />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false }/>
          <textarea className='text-area' placeholder='Add a note for the event (optional)' cols='30' rows='10' value={this.state.note} onChange={this.onNoteChange} />
          <div>
            <button className='button' type='submit'>Add Expense</button>
          </div>
        </form>
    )
  }
}
