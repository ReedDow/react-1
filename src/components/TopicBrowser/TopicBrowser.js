import React, {Component} from 'react';
import EvenAndOdd from './component/Topics/EvenAndOdd'
import FilterObject from '.component/Topics/FilterObject'
import FilterString from '.component/Topics/FilterString'
import Palindrome from '.component/Topics/Palindrome'
import Sum from '.component/Topics/Sum'


class TopicBrowser extends Component{
    render(){
        return (
        <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
        </div>
        )
    }
}
export default TopicBrowser;