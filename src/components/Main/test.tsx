import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Should render the heading', () => {
    const container = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    expect(container).toMatchSnapshot('Snapshot of <Main /> with heading')
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
