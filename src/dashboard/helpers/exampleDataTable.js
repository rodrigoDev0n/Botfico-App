export const columns = [
    {
        field: 'invoice',
        headerName: 'INVOICE',
        width: 150,
        editable: true,
    },
    {
        field: 'customer',
        headerName: 'Customer',
        width: 150,
        editable: true,
    },
    {
        field: 'date',
        headerName: 'Date',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'duedate',
        headerName: 'Due date',
        type: 'number',
        width: 110,
        editable: true,
        valueGetter: (params) =>
            `${params.row.duedate || ''}`,
    },
    {
        field: 'balance',
        headerName: 'Balance',
        width: 110,
        editable: false,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 210,
        editable: false,
    }
];

export const rows = [
    {
        id: 1,
        invoice: 1022,
        customer: 'Snow',
        date: '10/10/2020',
        duedate: '10/10/2020',
        balance: '$10.00',
        status: 'Overdue 10 days(not sent)',
    },
    {
        id: 2,
        invoice: 1022,
        customer: 'Lannister',
        date: '10/10/2020',
        duedate: '10/10/2020',
        balance: '$20.00',
        status: 'Overdue 10 days(not sent)',
    },
    {
        id: 3,
        invoice: 1022,
        customer: 'Lannister',
        date: '10/10/2020',
        duedate: '10/10/2020',
        balance: '$30.00',
        status: 'Overdue 10 days(not sent)',
    },
    {
        id: 4,
        invoice: 1022,
        customer: 'Stark',
        date: '10/10/2020',
        duedate: '10/10/2020',
        balance: '$40.00',
        status: 'Overdue 10 days(not sent)'
    },
    {
        id: 5,
        invoice: 1022,
        customer: 'Targaryen',
        date: '10/10/2020',
        duedate: '10/10/2020',
        balance: '$60.00',
        status: 'Overdue 10 days(not sent)'
    },
    {
        id: 6,
        invoice: 1022,
        customer: 'Melisandre',
        date: '10/10/2020',
        duedate: '10/10/2020',
        balance: '$60.00',
        status: 'Overdue 10 days(not sent)'
    },
    {
        id: 7,
        invoice: 1022,
        customer: 'Clifford',
        date: '10/10/2020',
        duedate: '10/10/2020',
        balance: '$60.00',
        status: 'Overdue 10 days(not sent)'
    },
    {
        id: 8,
        invoice: 1022,
        customer: 'Frances',
        date: '10/10/2020',
        duedate: '10/10/2020',
        balance: '$60.00',
        status: 'Overdue 10 days(not sent)'
    },
    {
        id: 9,
        invoice: 1022,
        customer: 'Roxie',
        date: '10/10/2020',
        duedate: '10/10/2020',
        balance: '$60.00',
        status: 'Overdue 10 days(not sent)'
    },
];