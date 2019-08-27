
import React from 'react';
// import styled from 'styled-components';
import { Input, Button, Avatar } from "antd";

// var _templateObject = _taggedTemplateLiteralLoose(['\n  padding: 8px 16px;\n\n  textarea {\n    border: 0;\n    font-size: 14px;\n    margin: 6px 0;\n    min-height: 60px;\n    outline: 0;\n  }\n'], ['\n  padding: 8px 16px;\n\n  textarea {\n    border: 0;\n    font-size: 14px;\n    margin: 6px 0;\n    min-height: 60px;\n    outline: 0;\n  }\n']),
    // _templateObject2 = _taggedTemplateLiteralLoose(['\n  background: whitesmoke;\n  border: 0;\n  box-sizing: border-box;\n  color: #363636;\n  cursor: pointer;\n  font-size: 1rem;\n  margin: 0;\n  outline: 0;\n  padding: 8px 16px;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(0,0,0,0.1);\n  width: 100%;\n\n  transition: background 0.21s ease-in-out;\n\n  &:focus, &:hover {\n    background: #eeeeee;\n  }\n'], ['\n  background: whitesmoke;\n  border: 0;\n  box-sizing: border-box;\n  color: #363636;\n  cursor: pointer;\n  font-size: 1rem;\n  margin: 0;\n  outline: 0;\n  padding: 8px 16px;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(0,0,0,0.1);\n  width: 100%;\n\n  transition: background 0.21s ease-in-out;\n\n  &:focus, &:hover {\n    background: #eeeeee;\n  }\n']);
// function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// var Inner = styled.div(_templateObject);
// var Button = styled.div(_templateObject2);

function TextEditor(props) {

  const { TextArea } = Input;
  return (
    <div className="new-annotation-wrapper" style={{ zIndex:"99" }}>
      <div className="annotation-head-block">
        <Avatar shape="circle" size={32} className="user-avatar" src={props.profile_pic && props.profile_pic.profile_pic} icon="user" /><h4 className="props-name" style={{width: "110px"}} >{props.profile_pic && props.profile_pic.first_name}</h4> <span className="time">{props.timecode}</span>
      </div>
      <div className="annotation-body-block">
        <TextArea
          onFocus= {props.onFocus}
          onBlur= {props.onBlur}
          onChange= {props.onChange}
          value= {props.value}
          placeholder="Write description" />
        <Button className="annotation-submit" htmlType="submit" onClick= {props.onSubmit}>
          Submit
        </Button>
      </div>
    </div>

  );

  // return React.createElement(
  //   React.Fragment,
  //   null,
  //   React.createElement(
  //     Inner,
  //     null,
  //     React.createElement('textarea', {
  //       placeholder: 'Write description',
  //       onFocus: props.onFocus,
  //       onBlur: props.onBlur,
  //       onChange: props.onChange,
  //       value: props.value
  //     })
  //   ),
  //   React.createElement('div', null, `${props.timecode}`),
  //   React.createElement('img', { src: `${props.profile_pic}`, className: "profile" }),

  //   props.value && React.createElement(
  //     Button,
  //     {
  //       onClick: props.onSubmit
  //     },
  //     'Submit'
  //   )
  // );
}

export default TextEditor;
