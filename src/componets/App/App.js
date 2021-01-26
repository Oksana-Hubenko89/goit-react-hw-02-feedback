import React, { Component } from 'react';
import './App.css';
import Statistics from '../Statistics'
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Statistics/Notification';

class App extends Component {

  static defaultProps = {
    initialValue: 0,    
  }
  static propTypes = {
   //
  }

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };
 
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  onLeaveFeedback = (options) =>{
    this.setState(prevState => ({
      [options]: prevState[options] + 1,
     }));
  };

  positivePercentage = () => {
    const percentage = Math.round((this.state.good / this.countTotalFeedback()) * 100);
    return percentage >= 0 ? percentage : 0;
  };
       
  render() {
    return (
      <Section>
        <Section  title="Please leave feedback" >
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics" display={true}>
        {(this.countTotalFeedback() === 0) ? <Notification message="No feedback given" />
            : <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}
              total={this.countTotalFeedback()} positivePercentage={this.positivePercentage()} />}          
        </Section>
     </Section>
    )
  }
}

export default App;
