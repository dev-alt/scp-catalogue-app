import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import SCPFiles from './components/SCPFiles';

const scpEntries = [
  {
    number: 'SCP-1234',
    objectClass: 'Euclid',
    specialContainmentProcedures: ['Procedure 1', 'Procedure 2'],
    description: ['Description 1', 'Description 2'],
    reference: ['Reference 1', 'Reference 2'],
    Addendum: {
      'Addendum 1': 'Addendum 1 content',
      'Addendum 2': 'Addendum 2 content',
    },
  },
  {
    number: 'SCP-5678',
    objectClass: 'Safe',
    specialContainmentProcedures: ['Procedure 3', 'Procedure 4'],
    description: ['Description 3', 'Description 4'],
    reference: ['Reference 3', 'Reference 4'],
    Addendum: {},
  },
];

describe('SCPFiles', () => {
  it('renders "SCP not found" if the SCP is not in the entries', () => {
    render(
      <MemoryRouter initialEntries={['/scp/9999']}>
        <Route path="/scp/:scpId">
          <SCPFiles scpEntries={scpEntries} />
        </Route>
      </MemoryRouter>
    );

    expect(screen.getByText('SCP not found')).toBeInTheDocument();
  });

  it('renders the SCP information if the SCP is in the entries', () => {
    render(
      <MemoryRouter initialEntries={['/scp/1234']}>
        <Route path="/scp/:scpId">
          <SCPFiles scpEntries={scpEntries} />
        </Route>
      </MemoryRouter>
    );

    expect(screen.getByText('SCP-1234')).toBeInTheDocument();
    expect(screen.getByText('Object Class: Euclid')).toBeInTheDocument();
    expect(screen.getByText('Procedure 1')).toBeInTheDocument();
    expect(screen.getByText('Procedure 2')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
    expect(screen.getByText('Reference 1')).toBeInTheDocument();
    expect(screen.getByText('Reference 2')).toBeInTheDocument();
    expect(screen.getByText('Addendum: Addendum 1')).toBeInTheDocument();
    expect(screen.getByText('Addendum: Addendum 2')).toBeInTheDocument();
    expect(screen.getByText('Addendum 1 content')).toBeInTheDocument();
    expect(screen.getByText('Addendum 2 content')).toBeInTheDocument();
  });
});