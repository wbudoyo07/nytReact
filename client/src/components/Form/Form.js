import React from "react";
import "./Form.css";

export const Form = ()=> (

<div className = "row justify-content-center">
  <div className = " col-sm-6">
    <div className ="card"> 
      <div className = "card-header">
      <strong><i class="fa fa-list-alt"></i> Search Parameters</strong>
      </div>
      <div className ="card-body">
        <form role ="form">
          <div className = "form-group">
            <label for ="search"> Search Term:</label>
            <input type="text" className ="form-control" id="search-term"/>
          </div>
          <div className="form-group">
                <label for="start-year">Start Year (Optional):</label>
                <input type="text" className="form-control" id="start-year"/>
          </div>
          <div className="form-group">
                <label for="end-year">End Year (Optional):</label>
                <input type="text" className="form-control" id="end-year"/>
          </div>    
          <button type="submit" className="btn btn-primary" id="run-search">Search  </button>
        </form>
      </div>
    </div>
  </div>
</div>

);

export default Form;