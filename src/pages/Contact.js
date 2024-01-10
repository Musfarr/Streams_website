import React from 'react'

const Contact = () => {
  return (
    <div>
      <div style={{backgroundColor:'' , height:'600px', border:'8px solid #031731' , marginTop:'90px'  }} className='uk-grid' >
        <div className='uk-width-1-2 ' style={{display:'flex'}} >
          <div className='uk-flex uk-flex-middle ' >
          <img src='images/logo.jpeg'/>
          </div>
        </div>

        <div className='uk-width-1-2 form '  >
        <form>
    <fieldset class="uk-fieldset">

        <legend class="uk-legend">Legend</legend>

        <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Input" aria-label="Input"/>
        </div>

        <div class="uk-margin">
            <select class="uk-select" aria-label="Select">
                <option>Option 01</option>
                <option>Option 02</option>
            </select>
        </div>

        <div class="uk-margin">
            <textarea class="uk-textarea" rows="5" placeholder="Textarea" aria-label="Textarea"></textarea>
        </div>


    </fieldset>
</form>

        </div>

      </div>
    </div>
  )
}

export default Contact