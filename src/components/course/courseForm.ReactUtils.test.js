import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setUp(saving){
  let props = {
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  if(saving) props.saving = saving;

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('CourseForm via React Test Utils', () => {
  it('renders form and h1', () => {
    const { output } = setUp();
    expect(output.type).toBe('form');

    let h1 = output.props.children[0];
    expect(h1.type).toBe('h1');
  });

  it('save button is labeled "save" when not saving', () => {
    const { output } = setUp(false);
    let submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const { output } = setUp(true);
    let submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Saving...');
  });
});
