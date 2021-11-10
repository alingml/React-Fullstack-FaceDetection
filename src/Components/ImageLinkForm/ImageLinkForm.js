import React from "react"

import "./ImageLinkForm.css"

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="tc">
      <p className="f3">{"The SOSOY will detect faces in your photos"}</p>
      <div className="center">
        <div className="form pa4 br3 center shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
            style={{
              border: "none",
              borderRadius: "5px 0 0 5px",
              color: "black",
            }}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            style={{ border: "none", borderRadius: "0 5px 5px 0" }}
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
