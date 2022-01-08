import { getDayPeriod } from '@utils/getDayPeriod'

describe('getDayPeriod function', () => {
  it('should return day when hours is > 6 and < 18', () => {
    const input = 12

    const output = 'day'

    expect(getDayPeriod(input)).toEqual(output)

  })

  it('should not return day when hours is diferent > 6 and < 18', () => {
    const input = 0

    const output = 'day'

    expect(getDayPeriod(input)).not.toEqual(output)

  })
})