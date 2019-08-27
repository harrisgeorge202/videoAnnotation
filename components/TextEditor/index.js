  

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Input, Button, Avatar } from "antd";

var _templateObject = _taggedTemplateLiteralLoose(['\n  padding: 8px 16px;\n\n  textarea {\n    border: 0;\n    font-size: 14px;\n    margin: 6px 0;\n    min-height: 60px;\n    outline: 0;\n  }\n'], ['\n  padding: 8px 16px;\n\n  textarea {\n    border: 0;\n    font-size: 14px;\n    margin: 6px 0;\n    min-height: 60px;\n    outline: 0;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  border-radius: 0px;\n\n margin: 6px 0px;']);
var _templateObject3 = _taggedTemplateLiteralLoose(['\n width: 15%;\n border-radius: 50%; \n']);
var _templateObject4 = _taggedTemplateLiteralLoose(['\n  \n']);

    function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
var Inner = styled.div(_templateObject);
var Img = styled.img(_templateObject3);
var userName = styled.h4(_templateObject4);
var videoTime = styled.span(_templateObject4);
var ButtonStyle = styled.div(_templateObject2);







function TextEditor(props) {

  const images =     React.createElement(Img, {
    className: props.className,
    style: props.style,
    alt: props.allProps && props.allProps.alt,
    src: props.profile_pic,
    draggable: false,
  });

  let Names =     React.createElement(userName,{},
    `Nimisha`
    );

    
    let videoTImes = React.createElement(videoTime, null, `${props.timecode}`);

  const { TextArea } = Input;
  console.log("props -------", props)
  // return (
  //   <div className="new-annotation-wrapper" style={{ zIndex:"99" }}>
  //     <div className="annotation-head-block">
  //       <Avatar shape="circle" size={32} className="user-avatar" src={props.profile_pic} icon="user" /><h4 className="props-name">Nimisha</h4><span className="time">{props.timecode}</span>
  //     </div>
  //     <TextArea
  //       onFocus= {props.onFocus}
  //       onBlur= {props.onBlur}
  //       onChange= {props.onChange}
  //       value= {props.value}
  //       placeholder="Write description" />
  //     <Button className="annotation-submit" htmlType="submit" onClick= {props.onSubmit}>
  //       Submit
  //     </Button>
  //   </div>
  // );

  return React.createElement(
    React.Fragment,
    null,

    React.createElement('div', {}, [images, Names, videoTImes]),


    React.createElement(
      Inner,
      null,
      React.createElement('textarea', {
        placeholder: 'Write description',
        onFocus: props.onFocus,
        onBlur: props.onBlur,
        onChange: props.onChange,
        value: props.value
      })
    ),



    props.value && React.createElement(
      Button, 
      {
        style: ButtonStyle,
        onClick: props.onSubmit
      },
      'Submit'
    )
  );
}

export default TextEditor;