import React from 'react'
import PropTypes from 'prop-types'
import { theme, breakpoint } from '@aragon/ui'
import styled from 'styled-components'

const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const ScheduleContainer = styled.div`
  margin-top: 50px;
  .schedule {
    width: 100%;
    max-width: 800px;
    background: #fff;
    padding: 0;
    ${medium('padding: 5px 50px;')};
    position: relative;
    margin: auto;
  }
  .schedule:before {
    content: '';
    position: absolute;
    top: 6px;
    left: calc(33% - 1px);
    ${medium('left: calc(33% + 16px);')};
    bottom: 0px;
    width: 2px;
    background: #ddd;
  }
  .schedule:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Schedule = ({ className, ...props }) => {
  const containerProps = { className }

  return (
    <ScheduleContainer {...containerProps}>
      <div className="schedule">
        <div {...props} />
      </div>
    </ScheduleContainer>
  );
};

Schedule.propTypes = {
  className: PropTypes.string,
};

export default Schedule
