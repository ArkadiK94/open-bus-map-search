import moment from 'moment'

export type DataAndTimeSelectorProps = {
  time: moment.Moment
  onChange: (timeValid: moment.Moment) => void
}