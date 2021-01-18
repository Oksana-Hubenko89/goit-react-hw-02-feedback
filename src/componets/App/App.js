import React, { Component } from 'react';
import './App.css';
import Statistics from '../Statistics'
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';

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
    //return console.log();


  render() {
    let total = this.countTotalFeedback();
    // let good = this.state.good;
    // let positivePercentage =Math.round(100*good/total) ;
    let positivePercentage = this.positivePercentage();
    return (
      <Section>
        <Section  title="Please leave feedback" >
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={positivePercentage}/>
        </Section>
     </Section>
    )
  }

}
export default App;
