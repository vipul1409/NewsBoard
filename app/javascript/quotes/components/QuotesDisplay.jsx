import React from 'react';  
import { Link } from 'react-router-dom';  
import queryString from 'query-string';  
import axios from 'axios';
import {Pager, Well} from 'react-bootstrap';

class QuotesDisplay extends React.Component {  
  constructor () {
    super();
    this.state = {
      quote: {}
    };
  }

  fetchQuote (id) {
    axios.get( `api/quotes/${id}` )
        .then(response => {
          this.setState({ quote: response.data });
        })
        .catch(error => {
          console.error(error);
        });
  }

  setQuoteIdFromQueryString (qs) {
    this.qsParams = queryString.parse(qs);
    if (this.qsParams.quote) {
      // assign quote ID from the URL's query string
      this.quoteId = Number(this.qsParams.quote);
    } else {
      this.quoteId = this.props.startingQuoteId;
      // update URL in browser to reflect current quote in query string
      this.props.history.push(`/?quote=${this.quoteId}`);
    }
  }

  componentDidMount () {
    this.setQuoteIdFromQueryString(this.props.location.search);
    this.fetchQuote(this.quoteId);
  }

  componentWillReceiveProps (nextProps) {
    this.setQuoteIdFromQueryString(nextProps.location.search);
    this.fetchQuote(this.quoteId);
  }

  render () {
    const quote = this.state.quote
    const nextQuoteId = quote.next_id
    const previousQuoteId = quote.prev_id

    return (
      <div>
        <Pager>
          {previousQuoteId && <Pager.Item href={`/?quote=${previousQuoteId}`}>Previous</Pager.Item> }
          {nextQuoteId && <Pager.Item href={`/?quote=${nextQuoteId}`}>Next</Pager.Item> }
        </Pager>
        <Well>
          <p >{this.state.quote.text}</p>
          <p>{this.state.quote.author}</p>
        </Well>
      </div>
    );
  }
}

export default QuotesDisplay;  
